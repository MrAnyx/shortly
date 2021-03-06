import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Urls extends BaseSchema {
  protected tableName = 'urls'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('url').notNullable()
      table.string('slug').notNullable().unique()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
