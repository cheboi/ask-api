import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateQuestionDto from '../dto/question.dto';
import { QuestionsService } from '../services/questions.service';
import { UpdateQuestionDto } from '../dto/updateQuestion.dto';

@Controller('todos')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  // get all questions
  @Get()
  getQuestions() {
    return this.questionsService.getAllQuestions();
  }

  // get question by id
  @Get(':id')
  getQuestionById(@Param('id') id: string) {
    return this.questionsService.getQuestionById(Number(id));
  }

  // create question
  @Post()
  async createQuestion(@Body() question: CreateQuestionDto) {
    return this.questionsService.createQuestion(question);
  }

  // update question
  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() question: UpdateQuestionDto,
  ) {
    return this.questionsService.updateQuestion(Number(id), question);
  }

  //delete question
  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    this.questionsService.deleteQuestion(Number(id));
  }
}
