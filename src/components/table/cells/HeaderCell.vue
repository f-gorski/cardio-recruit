<template>
  <td @click="toggleSort" class="header-row__cell">
    {{ title }}
    <span>
      <span v-if="isSortingAscending">
        <ArrowUp class="header-row__arrow" />
      </span>
      <span v-if="isSortingDescending">
        <ArrowDown class="header-row__arrow" />
      </span>
    </span>
  </td>
</template>

<script>
import { ArrowUp, ArrowDown } from "../../icons"

const SORTING_ENUM = {
  descending: 1,
  ascending: 0,
}

export default {
  components: {
    ArrowUp,
    ArrowDown,
  },
  props: {
    title: { type: String },
    currentSorting: { required: false },
    sort: { required: true },
  },
  computed: {
    isSortingAscending() {
      return this.sort === SORTING_ENUM.ascending
    },
    isSortingDescending() {
      return this.sort === SORTING_ENUM.descending
    },
  },
  methods: {
    toggleSort() {
      let sortingOrder = undefined

      if (this.sort == null) sortingOrder = SORTING_ENUM.descending
      if (this.isSortingAscending) sortingOrder = SORTING_ENUM.descending
      if (this.isSortingDescending) sortingOrder = SORTING_ENUM.ascending

      this.$emit("input", sortingOrder)
    },
  },
}
</script>

<style>
.header-row__cell {
  padding: 0.5rem 30px;
  font-size: 1rem;
  color: rgb(222, 222, 222);
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
}
.header-row__cell:hover {
  background-color: #2e3846;
}
.header-row__arrow {
  width: 10px;
  height: 10px;
}
</style>
