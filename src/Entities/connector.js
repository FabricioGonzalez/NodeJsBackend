export default class Connector {
  constructor({
    Name,
    Type,
    Privacy,
    BaseURL,
    LogoURL,
    Category,
    Description,
    Status,
  }) {
    this.Name = Name;
    this.Type = Type;
    this.Privacy = Privacy;
    this.BaseURL = BaseURL;
    this.LogoURL = LogoURL;
    this.Category = Category;
    this.Description = Description;
    this.Status = Status;
  }

  validate() {
    const propertyNames = Object.getOwnPropertyNames(this);
    const amountInvalid = propertyNames
      .map((property) => (!!this[property] ? null : `${property} is Missing!!`))
      .filter((item) => !!item);
    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid,
    };
  }
}
