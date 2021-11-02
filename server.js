require('dotenv').config();
const express = require('express')

const { Article } = require('./models')

const app = express()
const port = process.env.PORT 
app.use(express.json())

app.post('/article', async(req, res) => {
    const { title, description, userId } = req.body
      
    try{
      const article =  await Article.create({ title, description, userId })
    
      return res.json(article)
    }catch(err){
      console.log(err)
      return res.status(500).json(err)
    }
})

app.get('/article', async(req, res) => {

    try{
      const article =  await Article.findAll({})
  
    return res.json(article)
  } catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
})

app.get('/article/:id', async(req, res) => {
  const { title, description, userId } = req.body
  const id = req.params.id
  
    try{
      const article =  await Article.findByPk(id,{})
   
    return res.json(article)
     
  } catch(err){
      console.log(err)
    return res.status(500).json(err)
  }
})

app.put('/article/:id', async(req, res) => {
  const { title, description, userId } = req.body
  const id = req.params.id
 
  try{
    const article =  await Article.findByPk(id,{})
    if (article) {
      article.update({ title, description, userId })
    
    }
    return res.status(201).send("Data berhasil diupdate")
     
  } catch(err){
      console.log(err)
    return res.status(500).json(err)
  }
})

app.delete('/article/:id', async(req, res) => {
  const id = req.params.id
  try{
     const article =  await Article.findByPk(id)
     if (article) {
      article.destroy(id)
      
     }
     return res.status(201).send("Data berhasil dihapus")
     
  }  catch(err){
      console.log(err)
     return res.status(500).json(err)
  }
})

app.listen(port, async () => {
    console.log(`Server up on http://localhost:${port}`)
    
    console.log('Database synced!')
})
      
