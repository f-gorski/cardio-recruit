<template>
  <PageContainer>
    <PageTitle title="Signals" />
    <PageContent>
      <Table>
        <HeaderRow>
          <HeaderCell title="Name" />
          <HeaderCell title="Created On" />
          <HeaderCell title="Released On" />
          <HeaderCell title="Status" />
        </HeaderRow>

        <Row v-for="signal in signals" :key="signal.id">
          <NameCell :name="signal.name" :isNew="signal.new" />
          <DateCell :date="signal.created_at" />
          <DateCell :date="signal.released_at" />
          <StatusCell :status="signal.status" />
          <LinkCell :to="signal.id" />
        </Row>
      </Table>
      <Pagination
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

export default {
  components: {
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
  },
  data() {
    return {
      signals: [],
      pagination: {
        currentPage: 1,
        perPage: 1,
        totalPages: 10,
      },
    }
  },
  computed: {
    ...mapGetters(["token"]),
  },
  methods: {
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
      const { data, pagination } = await cardioAPI.get(url, params)

      this.signals = data
      this.pagination = pagination
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
