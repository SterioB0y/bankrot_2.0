const express = require('express')

const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 3001

const cors = require("cors")

const app = express()

app.listen(PORT, () => {
    console.log("server on ",PORT)
})

const options = {
    target: 'https://bankrot.gov.by', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    router: {
      // when request.headers.host == 'dev.localhost:3000',
      // override target 'http://www.example.org' to 'http://localhost:8000'
      'dev.localhost:3000': 'http://localhost:3001',
    },
  };

  const example = createProxyMiddleware(options)


app.use(cors())
app.use('/Debtors/GetDebtorsCount', example);
app.use('/Debtors/GetDebtors', example);
app.use('/Debtors/GetFiltersValues', example);