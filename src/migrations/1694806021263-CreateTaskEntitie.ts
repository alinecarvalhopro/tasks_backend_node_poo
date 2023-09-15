import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTaskEntitie1694806021263 implements MigrationInterface {
    name = 'CreateTaskEntitie1694806021263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."tasks_status_enum" AS ENUM('toDo', 'progress', 'revision', 'finished')`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "status" "public"."tasks_status_enum" NOT NULL DEFAULT 'toDo', "userId" uuid, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TYPE "public"."tasks_status_enum"`);
    }

}
