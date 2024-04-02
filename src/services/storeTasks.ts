import { Social } from "near-social-bridge/api";
import { Task } from "./getTasks";

// save tasks state
const storeTasks = (updatedTasks: Task[], accountId: string) => 
    Social.set<{ error?: string }>({
        index: {
            [`devbot-app-${accountId}`]: JSON.stringify({
                key: "tasks",
                value: updatedTasks,
            }),
        },
    });

export default storeTasks;