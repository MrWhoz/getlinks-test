const express = require('express')
const faker = require('faker')
const router = express.Router()
/* GET users listing. */
router.get('/post', function(req, res, next) {
  const data = generateFakeNews()
  res.send(data)
})

const generateFakeNews = () => {
  const result = []
  for (let i = 0; i < 8; i++) {
    const newsData = {
      id: i,
      title: faker.hacker.phrase(),
      thumbnail: faker.internet.avatar(),
      content: faker.lorem.paragraph()
    }
    result.push(newsData)
  }
  return result
}

module.exports = router
