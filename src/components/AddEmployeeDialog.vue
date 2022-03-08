<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="75vw">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" v-bind="attrs" v-on="on"
          >APPEND NEW TITANER</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="text-h5 lighten-2">
          APPEND NEW TITANER
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <name-field />
            </v-col>
            <v-col>
              <department-field />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <job-title-field />
            </v-col>
            <v-col>
              <sex-field />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ability-field />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <evaluate-field />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog()"> APPEND !! </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  AbilityField,
  DepartmentField,
  EvaluateField,
  JobTitleField,
  NameField,
  SexField,
} from "./EmployeeField.vue";
export default {
  name: "AddEmployeeDialog",
  data: () => ({
    dialog: false,
  }),
  methods: {
    closeDialog: () => {},
  },
  components: {
    AbilityField,
    DepartmentField,
    EvaluateField,
    JobTitleField,
    NameField,
    SexField,
  },
};
</script>