<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Write what sucks most:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.text"
          required
          placeholder="Enter it"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      form: {
        text: '',
      },
      show: true,
    };
  },
  methods: {

    getText() {
      const path = 'http://localhost:5000/text';
      axios.get(path);
      this.text = '';
    },

    addText(info) {
      const path = 'http://localhost:5000/text';
      axios.post(path, info)

        .catch((error) => {
          // eslint-disable-nextline
          console.error(error);
        });
      this.initForm();
    },

    onSubmit(evt) {
      evt.preventDefault();
      const info = {
        text: this.form.text,
      };
      this.addText(info);
      this.initForm();
      // alert(JSON.stringify(this.form));
    },

    initForm() {
      this.form.text = 'Bla';
      this.show = true;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },

  created() {
    this.getText();
  },
};
</script>
