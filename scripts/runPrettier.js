#!/bin/env node

const fs = require("fs")
const path = require("path")
const process = require("process")
const cp = require("child_process")

const prettierPath = path.resolve(__dirname, "../node_modules/.bin/prettier")
const files = process.argv.slice(2)

files.forEach(function (file) {
  if (file.startsWith("ios") || file.startsWith("android")) {
    return
  }

  try {
    cp.execFileSync(prettierPath, ["--check", file], {
      stdio: ["ignore", "ignore", "inherit"],
    })
  } catch {
    process.exit(1)
  }
})
