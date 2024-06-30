import { defineStore } from 'pinia'
import { apiGetUsers } from '@/api/users'
import { UserModelLinks, UserModelList } from '@/api/users/models'
import { USER_COUNT_PER_PAGE } from '@/enums/appEnum'
import { UsersPageLinks } from './models'
export interface UsersStoreModel {
  pageLinks: UsersPageLinks
  totalPages: number
  totalUsers: number
  currentPage: number
  usersList: UserModelList[]
}
export const useUsersStore = defineStore('users', {
  state: (): UsersStoreModel => ({
    pageLinks: {
      nextUrl: '',
      prevUrl: '',
    },
    totalPages: 0,
    totalUsers: 0,
    currentPage: 0,
    usersList: [],
  }),
  getters: {},
  actions: {
    setPageLinks(links: UserModelLinks) {
      this.pageLinks.nextUrl = links.next_url
      this.pageLinks.prevUrl = links.prev_url
    },
    setTotalPages(pages: number) {
      this.totalPages = pages
    },
    setTotallUsers(users: number) {
      this.totalUsers = users
    },
    setCurrentPage(page: number) {
      this.currentPage = page
    },
    setUsers(users: UserModelList[]) {
      this.usersList.push(...users)
      this.usersList.sort((a, b) => b.registration_timestamp - a.registration_timestamp);
    },
    async loadUsersList() {
      this.currentPage++
      const response = await apiGetUsers(this.currentPage, USER_COUNT_PER_PAGE)
      this.setPageLinks(response.data.links)
      this.setTotalPages(response.data.total_pages)
      this.setTotallUsers(response.data.total_users)
      this.setCurrentPage(response.data.page)
      this.setUsers(response.data.users)
      console.log(response.data)
    },
  },
})
