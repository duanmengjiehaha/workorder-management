import { defineStore } from 'pinia';

interface Ticket {
  id: string;
  project: string;
  overtime: boolean;
  hours: number;
  created_at: string;
}

export const useTicketsStore = defineStore('tickets', {
  state: () => ({
    tickets: [
      {
        id: "001",
        project: "Road Project A",
        overtime: true,
        hours: 3.5,
        created_at: "2024-04-10 10:30"
      },
      {
        id: "002",
        project: "Bridge Maintenance B",
        overtime: false,
        hours: 2,
        created_at: "2024-04-09 13:00"
      },
      {
        id: "003",
        project: "Pipeline Fix C",
        overtime: true,
        hours: 4.5,
        created_at: "2024-04-08 08:00"
      },
      {
        id: "004",
        project: "Bridge Maintenance B",
        overtime: true,
        hours: 3,
        created_at: "2024-04-07 16:45"
      },
      {
        id: "005",
        project: "Tunnel Cleaning D",
        overtime: false,
        hours: 8.1,
        created_at: "2024-04-03 11:43"
      }
    ] as Ticket[],
  }),
  getters: {
    projectHours: (state) => {
      const projectHours = new Map<string, number>();
      for (const ticket of state.tickets) {
        const hours = projectHours.get(ticket.project) || 0;
        projectHours.set(ticket.project, hours + ticket.hours);
      }
      return Array.from(projectHours.entries()).map(([name, value]) => ({ name, value }));
    },
  },
  actions: {
    deleteTicket(id: string) {
      this.tickets = this.tickets.filter((ticket) => ticket.id !== id);
    },
  },
});
