<template>
  <PageContainer>
    <PageTitle title="Signals" />
    <PageContent>
      <ActionsBar />
      <LoadingSpinner v-if="isLoading" :active="true" />
      <Table v-else-if="!isEmpty">
        <HeaderRow>
          <HeaderCell
            :sort="sort.name"
            @input="handleNameSorting"
            title="Name"
          />
          <HeaderCell
            :sort="sort.created_at"
            @input="handleCreatedSorting"
            title="Created On"
          />
          <HeaderCell
            :sort="sort.released_at"
            @input="handleReleasedSorting"
            title="Released On"
          />
          <HeaderCell
            :sort="sort.status"
            @input="handleStatusSorting"
            title="Status"
          />
        </HeaderRow>

        <Row v-for="signal in signals" :key="signal.id">
          <NameCell :name="signal.name" :isNew="signal.new" />
          <DateCell :date="signal.created_at" />
          <DateCell :date="signal.released_at" />
          <StatusCell :status="signal.status" />
          <LinkCell :to="signal.id" />
        </Row>
      </Table>

      <SignalsEmpty v-else />

      <Pagination
        v-if="!isLoading && !isEmpty"
        :totalItems="pagination.totalItems"
        :totalPages="pagination.totalPages"
        :currentPage="pagination.currentPage"
        :perPage="pagination.perPage"
        @page-changed="handlePageChange"
        @per-page-changed="handlePerPageChange"
      />
    </PageContent>
  </PageContainer>
</template>

<script>
import cardioAPI from "../api/cardioAPI"
import { mapGetters } from "vuex"
import debounce from "lodash.debounce"

import ActionsBar from "./ActionsBar.vue"
import LoadingSpinner from "../components/loading/LoadingSpinner.vue"
import PageContainer from "../components/layout/PageContainer.vue"
import PageTitle from "../components/layout/PageTitle.vue"
import PageContent from "../components/layout/PageContent.vue"
import Table from "../components/table/Table.vue"
import HeaderRow from "../components/table/rows/HeaderRow.vue"
import Row from "../components/table/rows/Row.vue"

import HeaderCell from "../components/table/cells/HeaderCell.vue"
import DateCell from "../components/table/cells/DateCell.vue"
import LinkCell from "../components/table/cells/LinkCell.vue"
import StatusCell from "../components/table/cells/StatusCell.vue"
import TextCell from "../components/table/cells/TextCell.vue"
import NameCell from "../components/table/cells/NameCell.vue"
import Pagination from "../components/pagination/Pagination.vue"
import SignalsEmpty from "./SignalsEmpty.vue"

export default {
  components: {
    ActionsBar,
    LoadingSpinner,
    PageContainer,
    PageTitle,
    PageContent,
    Table,
    HeaderRow,
    Row,
    HeaderCell,
    DateCell,
    LinkCell,
    StatusCell,
    TextCell,
    NameCell,
    Pagination,
    SignalsEmpty,
  },
  data() {
    return {
      signals: [],
      pagination: {
        currentPage: 1,
        perPage: 3,
        totalPages: 10,
      },
      sort: {
        name: undefined,
        created_at: undefined,
        released_at: undefined,
        status: undefined,
      },
      isLoading: undefined,
    }
  },
  computed: {
    ...mapGetters(["token"]),
    isEmpty() {
      return this.signals.length === 0
    },
  },
  methods: {
    handleNameSorting(sortingOrder) {
      this.sortSignals("name", sortingOrder)
    },
    handleCreatedSorting(sortingOrder) {
      this.sortSignals("created_at", sortingOrder)
    },
    handleReleasedSorting(sortingOrder) {
      this.sortSignals("released_at", sortingOrder)
    },
    handleStatusSorting(sortingOrder) {
      this.sortSignals("status", sortingOrder)
    },
    sortSignals(sortFieldName, sortingOrder) {
      this.sort = { [sortFieldName]: sortingOrder }

      const sortParamValue = sortingOrder ? `-${sortFieldName}` : sortFieldName

      this.loadSignals("/signals", {
        ordering: sortParamValue,
        page: this.pagination.currentPage,
        per_page: this.pagination.perPage,
      })
    },

    handleFirstPage() {
      this.loadSignals(this.pagination.first)
    },
    handlePrevPage() {
      this.loadSignals(this.pagination.prev)
    },
    handleNextPage() {
      this.loadSignals(this.pagination.next)
    },
    handleLastPage() {
      this.loadSignals(this.pagination.last)
    },
    handlePageChange(page) {
      this.debouncedLoadSignals("/signals", {
        page,
        per_page: this.pagination.perPage,
      })
    },
    handlePerPageChange(perPage) {
      this.debouncedLoadSignals("/signals", {
        page: 1,
        per_page: perPage,
      })
    },

    async loadSignals(url = "/signals", params) {
      this.signals = []
      this.isLoading = true
      const { data, pagination } = await cardioAPI.get(url, params)

      this.signals = data
      this.pagination = pagination
      this.isLoading = false
    },
  },
  async mounted() {
    await this.loadSignals("/signals", {
      page: this.pagination.currentPage,
      per_page: this.pagination.perPage,
    })
  },
  created() {
    this.debouncedLoadSignals = debounce(this.loadSignals, 500)
  },
}
</script>

<style></style>
