import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
    _id: new Date().getTime(),
    title: "Cumpleaños del jefe",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: "#14ab14",
    user: {
        _id: 123,
        name: "Gerardo valencia"
    }
}

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: {
        events: [
            tempEvent,
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, action) => {
            state.activeEvent = action.payload;
        },
        onAddEvent: (state, action) => {
            state.events.push(action.payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, action) => {
            state.events = state.events.map(calendarEvent => {
                if(calendarEvent._id === action.payload._id) {
                    return action.payload;
                }
                return calendarEvent;
            })
            state.activeEvent = null;
        },
        onDeleteEvent: (state) => {
            state.events = state.events.filter(calendarEvent => calendarEvent._id !== state.activeEvent._id);
            state.activeEvent = null;
        }
    }
});

export const { events, activeEvent, onSetActiveEvent, onAddEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;