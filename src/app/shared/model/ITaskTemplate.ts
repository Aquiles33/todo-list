export class ITaskTemplate {
  id_: number;
  description_: string;
  status_: string;

  constructor(id: number, description: string, status?: string) {
    this.id_ = id;
    this.description_ = description;
    this.status_ = status ? status : 'todo';
  }
}
