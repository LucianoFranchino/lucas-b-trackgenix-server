import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
  name: { type: String, required: true },
  clientName: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  employees: [{
    _id: false, // Para evitar que mongoose autogenere un nuevo id
    employee: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Employees' },
    rate: { type: Number, required: true },
    role: { type: String, required: true },
  }],
});

export default mongoose.model('Projects', projectSchema);
