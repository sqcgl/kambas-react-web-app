import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        ...assignment,
      };
      state.assignments = [...state.assignments, newAssignment];
      console.log("New assignments state:", state.assignments);
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, action) => {
      const updatedAssignment = action.payload;
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === updatedAssignment._id
          ? updatedAssignment
          : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
