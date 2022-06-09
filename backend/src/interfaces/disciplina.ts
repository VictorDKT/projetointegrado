import { Document } from 'mongoose';
import ITurma from './turma';

interface IDisciplina extends Document {
  name: String;
  icon: String;
  color: String;
}

export default IDisciplina;
