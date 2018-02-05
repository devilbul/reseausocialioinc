export class Article {
  constructor(
    public id_feed: number,
    public user_img: string,
    public user_firstname: string,
    public user_lastname: string,
    public date_publication: string,
    public title: string,
    public description: string,
    public img: string,
    public nb_comment: number
  ) {}
}
