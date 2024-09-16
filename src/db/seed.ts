import dayjs from "dayjs";
import { client, db } from "../db";
import { goalCompletions, goals } from "./schema";

async function seed() {
  await db.delete(goalCompletions);
  await db.delete(goals);

  const [goal1] = await db
    .insert(goals)
    .values([
      {
        title: "fazer exercícios",
        desiredWeeklyFrequency: 1,
      },
    ])
    .returning();

  const startOfWeek = dayjs().startOf("week");

  await db
    .insert(goalCompletions)
    .values([{ goalId: goal1.id, createdAt: startOfWeek.toDate() }]);
}

seed().then(() => {
  console.log("🌱 Database seeded successfully!");
  client.end();
});
