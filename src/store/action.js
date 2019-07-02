// import {
// 	getUser,
// 	getAddressList
// } from '../service/getData'
// import {
// 	GET_USERINFO,
// 	SAVE_ADDRESS
// } from './mutation-types.js'

export default {

	async getUserInfo({
		commit
	}) {
        debugger
		let res = await getUser();
		// commit(GET_USERINFO, res)
	}
}