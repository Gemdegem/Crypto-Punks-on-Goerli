(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    75557: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(22938);
        },
      ]);
    },
    22938: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return X;
          },
        });
      var i = n(85893),
        r = n(9008),
        s = n.n(r),
        l = n(67294),
        o = n(58244),
        c = n(23100),
        a = n(204),
        h = n(25559),
        d = n(68055),
        u = n(66946),
        x = n(83133),
        j = n(12498),
        m = n(89154),
        f = n(7754),
        g = n(88911),
        w = n(36864),
        b = n(34231),
        p = n(28728),
        C = n(96279);
      let k = (e) => {
          let { showSidebarButton: t = !0, onShowSidebar: n } = e,
            { colorMode: r, toggleColorMode: s } = (0, j.If)();
          return (0, i.jsxs)(a.k, {
            direction: "row",
            minH: "10vh",
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: "1px",
            borderBottomColor: "gray.700",
            children: [
              (0, i.jsx)(c.xu, {
                flex: "1",
                children:
                  t &&
                  (0, i.jsx)(m.h, {
                    icon: (0, i.jsx)(w.X, { w: 8, h: 8 }),
                    variant: "outline",
                    onClick: n,
                  }),
              }),
              (0, i.jsx)(f.M, {
                flex: "2",
                children: (0, i.jsx)(g.x, {
                  fontSize: "xl",
                  children:
                    "Free mint of Crypto Punks on testnet Goerli for FUN!",
                }),
              }),
              (0, i.jsxs)(a.k, {
                flex: "1",
                children: [
                  (0, i.jsx)(m.h, {
                    "aria-label": "Toggle Mode",
                    onClick: s,
                    mr: "2rem",
                    children:
                      "light" === r ? (0, i.jsx)(b.k, {}) : (0, i.jsx)(p.N, {}),
                  }),
                  (0, i.jsx)(C.NL, {}),
                ],
              }),
            ],
          });
        },
        _ = () =>
          (0, i.jsx)(a.k, {
            minH: "10vh",
            p: "2rem",
            justifyContent: "center",
            alignItems: "center",
            children: (0, i.jsxs)(g.x, {
              children: [
                "\xa9 Free mint on testnet @ ",
                new Date().getFullYear(),
              ],
            }),
          });
      var v = n(29646),
        S = n(41664),
        y = n.n(S),
        M = n(57350),
        F = n(29379),
        N = n(44857),
        H = n(14418),
        Y = n(5902),
        B = n(78810),
        z = n(29222),
        A = n(50131),
        E = n(25675),
        G = n.n(E);
      let O = () => {
          let e = (0, M.p)(),
            t = (0, l.useRef)(null),
            [n, r] = (0, l.useState)(!1),
            { minted: s, totalSupply: o, updateData: c, mint: a } = (0, v.Cd)(),
            h = async () => {
              let n = t.current.value;
              r(!0);
              try {
                await a(n),
                  e({
                    description: "Minted with success.",
                    status: "success",
                    isClosable: !0,
                  });
              } catch (t) {
                var i;
                e({
                  description:
                    null !== (i = t.reason) && void 0 !== i
                      ? i
                      : "Unknown error occured!",
                  status: "error",
                  isClosable: !0,
                });
              }
              r(!1), c();
            };
          return (0, i.jsxs)(F.Z, {
            mt: "1rem",
            align: "center",
            children: [
              (0, i.jsx)(N.O, {
                children: (0, i.jsx)(H.X, {
                  size: "md",
                  children: "Crypto Punks",
                }),
              }),
              (0, i.jsxs)(Y.e, {
                align: "center",
                children: [
                  (0, i.jsx)(G(), {
                    src: "https://cryptopunks.app/public/images/cryptopunks/punk5577.png",
                    width: "300",
                    height: "200",
                    alt: "Crypto Punk",
                  }),
                  (0, i.jsxs)(g.x, {
                    mt: "1rem",
                    children: ["Total Minted ", o.toString(), " / 10000"],
                  }),
                  (0, i.jsxs)(g.x, {
                    children: ["You minted ", s.toString(), " / 10"],
                  }),
                  (0, i.jsxs)(B.Y2, {
                    defaultValue: 10,
                    min: 1,
                    max: 10,
                    mt: "1rem",
                    mb: "1rem",
                    children: [
                      (0, i.jsx)(B.zu, { ref: t }),
                      (0, i.jsxs)(B.Fi, {
                        children: [(0, i.jsx)(B.WQ, {}), (0, i.jsx)(B.Y_, {})],
                      }),
                    ],
                  }),
                  (0, i.jsx)(z.z, {
                    colorScheme: "blue",
                    onClick: h,
                    isLoading: n,
                    children: "Mint",
                  }),
                ],
              }),
              (0, i.jsx)(A.e, {
                children: (0, i.jsx)(y(), {
                  href: "https://testnets.opensea.io/collection/CryptoPunks",
                  target: "_blank",
                  children: "View on OpenSea",
                }),
              }),
            ],
          });
        },
        T = { navigation: "drawer", showSidebarButton: !0 },
        U = { navigation: "sidebar", showSidebarButton: !1 };
      function X() {
        let [e, t] = (0, l.useState)(!1),
          n = (0, o.S)({ base: T, md: U }),
          r = () => t(!e),
          { isConnected: j } = (0, v.Cd)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s(), {
              children: [
                (0, i.jsx)("title", {
                  children:
                    "Free mint of Crypto Punks on testnet Goerli for FUN!",
                }),
                (0, i.jsx)("meta", {
                  name: "description",
                  content:
                    "Free mint of Crypto Punks on testnet Goerli for FUN!",
                }),
                (0, i.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, i.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, i.jsxs)(c.xu, {
              children: [
                (0, i.jsx)(k, {
                  showSidebarButton: null == n ? void 0 : n.showSidebarButton,
                  onShowSidebar: r,
                }),
                (0, i.jsx)(a.k, {
                  justifyContent: "center",
                  minH: "80vh",
                  children: (0, i.jsxs)(a.k, {
                    direction: "column",
                    align: "center",
                    children: [
                      (0, i.jsxs)(h.b, {
                        status: "info",
                        mt: "1rem",
                        children: [
                          (0, i.jsx)(d.z, {}),
                          (0, i.jsx)(u.C, {
                            children: "How to free mint on goerli:",
                          }),
                        ],
                      }),
                      (0, i.jsxs)(x.GS, {
                        mt: "1rem",
                        children: [
                          (0, i.jsxs)(x.HC, {
                            children: [
                              "Add goerli test network: ",
                              (0, i.jsx)(y(), {
                                href: "https://chainlist.org/chain/5",
                                target: "_blank",
                                children: "https://chainlist.org/chain/5",
                              }),
                            ],
                          }),
                          (0, i.jsxs)(x.HC, {
                            children: [
                              "Get some eth faucet here: ",
                              (0, i.jsx)(y(), {
                                href: "https://goerlifaucet.com/",
                                target: "_blank",
                                children: "https://goerlifaucet.com/",
                              }),
                            ],
                          }),
                          (0, i.jsx)(x.HC, {
                            children: "Connect your Metamask.",
                          }),
                          (0, i.jsx)(x.HC, {
                            children:
                              "Mint with your burner wallet and pay gas fee only.",
                          }),
                        ],
                      }),
                      j &&
                        (0, i.jsx)(a.k, {
                          direction: "column",
                          align: "center",
                          children: (0, i.jsx)(O, {}),
                        }),
                    ],
                  }),
                }),
                (0, i.jsx)(_, {}),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [490, 774, 888, 179], function () {
      return e((e.s = 75557));
    }),
      (_N_E = e.O());
  },
]);
