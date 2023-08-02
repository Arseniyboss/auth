import { Schema, models, model, Model } from 'mongoose'
import bcrypt from 'bcryptjs'

type UserSchema = {
  id: string
  name: string
  email: string
  password: string
  matchPassword: (password: string) => Promise<boolean>
}

type UserModel = Model<UserSchema>

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.methods.matchPassword = async function (password: string) {
  return bcrypt.compare(password, this.password)
}

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

const User: UserModel = models.User || model('User', userSchema)

export default User
