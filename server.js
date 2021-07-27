const express = require("express")
const app = express()

// Load env vars
const dotenv = require("dotenv")
dotenv.config({ path: "./config/config.env" })

// Middleware
// const logger = require("./middleware/logger")
// app.use(logger)
// Dev logging middleware
const morgan = require("morgan")
if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

// Route files
const bootcamps = require("./routes/bootcamps")

// Mount routers
app.use("/api/v1/bootcamps", bootcamps)

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)

