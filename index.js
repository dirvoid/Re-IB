// ==UserScript==
// @name        Re: IB
// @namespace   https://github.com/dirvoid/Re-IB
// @match       *://m.imiaobige.com/novel/*
// @grant       none
// @version     1.0
// @author      Dirvoid 
// @description 03/09/2020 14:33:53
// ==/UserScript==

(function() {
  'use strict';

  const url = window.location.href;

  function mobileToPC() {
    return url.replace("m.", "")
  }
  let newurl = mobileToPC()
  setTimeout(() => {
    window.location.href = newurl
  }, 3000);
}())
