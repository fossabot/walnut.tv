const channels = [
  {
    title: 'general',
    subreddit: 'videos',
    minNumOfVotes: 100,
    // youtubeChannels: 'UCsvn_Po0SmunchJYOWpOxMg;UCzQUP1qoWDoEbmsQxvdjxgQ',
  },
   {
    title: 'hmmm',
    subreddit: 'mealtimevideos;watchandlearn;biology;psychology;lectures;space;philosophy;physics;math',
    minNumOfVotes: 3,
    youtubeChannels:
      'UCX6b17PVsYBQ0ip5gyeme-Q;UCmmPgObSUPw1HL2lq6H4ffA;UC7IcJI8PUf5Z3zKxnZvTBog;UCZYTClx2T1of7BRZ86-8fow;UC9uD-W5zQHQuAVT2GdcLCvg;UCsXVk37bltHxD1rDPwtNM8Q;UC6107grRI4m0o2-emgoDnAA;UCHnyfMqiRRG1u-2MsSQLbXA;UC6nSFpj9HTCZ5t-N3Rm3-HA;UC7DdEm33SyaTDtWYGO2CwdA;UC3KEoMzNz8eYnwBC34RaKCQ;UCt_t6FwNsqr3WWoL6dFqG9w;UClIZqOLqUCro7bKztUjYCNA;UCC552Sd-3nyi_tk2BudLUzA;UCYLrBefhyp8YyI9VGPbghvw;UCH4BNI0-FOK2dMXoFtViWHw;UCeiYXex_fwgYDonaTcSIk6w;UC7_gcs09iThXybpVgjHZ_7g;UCpJmBQ8iNHXeQ7jQWDyGe3A;UCfMJ2MchTSW2kWaT0kK94Yw;UCtHaxi4GTYDpJgMSGy7AeSw;UCHsRtomD4twRf5WVHHk-cMw;UCbwp5B-uDBy-fS4bDA0TEaw;UCj1VqrHhDte54oLgPG4xpuQ;UCIRiWCPZoUyZDbydIqitHtQ;UCY1kMZp36IQSyNx_9h4mpCg;UC9RM-iSvTu1uPJb8X5yp3EQ;UCEik-U3T6u6JA0XiHLbNbOw;UCYO_jab_esuFRV4b17AJtAw;UCR1IuLEqb6UEA_zQ81kwXfg;UCtxJFU9DgUhfr2J2bveCHkQ;UCEIwxahdLz7bap-VDs9h35A;UCBa659QWEk1AI4Tg--mrJ2A;UCP5tjEmvPItGyLhmjdwP7Ww;UCUHW94eEFW7hkUMVaZz4eDg;UCzWQYUVCpZqtN93H8RR44Qw',
  },
   {
    title: 'hustle',
    youtubeChannels:
      'UCyaN6mg5u8Cjy2ZI4ikWaug;UC9cn0TuPq4dnbTY-CBsm8XA;UCUyDOdBWhC1MCxEjC46d-zw;UCF2v8v8te3_u4xhIQ8tGy1g;UC1LAjODfg7dnSSrrPGGPPMw;UCMSYZVlQmyG8_2MkIKzg0kw;UCUvvj5lwue7PspotMDjk5UA;UCDwLb8FClxNiMa7w6dCO7PQ;UChObmEJP3bgGUXJGc2ePP3Q;UCPi6sb9M-Kj-j-PKptcUNJQ;UCK-zlnUfoDHzUwXcbddtnkg;UCfRtwc6K_VU9N4OjNnU2P7g;UC4bq21IPPbpu0Qrsl7LW0sw;UCcefcZRL2oaA_uBNeo5UOWg;UCGy7SkBjcIAgTiwkXEtPnYg;UCbsDR27rGCFdDKQVRl_tgEQ;UCO8SO6KTCosQOvdLj68yyQQ;UC36zt_eM_gZQXayw_pAdASg;UCESLZhusAkFfsNsApnjF_Cg;UCdZxojNw026cW3RuA-B1f7w;UCfVPKWScEOPeHx63ws-E9nw;UCRCCrE1uX5Y05cmkXFiviWw;UCoOjH8D2XAgjzQlneM2W0EQ;UCkkhmBWfS7pILYIk0izkc3A;UCidsrMKtX7u_QJDsjAw-vKA;UCbVefFvKHAKAvuCCN0gmssg;UC0rQo28wJ0WU30W5athbrOA;UCznv7Vf9nBdJYvBagFdAHWw;UCuoxrRDDgk3UUnxR4tlkJYQ;UCp8mr0kjVyVAmvexLDqB60A;UC6oh54zIYKyW6hgBiZzLLsA;UCwB3HiWejAkml1UZ0Qo2bFg;UCGwuxdEeCf0TIA2RbPOj-8g;UC94m18wtI9QAYrXKXqFPWDg;UCNFGSWVOdVWEe9XJNnfTdyQ;UCJLMboBYME_CLEfwsduI0wQ;UCctXZhXmG-kf3tlIXgVZUlw;UCSPYNpQ2fHv9HJ-q6MIMaPw;UCl-Zrl0QhF66lu1aGXaTbfw;UCouAGW_z-AYWY8cmaZs7IQA;UCLkq3HC2y2NPpyQzaeR9slA;UCKHiA-dJxESze4gFBxk3ygQ;UCCKpicnIwBP3VPxBAZWDeNA;UCkCGANrihzExmu9QiqZpPlQ;UCASM0cgfkJxQ1ICmRilfHLw;UCvSXMi2LebwJEM1s4bz5IBA;UCFCEuCsyWP0YkP3CZ3Mr01Q;UCWhJUz6BvjkhaW4AfSrBevw;UCoOae5nYA7VqaXzerajD0lg;UCAm8TlOEXTPq2B04yQ0lDuA;UCV6KDgJskWaEckne5aPA0aQ;UCdIM_XmhsVYbBhl3pgPq3dA;UCPa0bvFsR1mbBpk5mIPFGLA;UCUwkeSWSq3WFd6VSvBb4v7g;UCTQuKo8v0PaPCvk5aRxc_Yg;UCT3EznhW_CNFcfOlyDNTLLw;UC4IeUR6mgNzxsfid_nKoe-w;UC9vUu4vlIlMC0dHQCTvQPbg;UC9C17-OMxa-7oRSaCtztObw;UCL8w_A8p8P1HWI3k6PR5Z6w;UCnkmQCJ4f6rRl1PXCblppvA',
  },
  {

   title: 'crypto',
   youtubeChannels: 'UCKQvGU-qtjEthINeViNbn6A;UCbLhGKVY-bJPcawebgtNfbw;UCqK_GSMbpiV8spgD3ZGloSw;UCL0J4MLEdLP0-UyLu0hCktg;UCRvqjQPSeaWn-uEx-w0XOIg;UCI7M65p3A-D3P4v5qW8POxQ;UCnhdZlwVd6ocXGhdSyV9Axg;UCu7Sre5A1NMV8J3s2FhluCw;UCofTOFX4QuhT8OY-3-fFRFw;UC188KLMYLLGqVJZdYq7mYFw;UC4xKdmAXFh4ACyhpiQ_3qBw;UCZ3fejCy_P5xhv9QF-V6-YA;UCbkjUYiPN8P48r0lurEBP8w;UCCatR7nWbYrkVXdxXb4cGXw;UCrYmtJBtLdtm2ov84ulV-yg;UCJWCJCWOxBYSi5DhCieLOLQ;UCRvqjQPSeaWn-uEx-w0XOIg;UCevXpeL8cNyAnww-NqJ4m2w;UCMtJYS0PrtiUwlk6zjGDEMA;UCxODjeUwZHk3p-7TU-IsDOA;UCGyqEtcGQQtXyUwvcy7Gmyg;UCJgHxpqfhWEEjYH9cLXqhIQ;UCl2oCaw8hdR_kbqyqd2klIA;UCiUnrCUGCJTCC7KjuW493Ww;UC-5HLi3buMzdxjdTdic3Aig;UCQNHKsYDGlWefzv9MAaOJGA;UCi7RBPfTtRkVchV6qO8PUzg;UCq41LOyktVBW_CaVi2WKKXw;UCvCp6vKY5jDr87htKH6hgDA;UClgJyzwGs-GyaNxUHcLZrkg;UC23Tb0Q1b0Vd3-m5As6N59Q;UCeBbEvlSOeJMwSVYOdXOvvw;UC_Jt1VYHZO4Kc4cJQP5utdw;UCeFTwAO3Y6cYLoLkDcqyHmg;UCPx92fC_fwQJyfKeBmKGdkA;UCqbNSUPGHvNOH8GsrQ_bkEQ;UCTjmbErMbPlSr6bbju-4Wdw;UC4sS8q8E5ayyghbhiPon4uw;UCHqubNRiGzQbmKAG9MEbCnw;UCnwxzpFzZNtLH8NgTeAROFA;UCeZ_fkLGty1SX1Dop-uCEEw;UC7Ur1JsjMcqikYg09dunhsQ;UCFQMnBA3CS502aghlcr0_aw;UCf9cq3uePT1qmE5RNxiCqLg;UC2cIhJprvC-X4kGxAkk0Tiw;UCPC2iE2Yuj20m5Dimn-vVBg;UChN8uPDPKIgFI1Xhjuxp6MA;UCmnDLtMVvb8XA2tY16tKewQ;UCMTMppmOoXmMw-hdbFIVHyA;UCL9429sySdNEaXbM3m6qMmw;UChyJuZbpuyuK1IegOYfGvmA;UCTyC4mw11lUEsHd7yWvBbjw;UCZ8yM-JKLVtH28Oay4p5KoA;UCEQy7-2gjMoeI9KY0HRmuPA;UCmCLIFPv-JjH35IUcW0nTgQ;UCG_sHFCCQFVkeEse1YGshHQ;UCIraLfgEfUNT_O8_OCTPbXg;UCAwmF5bjdwVjyp8oixtsngg;UCEjgpiDPhTErrJm6zeNeAAw;UCH_g3SlqHOwMoUELVgrBhcA;UCL4knTqpF5KTcJrAdethgNQ;UCc1eMsISTD_BYlC2KHZOcwQ;UCn_tz_81xsEIPjIXVzKahgQ;UCHTcPe-eXEfCUkHCYV4LGMg;UCIraLfgEfUNT_O8_OCTPbXg;UCK-JeoLIpIy_fhyxrlGHImg;UCiaG1Fz-rxjj5lYGQet7Kfw;UClzzOYzkXuXo2oo1XtsC1JA;UCMTMppmOoXmMw-hdbFIVHyA;UCn2RJFAA1ndipnVJsYAwWOw;UCe4cw9KMuKZvy5vy3YUh5mg;UCkfh_ywxbIUuT-DTFyZJE2w;UCEFnH0KShNRHb-NMeurBxQQ;UC5syE_JaQmrChzJ66CzwYKw;UC3sanPSpakTDAJXxGbmdbPw;UCphV9xj813mt8FXOsouripg;UCwm4Ad5TKuGhRt7sKlY-8Cg;UCfD38l0RPlJxFhAN415fSyQ;UCdwDbxL7N7mc5HW1Q-f0f3w;UCVw7v1eLGwvk4gkTFzSwzYQ;UCtR9Gt1dIQFbNKoipWBQghg;UCZHEyqUX3XP38qB9PWiQjOw;UCN45ZeLq9Btw0X0WOamWtcA;UCJNWxwduvdv4gLPI0ipTejA;UC9ERu13KNn4RuhBbxn3RW1w;UCbsbKnLqc1CoaX1qCyol2Jg;UCjphJum4tlhWEsyOU_S3bzQ;UClEucRC7yVGWhq_nv43yDLg;UClzioU4fi0T1XnJ8BN-KbZA;UCNm4vMgFnopOzvmxPKEtGSQ',

 },
   {
   title: 'chill',
    youtubeChannels:
      'UCbpMy0Fg74eXXkvxJrtEn3w;UCJFp8uSYCjXOMnkUyb3CQ3Q;UCUnFheTbVpASikm0YPb8pSw;UCHmdRuKUSB7xrbv8uC0TKxg;UCNbngWUqL2eqRw12yAwcICg;UC8gFadPgK2r1ndqLI04Xvvw;UCxr2d4As312LulcajAkKJYw;UCRxAgfYexGLlu1WHGIMUDqw;UC1GO0P2HsI0XLiMalC5_wQw;UCQBG3PzyQKY8ieMG2gDAyOQ;UChBSJmgtiMGG1IUUuzj9Acw;UCARXOI1UlItgIevoI5jZViQ;UCVGVbOl6F5rGF4wSYS6Y5yQ;UCcjhYlL1WRBjKaJsMH_h7Lg;UCJHA_jMfCvEnv-3kRjTCQXw;UCPzFLpOblZEaIx2lpym1l1A;UCfyehHM_eo4g5JUyWmms2LA;UCuL-5ytBmu6KG0BwjSFaD0g;UC_oqZXtcxfJTaw1j2M1H1XQ;UCDq5v10l4wkV5-ZBIJJFbzQ;UCzH5n3Ih5kgQoiDAQt2FwLw;UCsdD3quGf01RWABJt8wLe9g;UChBEbMKI1eCcejTtmI32UEw;UCwZcpfUOuLH9UEXvFPHIAWQ;UCRzPUBhXUZHclB7B5bURFXw;UCoMum0pwewO8_WtTlUQxGHw;UCekQr9znsk2vWxBo3YiLq2w;UCIEv3lZ_tNXHzL3ox-_uUGQ;UCpSgg_ECBj25s9moCDfSTsA;UCffs63OaN2nh-6StR6hzfiQ;UCj0V0aG4LcdHmdPJ7aTtSCQ;UCGs1JjiRBEKMlVD4eUxJ2ww;UCj7YznKvjMpXAXuzs9wWvtg;UC2N2HqEyaVE5Tt1rFqe3_Og;UCpnuadQ_w3r6f4Q_NRlqd-w;UC6am0tFqAQVqYwF2YV31zZQ;UC_uIW_MvxONcZsAkaMq1ujA;UCa1WbVCkTqd5ecG6G2adIow;UCpbClyFMuJQJJH7skfiVeQg;UCH81s83yNAl2YiH48DjxJpg;UC54bvNhGfYlw38iW5KCjJAA;UCDRqoPBHJ7oFcxqvyPBAg6A;UCBVEq4QRqxb6yPO5OpJJ1XQ;UCyEd6QBSgat5kkC6svyjudA;UCp2dhjQXkhY1O40lj15JQzw;UCDTINI9skkeZNY2ZXnBqIkQ;UC4ijq8Cg-8zQKx8OH12dUSw;UC0Ize0RLIbGdH5x4wI45G-A;UCwO9naEwEdTuT9Q5Vze6XCA;UCey7V2zwnjaxPKhfJ0sYE4g;UC_tXKhJlqZrgr_qdhEKmrDQ;UClnm4LP43k7AkjhdwKrOONA;UCUmVotIMVDOHNetxVKxs2Tg;UCxDZs_ltFFvn0FDHT6kmoXA;UCXulruMI7BHj3kGyosNa0jA;UCgZM50Ig7STDS0l6f_QnrXw;UCDsElQQt_gCZ9LgnW-7v-cQ;UCw3LUhWr0j-z2rpqGfQK8Tg;UC8EQAfueDGNeqb1ALm0LjHA;UCXvzpK4eKUJysEZ42zjTUdw;UCdMHDOiMLVGlntDX-4I_-rg;UC0k238zFx-Z8xFH0sxCrPJg;UCq6H4g9eVY9WxoboCFd0iRA;UC6-X3epFE06GDWRHLQG_YMA;UCY04Nk2nZkUkT4hqf_7suZA;UCHNK-JM63_vb2CJc1wC4p8g;UC6kpDTAXXNV5SEP5g1HoPTA;UCulFhrW_YCwkq_BP16C82mA;UC_zQ777U6YTyatP3P1wi3xw;UCNZ3t1dMKJGl6-kV9BD5Lqg;UCdvcXJuHTUkJ_uvu8Qw7U2A;UCFuyCsMOEkJ27lHZ-AT9TmA;UCIxAaCJ84uefATKmazDyIjw;UCCkFJmUgzrZdkeHl_qPItsA;UC39z4_U8Kls0llAij3RRZAQ;UCHYSw4XKO_q1GaChw5pxa-w',
 },
  {
    title: 'docus',
    subreddit: 'documentaries',
    minNumOfVotes: 10,
  },

];

if (typeof document === 'undefined') {
  module.exports = {
    channels,
  };
}
