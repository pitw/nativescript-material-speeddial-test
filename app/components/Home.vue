<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Home" colSpan="2" />
      </GridLayout>
    </ActionBar>

    <GridLayout class="page__content"> </GridLayout>
    <MDSpeedDial
      text.decode="&#xe904;"
      buttonClass="mdi"
      color="#f15a29"
      @tap="onTap"
              label="unicode"
    >
      <MDSpeedDialItem
        backgroundColor="white"
        buttonClass="mdi"
        label="unicode"
        color="#f15a29"
        text.decode="&#xe0bf;"
        @tap="onTap"
      />
      <MDSpeedDialItem
        backgroundColor="white"
        buttonClass="mdi"
        label="unicode"
        color="#f15a29"
        text.decode="&#xe2c7;"
        @tap="onTap"
      />
    </MDSpeedDial>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
  },
  computed: {
    message() {
      return "<!-- Page content goes here -->";
    },
  },
  methods: {
    onTap() {
      console.log("test");
    },
    onDrawerButtonTap() {
      utils.showDrawer();
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
