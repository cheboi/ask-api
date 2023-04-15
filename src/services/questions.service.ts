import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateQuestionDto from '../dto/question.dto';
import Question from '../entities/questions.entity';
import { UpdateQuestionDto } from '../dto/updateQuestion.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  // find all
  getAllQuestions() {
    return this.questionRepository.find();
  }

  // find by id
  async getQuestionById(id: number) {
    const question = await this.questionRepository.findOne(id);
    if (question) {
      return question;
    }

    throw new HttpException('question not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createQuestion(question: CreateQuestionDto) {
    const newQuestion = await this.questionRepository.create(question);
    await this.questionRepository.save(newQuestion);

    return newQuestion;
  }

  // update
  async updateQuestion(id: number, post: UpdateQuestionDto) {
    await this.questionRepository.update(id, post);
    const updatedQuestion = await this.questionRepository.findOne(id);
    if (updatedQuestion) {
      return updatedQuestion;
    }

    throw new HttpException('Question not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteQuestion(id: number) {
    const deletedQuestion = await this.questionRepository.delete(id);
    if (!deletedQuestion.affected) {
      throw new HttpException('question not found', HttpStatus.NOT_FOUND);
    }
  }
}
