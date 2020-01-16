export class City {
  constructor(
    public id: number,
    public name: string,
    public stateOrProvince: string,
    public rating: number = 0,
    public highlights?: string[]
  ) { }
}
