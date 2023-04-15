export class UpdateQuestionDto {
  id: number;
  title: string;
  description: string;
  update_date: Date;
  deleted: boolean;
}

export default UpdateQuestionDto;
