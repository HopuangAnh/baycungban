import { bgClose } from "./modules/bgClose.js";
import { btnActive } from "./modules/btnActive.js";
import { changeSelect } from "./modules/changeCity.js";
import { changeNum } from "./modules/changeNumber.js";
import { changeSelect2 } from "./modules/changeSlect2.js";
import { closeOut } from "./modules/closeOutside.js";
import { dataPkr } from "./modules/datePicker.js";
import { increaseInput } from "./modules/increaseInput.js";
import { listActive } from "./modules/listActive.js";
import { notClose } from "./modules/notClose.js";
import { selectActive } from "./modules/selectActive.js";
import { showList } from "./modules/showList.js";
import { showMenuprd } from "./modules/showMenu.js";
import { tabPanel } from "./modules/tabPanel.js";
import { testChange } from "./modules/testChange.js";

$(document).ready(function () {
  bgClose();
  changeNum();
  changeSelect();
  changeSelect2();
  increaseInput('.item-select-change .minus', '.item-select-change .plus', '.item-select-change .input','.header-bottom .service .service-select .item-title .number');
  increaseInput('.item-select-change .minus-2', '.item-select-change .plus-2', '.item-select-change .input-2', '.header-bottom .service .service-select .item-title .number-2');
  listActive('.header-bottom .coupon .route-left .content-box', '.header-bottom .coupon .route-left');
  listActive('.header-bottom .coupon .content-box-2', '.header-bottom .coupon .route-right');
  listActive('.flight-mid-right .ticket-title', '.flight-mid-right .ticket')
  showMenuprd('.header-main-top .header-menu-showbtn', '.header-main-top .header-menu');
  // $('.header-bottom .coupon .select-city-form').select2();
  showList('.flight-mid-left .filter-list .item');
  tabPanel('.flight-mid-left .flight-tickets .flight-list .item-tab-panel .box', '.flight-mid-left .flight-tickets .flight-list .item-list-tab .panel');
  closeOut('.flight-mid-left .flight-tickets .flight-list .item-tab-panel .box')
  closeOut('.flight-mid-left .flight-tickets .flight-list .item-list-tab .panel')
  btnActive('.flight-mid-left .filter');
  notClose('.flight-mid-left .filter .filter-list');
  selectActive('.header-bottom .service-list .item');
  testChange();
  changeNum();
  dataPkr('.header-bottom .coupon .duration-left .date-input-2')
  dataPkr('.header-bottom .coupon .duration-left .date-input')
  // flatpickr();
});