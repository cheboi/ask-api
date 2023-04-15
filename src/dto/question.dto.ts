export class CreateQuestionDto {
  title: string;
  description: string;
  user: string;
  date_asked: Date;
  deleted: boolean;
}

export default CreateQuestionDto;
