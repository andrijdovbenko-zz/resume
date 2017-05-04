export class Work {
  constructor(public name: string,
              public link: string,
              public technologies: string[],
              public imgPath: string,
              public imgMinPath: string,
              public selected: boolean = false
  ) {}
}
