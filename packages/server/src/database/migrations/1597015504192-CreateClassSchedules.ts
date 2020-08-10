import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClassSchedules1597015504192
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'class_schedule',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'class_id',
            type: 'uuid',
          },
          {
            name: 'week_day',
            type: 'integer',
          },
          {
            name: 'from',
            type: 'integer',
          },
          {
            name: 'to',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'ScheduleClass',
            referencedTableName: 'classes',
            referencedColumnNames: ['id'],
            columnNames: ['class_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('class_schedule');
  }
}
