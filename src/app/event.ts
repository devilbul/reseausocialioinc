export class Event {
  constructor(
    public address: string,
    public date: string,
    public id_event: number,
    public latitude: string,
    public longitude: string,
    public title: string,
    public type: string
  ) {}
}
