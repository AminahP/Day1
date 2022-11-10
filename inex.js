const genToken = (id) => {
    return JWT.sign({ id }, process.env.JWT_SECRET)
  }

  console.log(id)