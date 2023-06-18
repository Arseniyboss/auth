import mongoose from 'mongoose'

const isConnected = mongoose.connection.readyState === 1

export const connectToDB = async () => {
  if (isConnected) return
  await mongoose.connect(process.env.MONGO_URI)
}
