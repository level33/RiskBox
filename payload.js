POST localhost:8080/input

{
  "account_name": "fed",
  "payload": {
    "bpc": {
      "Generic": {
        "General": [
          "CONTRL",
          "PEOPLE",
          "EXECTN",
          "BUSCON",
          "RSKCTL",
          "INTLAM",
          "PHSACC",
          "POLPRO"
        ],
        "layout": [ "General" ]
      },
      "Technical": {
        "Core Systems Management": [ "CORSYS", "EXTLAM", "VENDOR" ],
        "Credit Management": [ "CCRASS", "MODMGT", "CCRADM" ],
        "Interest Rate Management": [ "INTRAT", "MODMGT", "TRDEAL" ],
        "Liquidity Management": [ "LIQDTY", "MODMGT", "TRDEAL" ],
        "Reference Data Management": [ "DATQTY", "VENDOR" ],
        "Sales Management (Product)": [ "PRDAPP" ],
        "Trading Management": [ "TRDING", "MODMGT" ],
        "layout": [
          "Reference Data Management",
          "Core Systems Management",
          "Trading Management",
          "Credit Management",
          "Liquidity Management",
          "Sales Management (Product)",
          "Interest Rate Management"
        ]
      },
      "layout": [ "Generic", "Technical" ]
    },
    "coresystemsmanagement": {
      "Collateralised Debt Obligations (CDOs)": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 20, 80, 75, 80, 100, 30, 0, 20, 100, 100, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 60, 40, 50, 80, 75, 10, 100, 100, 100, 95, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Commercial Loans (Secured)": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 50, 80, 100, 5, 100, 30, 100, 100, 90 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Cross Currency Swaps": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Equities": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 20, 80, 75, 80, 100, 30, 0, 20, 100, 100, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 60, 40, 50, 80, 75, 10, 100, 100, 100, 95, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "FX Forwards": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 20, 80, 75, 80, 100, 30, 0, 20, 100, 100, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 60, 40, 50, 80, 75, 10, 100, 100, 100, 95, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Fixed Income": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 20, 80, 75, 80, 100, 30, 0, 20, 100, 100, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 60, 40, 50, 80, 75, 10, 100, 100, 100, 95, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Fixed Term Deposits": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Futures": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 20, 80, 75, 80, 100, 30, 0, 20, 100, 100, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 60, 40, 50, 80, 75, 10, 100, 100, 100, 95, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Payment Orders": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "Repos": {
        "bc_values": [
          [ 40, 100, 100, 75, 100, 0, 15, 70, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 100, 80, 100, 60, 100, 100, 10, 70, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 80, 50, 50, 100, 100, 80, 0, 20, 100, 70 ],
          [ 20, 100, 100, 80, 100, 85, 15, 100, 100, 25, 75 ],
          [ 20, 100, 50, 50, 100, 0, 100, 80, 100, 70, 100 ],
          [ 100, 100, 100, 75, 20, 20, 15, 100, 100, 25, 100 ]
        ]
      },
      "bc": [
        "Client & Counterparty Data",
        "Market Data",
        "Products & Instruments Data",
        "Trading System",
        "Global Loan System",
        "Funds Transfer System",
        "Global Nostros System",
        "Global Ledger System",
        "Funding & Liquidity System"
      ],
      "bpc": [
        "CORSYS",
        "EXTLAM",
        "PEOPLE",
        "EXECTN",
        "VENDOR",
        "RSKCTL",
        "INTLAM",
        "PHSACC",
        "CONTRL",
        "BUSCON",
        "POLPRO"
      ],
      "layout": [
        "FX Forwards",
        "Commercial Loans (Secured)",
        "Fixed Term Deposits",
        "Repos",
        "Cross Currency Swaps",
        "Futures",
        "Collateralised Debt Obligations (CDOs)",
        "Equities",
        "Fixed Income",
        "Payment Orders"
      ],
      "values": [ 10, 10, 10, 6, 6, 4, 4, 4, 2, 2, 2 ]
    },
    "creditmanagement": {
      "bpc": [
        "CONTRL",
        "PEOPLE",
        "EXECTN",
        "CCRASS",
        "MODMGT",
        "RSKCTL",
        "INTLAM",
        "BUSCON",
        "CCRADM",
        "PHSACC",
        "POLPRO"
      ],
      "layout": [
        "FX Forwards",
        "Commercial Loans (Secured)",
        "Repos",
        "Cross Currency Swaps",
        "Collateralised Debt Obligations (CDOs)",
        "Fixed Income"
      ],
      "prod_values": [
        [ 100, 75, 50, 40, 90, 100, 15, 85, 70, 100, 100 ],
        [ 100, 75, 50, 40, 90, 100, 15, 85, 70, 100, 100 ],
        [ 100, 75, 50, 40, 90, 100, 15, 85, 70, 100, 100 ],
        [ 100, 75, 50, 40, 90, 100, 15, 85, 70, 100, 100 ],
        [ 100, 75, 50, 40, 90, 100, 15, 85, 70, 100, 100 ],
        [ 100, 75, 50, 40, 90, 100, 15, 85, 70, 100, 100 ]
      ],
      "values": [ 10, 10, 10, 10, 10, 6, 6, 4, 4, 4, 2 ]
    },
    "euf": [
      {
        "product": "FX Forwards",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 12, 4, 4, 11, 0, 0 ]
        },
        "vbw": 33.1
      },
      {
        "product": "Commercial Loans (Secured)",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 10, 0, 8, 3, 17, 20 ]
        },
        "vbw": 33.1
      },
      {
        "product": "Fixed Term Deposits",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 6, 0, 0, 3, 0, 6 ]
        },
        "vbw": 27
      },
      {
        "product": "Repos",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 12, 0, 5, 3, 0, 6 ]
        },
        "vbw": 27
      },
      {
        "product": "Cross Currency Swaps",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 11, 0, 8, 3, 0, 11 ]
        },
        "vbw": 40.4
      },
      {
        "product": "Futures",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 11, 4, 0, 11, 0, 0 ]
        },
        "vbw": 49.1
      },
      {
        "product": "Collateralised Debt Obligations (CDOs)",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 16, 18, 18, 16, 17, 0 ]
        },
        "vbw": 59.3
      },
      {
        "product": "Equities",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 13, 4, 0, 11, 10, 0 ]
        },
        "vbw": 33.1
      },
      {
        "product": "Fixed Income",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 12, 4, 8, 11, 3, 0 ]
        },
        "vbw": 59.3
      },
      {
        "product": "Payment Orders",
        "riskmatrix": {
          "risk": [
            "Processing",
            "Trading",
            "Lending",
            "Selling",
            "Funding",
            "Interest"
          ],
          "values": [ 5, 0, 0, 3, 0, 0 ]
        },
        "vbw": 27
      }
    ],
    "interestratemanagement": {
      "bpc": [
        "CONTRL",
        "PEOPLE",
        "EXECTN",
        "INTRAT",
        "MODMGT",
        "TRDEAL",
        "RSKCTL",
        "INTLAM",
        "BUSCON",
        "PHSACC",
        "POLPRO"
      ],
      "layout": [
        "Commercial Loans (Secured)",
        "Fixed Term Deposits",
        "Repos",
        "Cross Currency Swaps"
      ],
      "prod_values": [
        [ 100, 75, 50, 50, 0, 100, 100, 80, 90, 100, 45 ],
        [ 100, 75, 50, 50, 0, 100, 100, 80, 90, 100, 45 ],
        [ 100, 75, 50, 50, 0, 100, 100, 80, 90, 100, 45 ],
        [ 100, 75, 50, 50, 0, 100, 100, 80, 90, 100, 45 ]
      ],
      "values": [ 10, 10, 10, 10, 10, 6, 6, 6, 4, 4, 2 ]
    },
    "liquiditymanagement": {
      "bpc": [
        "CONTRL",
        "PEOPLE",
        "EXECTN",
        "LIQDTY",
        "MODMGT",
        "TRDEAL",
        "RSKCTL",
        "INTLAM",
        "BUSCON",
        "PHSACC",
        "POLPRO"
      ],
      "layout": [
        "Commercial Loans (Secured)",
        "Collateralised Debt Obligations (CDOs)",
        "Equities",
        "Fixed Income"
      ],
      "prod_values": [
        [ 100, 100, 80, 0, 100, 100, 0, 20, 100, 100, 75 ],
        [ 100, 100, 80, 0, 100, 100, 0, 20, 100, 100, 75 ],
        [ 100, 100, 80, 0, 100, 100, 0, 20, 100, 100, 75 ],
        [ 100, 100, 80, 0, 100, 100, 0, 20, 100, 100, 75 ]
      ],
      "values": [ 10, 10, 10, 10, 10, 6, 6, 6, 4, 4, 2 ]
    },
    "products": [
      "FX Forwards",
      "Commercial Loans (Secured)",
      "Fixed Term Deposits",
      "Repos",
      "Cross Currency Swaps",
      "Futures",
      "Collateralised Debt Obligations (CDOs)",
      "Equities",
      "Fixed Income",
      "Payment Orders"
    ],
    "referencedatamanagement": {
      "Collateralised Debt Obligations (CDOs)": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 100, 75, 75, 50, 90, 60, 60, 20, 100, 100 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Commercial Loans (Secured)": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Cross Currency Swaps": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Equities": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 100, 75, 75, 50, 90, 60, 60, 20, 100, 100 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "FX Forwards": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 100, 75, 75, 50, 90, 60, 60, 20, 100, 100 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Fixed Income": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 100, 75, 75, 50, 90, 60, 60, 20, 100, 100 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Fixed Term Deposits": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Futures": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 100, 75, 75, 50, 90, 60, 60, 20, 100, 100 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Payment Orders": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "Repos": {
        "bc_values": [
          [ 100, 100, 75, 20, 85, 60, 40, 100, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 80, 10, 20, 100, 100, 100, 100, 100 ]
        ]
      },
      "bc": [
        "Client & Counterparty Data",
        "Market Data",
        "Products & Instruments Data"
      ],
      "bpc": [
        "CONTRL",
        "PEOPLE",
        "EXECTN",
        "DATQTY",
        "BUSCON",
        "RSKCTL",
        "INTLAM",
        "VENDOR",
        "PHSACC",
        "POLPRO"
      ],
      "layout": [
        "FX Forwards",
        "Commercial Loans (Secured)",
        "Fixed Term Deposits",
        "Repos",
        "Cross Currency Swaps",
        "Futures",
        "Collateralised Debt Obligations (CDOs)",
        "Equities",
        "Fixed Income",
        "Payment Orders"
      ],
      "values": [ 10, 10, 10, 10, 8, 6, 6, 4, 4, 2 ]
    },
    "riskcomponents": {
      "Financial Risks": [
        "Trading Management",
        "Credit Management",
        "Liquidity Management",
        "Interest Rate Management"
      ],
      "Processing Risk": [
        "Transaction Processing",
        "Reference Data Management",
        "Core Systems Management"
      ],
      "Selling Risk": [ "Sales Management" ],
      "layout": [ "Processing Risk", "Financial Risks", "Selling Risk" ]
    },
    "risktypes": [
      "Processing",
      "Trading",
      "Lending",
      "Selling",
      "Funding",
      "Interest"
    ],
    "salesmanagement": {
      "bpc": [
        "CONTRL",
        "PEOPLE",
        "EXECTN",
        "PRDAPP",
        "RSKCTL",
        "INTLAM",
        "BUSCON",
        "PHSACC",
        "POLPRO"
      ],
      "layout": [
        "FX Forwards",
        "Commercial Loans (Secured)",
        "Fixed Term Deposits",
        "Repos",
        "Cross Currency Swaps",
        "Futures",
        "Collateralised Debt Obligations (CDOs)",
        "Equities",
        "Fixed Income",
        "Payment Orders"
      ],
      "prod_values": [
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ],
        [ 100, 75, 50, 20, 20, 15, 15, 100, 75 ]
      ],
      "values": [ 10, 10, 10, 10, 6, 6, 4, 4, 2 ]
    },
    "tradingmanagement": {
      "bpc": [
        "CONTRL",
        "PEOPLE",
        "EXECTN",
        "TRDING",
        "MODMGT",
        "BUSCON",
        "RSKCTL",
        "INTLAM",
        "PHSACC",
        "POLPRO"
      ],
      "layout": [
        "FX Forwards",
        "Futures",
        "Collateralised Debt Obligations (CDOs)",
        "Equities",
        "Fixed Income"
      ],
      "prod_values": [
        [ 10, 75, 75, 50, 20, 100, 0, 15, 100, 100 ],
        [ 100, 100, 100, 100, 0, 100, 20, 20, 100, 70 ],
        [ 100, 100, 50, 60, 100, 20, 60, 100, 100, 0 ],
        [ 100, 75, 100, 100, 60, 100, 75, 100, 100, 100 ],
        [ 20, 25, 50, 0, 0, 0, 0, 0, 0, 0 ]
      ],
      "values": [ 10, 10, 10, 10, 10, 8, 6, 6, 4, 2 ]
    },
    "transactionprocessing": {
      "Collateralised Debt Obligations (CDOs)": {
        "bc_values": [
          [ 20, 100, 0, 65, 15, 20, 40, 60 ],
          [ 10, 75, 50, 25, 0, 15, 70, 70 ],
          [ 100, 50, 0, 95, 0, 50, 70, 0 ],
          [ 100, 100, 0, 25, 35, 50, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 100, 100, 80, 90, 60, 0, 80, 90 ],
          [ 100, 100, 0, 90, 100, 0, 70, 75 ],
          [ 10, 100, 50, 80, 60, 40, 80, 60 ],
          [ 100, 100, 50, 100, 0, 15, 90, 70 ],
          [ 100, 75, 50, 100, 30, 100, 90, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 50, 25, 70, 0, 15, 80, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 75, 25, 100, 100, 15, 100, 70 ],
          [ 100, 75, 75, 95, 75, 100, 100, 100 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 100, 100, 50, 100, 0, 100, 80, 90 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Commercial Loans (Secured)": {
        "bc_values": [
          [ 20, 100, 0, 65, 15, 20, 40, 60 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 25, 95, 60, 80, 40, 100 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 10, 100, 50, 80, 60, 40, 80, 60 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 75, 75, 100, 75, 100, 100, 75 ],
          [ 20, 50, 25, 70, 0, 15, 80, 0 ],
          [ 100, 100, 50, 80, 0, 0, 0, 100 ],
          [ 81.2, 74.3, 37.4, 87.8, 29.7, 58.1, 79.9, 80.3 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Cross Currency Swaps": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 0, 95, 0, 50, 70, 0 ],
          [ 100, 100, 0, 25, 35, 50, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 100, 100, 80, 90, 60, 0, 80, 90 ],
          [ 100, 100, 0, 90, 100, 0, 70, 75 ],
          [ 10, 100, 50, 80, 60, 40, 80, 60 ],
          [ 100, 100, 50, 100, 0, 15, 90, 70 ],
          [ 100, 75, 50, 100, 30, 100, 90, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 75, 50, 100, 60, 80, 70, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Equities": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 0, 95, 0, 50, 70, 0 ],
          [ 100, 100, 0, 25, 35, 50, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 100, 100, 80, 90, 60, 0, 80, 90 ],
          [ 100, 100, 0, 90, 100, 0, 70, 75 ],
          [ 10, 100, 50, 80, 60, 40, 80, 60 ],
          [ 100, 100, 50, 100, 0, 15, 90, 70 ],
          [ 100, 75, 50, 100, 30, 100, 90, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 50, 25, 70, 0, 15, 80, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 75, 25, 100, 100, 15, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 100, 100, 50, 100, 0, 100, 80, 90 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "FX Forwards": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 0, 95, 0, 50, 70, 0 ],
          [ 100, 100, 0, 25, 35, 50, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 100, 100, 80, 90, 60, 0, 80, 90 ],
          [ 100, 100, 0, 90, 100, 0, 70, 75 ],
          [ 10, 100, 50, 80, 60, 40, 80, 60 ],
          [ 100, 100, 50, 100, 0, 15, 90, 70 ],
          [ 100, 75, 50, 100, 30, 100, 90, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 75, 25, 90, 20, 40, 100, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 100, 100, 50, 100, 0, 100, 80, 90 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Fixed Income": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 0, 95, 0, 50, 70, 0 ],
          [ 100, 100, 0, 25, 35, 50, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 100, 100, 80, 90, 60, 0, 80, 90 ],
          [ 100, 100, 0, 90, 100, 0, 70, 75 ],
          [ 10, 100, 50, 80, 60, 40, 80, 60 ],
          [ 100, 100, 50, 100, 0, 15, 90, 70 ],
          [ 100, 75, 50, 100, 30, 100, 90, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 75, 25, 100, 100, 15, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 100, 100, 50, 100, 0, 100, 80, 90 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Fixed Term Deposits": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 25, 95, 60, 80, 40, 100 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 75, 75, 100, 75, 100, 100, 75 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 75, 50, 100, 60, 80, 70, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Futures": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 0, 95, 0, 50, 70, 0 ],
          [ 100, 100, 0, 25, 35, 50, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 0, 90, 100, 0, 70, 75 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 50, 100, 0, 15, 90, 70 ],
          [ 100, 75, 50, 100, 30, 100, 90, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 50, 25, 70, 0, 15, 80, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 75, 25, 100, 100, 15, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 100, 100, 50, 100, 0, 100, 80, 90 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Payment Orders": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 25, 95, 60, 80, 40, 100 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 75, 75, 100, 75, 100, 100, 75 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "Repos": {
        "bc_values": [
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 50, 0, 95, 0, 50, 70, 0 ],
          [ 100, 100, 0, 25, 35, 50, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 100, 75, 85, 50, 20, 80, 70 ],
          [ 100, 100, 80, 90, 60, 0, 80, 90 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 10, 100, 50, 80, 60, 40, 80, 60 ],
          [ 100, 100, 50, 100, 0, 15, 90, 70 ],
          [ 100, 75, 50, 100, 30, 100, 90, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 50, 25, 70, 0, 15, 80, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 75, 50, 100, 60, 80, 70, 100 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 20, 75, 25, 100, 100, 15, 100, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 75, 100, 20, 15, 80, 70 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 100, 100, 50, 100, 35, 100, 80, 100 ]
        ]
      },
      "bc": [
        "Product & Service Pricing",
        "Deal Structuring",
        "Pre-Trade/Deal Validation",
        "Trade/Deal Execution & Capture",
        "Transaction Origination & Capture",
        "Cash Management",
        "Trade/Deal Confirmation & Matching",
        "Position Control & Amendments",
        "Credit Limit Monitoring",
        "Trade/Deal Limit Monitoring",
        "Trade/Deal Settlements",
        "Payments",
        "Collateral Management ",
        "Custody/Safekeeping",
        "Loans Processing",
        "Treasury Processing",
        "FX Processing",
        "Securities Processing",
        "Derivatives Processing",
        "Nostro Reconcilement",
        "Trading Account Reconciliations",
        "G/L Proofs & Substantiation"
      ],
      "bpc": [
        "CONTRL",
        "PEOPLE",
        "EXECTN",
        "BUSCON",
        "RSKCTL",
        "INTLAM",
        "PHSACC",
        "POLPRO"
      ],
      "layout": [
        "FX Forwards",
        "Commercial Loans (Secured)",
        "Fixed Term Deposits",
        "Repos",
        "Cross Currency Swaps",
        "Futures",
        "Collateralised Debt Obligations (CDOs)",
        "Equities",
        "Fixed Income",
        "Payment Orders"
      ],
      "values": [ 10, 10, 10, 8, 6, 6, 4, 2 ]
    }
  }
}


POST localhost:8080/compute

// >>> SOA >>>

//Array sum function
function arraySUM(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}

//Add object fileds. it works with subset of fields also
function addObjectFileds(dest, src){
	for(var fld in dest){
		if (typeof src[fld] !== 'undefined' && 
		    typeof dest[fld] === 'number' && 
			typeof src[fld] === 'number'){
			dest[fld] += src[fld];
		}
	}
	return dest;
}

         //Compute BCS data based on category, subcategory, business component
         //THIS IS HIGHLY HARDCODED
         function computeBCS(cat, subcat, bpc_val) {
             var result = [],
                 t_asa = 0,
                 t_msa = 0;
             var comp_v = ["tp", "rdm", "csm", "tm", "cm", "lm", "irm", "sm"],
                 lookup_col = ["transactionprocessing", "referencedatamanagement",
                     "coresystemsmanagement", "tradingmanagement",
                     "creditmanagement", "liquiditymanagement",
                     "interestratemanagement", "salesmanagement"
                 ];
             //result contains pairs of ASA and MSA stating with TOTAL
             if (cat == "Generic") {
                 if (subcat == "General") {
                     comp_v.forEach(function(element, index) {
                         var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                         if (w != -1) {
                             result.push(assembly[element]["col_values"]["ASA"][w]);
                             result.push(assembly[element]["col_values"]["MSA"][w]);
                             t_asa += assembly[element]["col_values"]["ASA"][w];
                             t_msa += assembly[element]["col_values"]["MSA"][w];
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
             };

             if (cat == "Technical") {
                 if (subcat == "Reference Data Management") {
                     comp_v.forEach(function(element, index) {
                         if (index == 1) {
                             var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                             if (w != -1) {
                                 result.push(assembly[element]["col_values"]["ASA"][w]);
                                 result.push(assembly[element]["col_values"]["MSA"][w]);
                                 t_asa += assembly[element]["col_values"]["ASA"][w];
                                 t_msa += assembly[element]["col_values"]["MSA"][w];
                             } else {
                                 result.push(0);
                                 result.push(0);
                             }
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
                 if (subcat == "Core Systems Management") {
                     comp_v.forEach(function(element, index) {
                         if (index == 2) {
                             var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                             if (w != -1) {
                                 result.push(assembly[element]["col_values"]["ASA"][w]);
                                 result.push(assembly[element]["col_values"]["MSA"][w]);
                                 t_asa += assembly[element]["col_values"]["ASA"][w];
                                 t_msa += assembly[element]["col_values"]["MSA"][w];
                             } else {
                                 result.push(0);
                                 result.push(0);
                             }
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
                 if (subcat == "Trading Management") {
                     comp_v.forEach(function(element, index) {
                         if (index == 3) {
                             var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                             if (w != -1) {
                                 result.push(assembly[element]["col_values"]["ASA"][w]);
                                 result.push(assembly[element]["col_values"]["MSA"][w]);
                                 t_asa += assembly[element]["col_values"]["ASA"][w];
                                 t_msa += assembly[element]["col_values"]["MSA"][w];
                             } else {
                                 result.push(0);
                                 result.push(0);
                             }
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
                 if (subcat == "Credit Management") {
                     comp_v.forEach(function(element, index) {
                         if (index == 4) {
                             var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                             if (w != -1) {
                                 result.push(assembly[element]["col_values"]["ASA"][w]);
                                 result.push(assembly[element]["col_values"]["MSA"][w]);
                                 t_asa += assembly[element]["col_values"]["ASA"][w];
                                 t_msa += assembly[element]["col_values"]["MSA"][w];
                             } else {
                                 result.push(0);
                                 result.push(0);
                             }
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
                 if (subcat == "Liquidity Management") {
                     comp_v.forEach(function(element, index) {
                         if (index == 5) {
                             var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                             if (w != -1) {
                                 result.push(assembly[element]["col_values"]["ASA"][w]);
                                 result.push(assembly[element]["col_values"]["MSA"][w]);
                                 t_asa += assembly[element]["col_values"]["ASA"][w];
                                 t_msa += assembly[element]["col_values"]["MSA"][w];
                             } else {
                                 result.push(0);
                                 result.push(0);
                             }
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
                 if (subcat == "Sales Management (Product)") {
                     comp_v.forEach(function(element, index) {
                         if (index == 7) {
                             var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                             if (w != -1) {
                                 result.push(assembly[element]["col_values"]["ASA"][w]);
                                 result.push(assembly[element]["col_values"]["MSA"][w]);
                                 t_asa += assembly[element]["col_values"]["ASA"][w];
                                 t_msa += assembly[element]["col_values"]["MSA"][w];
                             } else {
                                 result.push(0);
                                 result.push(0);
                             }
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
                 if (subcat == "Interest Rate Management") {
                     comp_v.forEach(function(element, index) {
                         if (index == 6) {
                             var w = __input[lookup_col[index]]["bpc"].indexOf(bpc_val);
                             if (w != -1) {
                                 result.push(assembly[element]["col_values"]["ASA"][w]);
                                 result.push(assembly[element]["col_values"]["MSA"][w]);
                                 t_asa += assembly[element]["col_values"]["ASA"][w];
                                 t_msa += assembly[element]["col_values"]["MSA"][w];
                             } else {
                                 result.push(0);
                                 result.push(0);
                             }
                         } else {
                             result.push(0);
                             result.push(0);
                         }
                     });
                 }
             };

             //insert total asa and msa in front of result
             result.unshift(t_msa);
             result.unshift(t_asa);
             return result;
         }

         //Compute each bpc compute MSA, ASA, and RMI aggregated case
         function computeMAS_ASA_RMI_RR_product_aggregated(arr, riskLabel, assemblyLabel) {
             var result = {
                 IR: [],
                 MSA: [],
                 ASA: [],
                 RMI: [],
                 RR: [],
                 col_values: {
                     ASA: [],
                     MSA: [],
                     RMI: []
                 }
             };
             //Get IR for each product, compute MAS, ASA, RMI and RR
             var sumbpc = arr["values"].reduce(arraySUM, 0);
             arr["layout"].forEach(function(element, idx) {
                 var _ir = assembly.IR[element]["IR"][assembly.IR[element]["risk"].indexOf(riskLabel)];
                 var _msa = _ir * sumbpc * 100;
                 var _asa = arr["values"].reduce(function(accumulator, currentValue, currentIndex, array) {
                     return accumulator + currentValue * arr["prod_values"][idx][currentIndex];
                 }, 0);
                 _asa *= _ir;
                 var _rmi = 100.0 * _asa / _msa;
                 var _rr = (100.0 - _rmi) / 100.0 * _ir;
                 result.IR.push(_ir);
                 result.MSA.push(_msa);
                 result.ASA.push(_asa);
                 result.RMI.push(_rmi);
                 result.RR.push(_rr);
                 assembly.PS[element][assemblyLabel] = {
                     MSA: _msa,
                     ASA: _asa
                 };
                 assembly.PS[element]["TOTAL_ASA"] += _asa;
                 assembly.PS[element]["TOTAL_MSA"] += _msa;
             });
             //For each BPC compute MSA, ASA and RMI
             var sumir = result.IR.reduce(arraySUM, 0);
             arr["values"].forEach(function(element, idx) {
                 var _msa = element * sumir * 100;
                 var _asa = 0;
                 arr["prod_values"].forEach(function(elm, id) {
                     _asa += elm[idx] * result.IR[id];
                 });
                 _asa *= element;
                 var _rmi = 100.0 * _asa / _msa;
                 result.col_values.MSA.push(_msa);
                 result.col_values.ASA.push(_asa);
                 result.col_values.RMI.push(_rmi);
             });


             return result;
         }

         //Compute each bpc compute MSA, ASA, and RMI detailed case
         function computeMSA_ASA_RMI_detailed(arr, riskLabel) {
             var result = {
                 col_values: {
                     MSA: [],
                     ASA: [],
                     RMI: []
                 }
             };

             arr["values"].forEach(function(element, index) {
                 var _msa = 0,
                     _asa = 0;

                 arr["layout"].forEach(function(prd) {
                     var _ir = assembly.IR[prd]["IR"][assembly.IR[prd]["risk"].indexOf(riskLabel)];
                     arr[prd]["bc_values"].forEach(function(bcv) {
                         _asa += bcv[index] * element * _ir;
                         var partial_sp = bcv.reduce(function(accumulator, currentValue, currentIndex, array) {
                             return accumulator + currentValue * arr["values"][currentIndex];
                         }, 0);
                         if (partial_sp > 0) {
                             _msa += 100.0 * _ir * element;
                         }
                     });
                 });
                 result.col_values.MSA.push(_msa);
                 result.col_values.ASA.push(_asa);
                 result.col_values.RMI.push(100.0 * _asa / _msa);
             });

             return result;
         };

         //Compute MAS, ASA, RMI, and RR for each product
         function computeMAS_ASA_RMI_RR_product_detailed(arr, riskLabel, assemblyLabel) {
             var result = {
                 IR: [],
                 MSA: [],
                 ASA: [],
                 RMI: [],
                 RR: [],
                 col_values: {
                     ASA: [],
                     MSA: [],
                     RMI: []
                 }
             };

             var sumbpc = arr["values"].reduce(arraySUM, 0);
             arr["layout"].forEach(function(element, idx) {
                 //For all those 3 subrisks use Processing IR
                 var _ir = assembly.IR[element]["IR"][assembly.IR[element]["risk"].indexOf(riskLabel)];
                 var _msa = 0,
                     _asa = 0;
                 //Compute the aggregated sum for each bc >> asa, if asa > 0 then compute msa
                 arr[element]["bc_values"].forEach(function(bcv) {
                     var partial_sp = bcv.reduce(function(accumulator, currentValue, currentIndex, array) {
                         return accumulator + currentValue * arr["values"][currentIndex];
                     }, 0);
                     _asa += partial_sp;
                     if (partial_sp > 0) {
                         _msa += _ir * sumbpc * 100.0;
                     }
                 });
                 _asa *= _ir;
                 var _rmi = 100.0 * _asa / _msa;
                 var _rr = (100.0 - _rmi) / 100.0 * _ir;
                 result.IR.push(_ir);
                 result.MSA.push(_msa);
                 result.ASA.push(_asa);
                 result.RMI.push(_rmi);
                 result.RR.push(_rr);
                 assembly.PS[element][assemblyLabel] = {
                     MSA: _msa,
                     ASA: _asa
                 };
                 assembly.PS[element]["TOTAL_ASA"] += _asa;
                 assembly.PS[element]["TOTAL_MSA"] += _msa;
             });
             //For each bpc compute MSA, ASA, and RMI
             result.col_values = computeMSA_ASA_RMI_detailed(arr, riskLabel).col_values;
             return result;
         }


//Compute MAS, ASA, RMI, and RR for each business component
function computeMAS_ASA_RMI_RR_business_component_detailed(arr, riskLabel ,bc_item){
	var result = { IR: 0.0, RMI: 0.0, RR: 0, ASA: 0.0, MSA: 0.0 };				
	var bc_index = arr["bc"].indexOf(bc_item);
	
	if(bc_index != -1){
		//compute sum product for this business component for each product
		var sumbpc = arr["values"].reduce(arraySUM, 0);
		var _ir = 0.0, _asa = 0.0, _msa = 0.0;

		arr["layout"].forEach(function(product){
			_ir = assembly.IR[product]["IR"][assembly.IR[product]["risk"].indexOf(riskLabel)];
			_asa = arr[product]["bc_values"][bc_index].reduce(function(accumulator, currentValue, currentIndex, array){
				return accumulator + currentValue*arr["values"][currentIndex];
			},0.0);
			
			if (_asa > 0){
				_msa = _ir * sumbpc * 100;
				_asa *= _ir;
				result["IR"] += _ir;
				result["MSA"] += _msa;
				result["ASA"] += _asa;
			}
			
		});
	}

	return result;
}

//Compute MAS, ASA, RMI, and RR for each business component for agregated case (no business components)
function computeMAS_ASA_RMI_RR_business_component_agregated(bc_item){
	var result = { IR: 0.0, RMI: 0.0, RR: 0, ASA: 0.0, MSA: 0.0 };
	//bc_item should give the spreadsheet to look for, and the risk
	//this is hardly hardcoded and should be changed in the method
	var lookup_matrix = {
		"Trading Management" : {fieldLabel: "tradingmanagement", riskLabel:"Trading"},
		"Credit Management" : {fieldLabel: "creditmanagement", riskLabel:"Lending"},
		"Liquidity Management" : {fieldLabel: "liquiditymanagement", riskLabel:"Funding"},
		"Interest Rate Management" : {fieldLabel: "interestratemanagement", riskLabel:"Interest"},
		"Sales Management" : {fieldLabel: "salesmanagement", riskLabel:"Selling"}
	};
	
	
	var _ir = 0.0, _asa = 0.0, _msa = 0.0, arr = __input[lookup_matrix[bc_item].fieldLabel];
	var sumbpc = arr["values"].reduce(arraySUM, 0);

	arr["layout"].forEach(function(product, idx){
		_ir = assembly.IR[product]["IR"][assembly.IR[product]["risk"].indexOf(lookup_matrix[bc_item].riskLabel)];
		_asa = arr["prod_values"][idx].reduce(function(accumulator, currentValue, currentIndex, array){
			return accumulator + currentValue*arr["values"][currentIndex];
		},0.0);
		_asa *= _ir;
		_msa = _ir*sumbpc*100.0;
		result["IR"] += _ir;
		result["MSA"] += _msa;
		result["ASA"] += _asa;	
	});
	
	return result;
}


         //Setup layout Product Summary, Inherent Risk, Best Practice Summary, Business Component Summary
         var assembly = { PS: {}, IR: {}, BPS: {}, BCS: {} };

         //Compute Inherent Risk - IR
         var grandTotalIR = 0;

         __input["euf"].forEach(function(element) {
             var tmpIR = element.riskmatrix.values.map(function(val) {
                 return val * element.vbw;
             });
             var ceuf = element.riskmatrix.values.reduce(arraySUM, 0);
             var totalIR = tmpIR.reduce(arraySUM, 0);
             grandTotalIR += totalIR;
             assembly.IR[element.product] = {
                 vbw: element.vbw,
                 risk: element.riskmatrix.risk,
                 values: element.riskmatrix.values,
                 ceuf: ceuf,
                 totalIR: totalIR,
                 IR: tmpIR
             };
             assembly.PS[element.product] = {
                 IR: totalIR,
                 RMI: 0,
                 RR: 0,
                 TOTAL_ASA: 0,
                 TOTAL_MSA: 0
             };
         });

         //Compute RMI, RR, ASA, MSA for detailed forms
         //transactionprocessing, referencedatamanagement, coresystemsmanagement
         //Get IR for each product, compute MAS, ASA, RMI, and RR
         assembly.tp = computeMAS_ASA_RMI_RR_product_detailed(__input["transactionprocessing"], "Processing", "Transaction Processing");
         assembly.rdm = computeMAS_ASA_RMI_RR_product_detailed(__input["referencedatamanagement"], "Processing", "Reference Data Management");
         assembly.csm = computeMAS_ASA_RMI_RR_product_detailed(__input["coresystemsmanagement"], "Processing", "Core Systems Management");

         //Compute RMI, RR, ASA, MSA for direct forms
         //tradingmanagement, creditmanagement, liquiditymanagement, interestratemanagement, salesmanagement

         //Get IR for each product, compute MAS, ASA, RMI and RR
         assembly.tm = computeMAS_ASA_RMI_RR_product_aggregated(__input["tradingmanagement"], "Trading", "Trading Management");
         assembly.cm = computeMAS_ASA_RMI_RR_product_aggregated(__input["creditmanagement"], "Lending", "Credit Management");
         assembly.lm = computeMAS_ASA_RMI_RR_product_aggregated(__input["liquiditymanagement"], "Funding", "Liquidity Management");
         assembly.irm = computeMAS_ASA_RMI_RR_product_aggregated(__input["interestratemanagement"], "Interest", "Interest Rate Management");
         assembly.sm = computeMAS_ASA_RMI_RR_product_aggregated(__input["salesmanagement"], "Selling", "Sales Management");

         //compute RMI si RR for PS
         __input["products"].forEach(function(element) {
             assembly.PS[element]["RMI"] = 100.0 * assembly.PS[element]["TOTAL_ASA"] / assembly.PS[element]["TOTAL_MSA"];
             assembly.PS[element]["RR"] = (100.0 - assembly.PS[element]["RMI"]) / 100.0 * assembly.PS[element]["IR"];
         });

         //compute BPS per risk type

         //This is constructed by hand and is higly dependent on the position of bpc for each product
         //A general solution should be found to uniquely define and identify each bpc for each product
         var grandTotalMSA = 0;
         __input["bpc"]["layout"].forEach(function(cat) {
             assembly.BPS[cat] = {};
             __input["bpc"][cat]["layout"].forEach(function(subcat) {
                 assembly.BPS[cat][subcat] = {};
                 __input["bpc"][cat][subcat].forEach(function(bpc_val) {
                     assembly.BPS[cat][subcat][bpc_val] = computeBCS(cat, subcat, bpc_val);
                     grandTotalMSA += assembly.BPS[cat][subcat][bpc_val][1];
                 })
             })
         })
         //Computer IR, RMI and RR for bpc
         for (var c in assembly.BPS) {
             for (var sc in assembly.BPS[c]) {
                 for (var bpc_arr in assembly.BPS[c][sc]) {
                     var _ir = grandTotalIR / grandTotalMSA * assembly.BPS[c][sc][bpc_arr][1];
                     var _rmi = 100.0 * assembly.BPS[c][sc][bpc_arr][0] / assembly.BPS[c][sc][bpc_arr][1];
                     var _rr = (_ir / 100.0) * (100.0 - _rmi);
                     assembly.BPS[c][sc][bpc_arr].unshift(_rr);
                     assembly.BPS[c][sc][bpc_arr].unshift(_rmi);
                     assembly.BPS[c][sc][bpc_arr].unshift(_ir);
                 }
             }
         }

         //Compute IR, RMI, RR, ASA and MSA per Business Component
         __input["bc"]["layout"].forEach(function(cat) {
             //look in data.bc level 3 for each business component
             __input["bc"][cat]["layout"].forEach(function(subcat) {
                 __input["bc"][cat][subcat].forEach(function(bc_item) {
                     assembly.BCS[bc_item] = {
                         IR: 0.0,
                         RMI: 0.0,
                         RR: 0.0,
                         ASA: 0.0,
                         MSA: 0.0
                     };
                     //iterate in each risk component spreadsheet for this business component and do the computations
			var tmp_result = {IR: 0.0, RMI: 0.0, RR: 0, ASA: 0.0, MSA: 0.0};
			//Hardcoded category --- this should be treated in an uniform manner in next versions of methodology
			if (cat === "Processing Risks"){
				if (subcat === "Transaction Processing"){
					tmp_result = computeMAS_ASA_RMI_RR_business_component_detailed(__input["transactionprocessing"], "Processing" , bc_item);
					assembly.BCS[bc_item] = addObjectFileds(assembly.BCS[bc_item], tmp_result);
				}
				
				if (subcat === "Reference Data Management"){							
					tmp_result = computeMAS_ASA_RMI_RR_business_component_detailed(__input["referencedatamanagement"], "Processing" , bc_item);
					assembly.BCS[bc_item] = addObjectFileds(assembly.BCS[bc_item], tmp_result);
				}
				
				if (subcat === "Core Systems Management"){								
					tmp_result = computeMAS_ASA_RMI_RR_business_component_detailed(__input["coresystemsmanagement"],  "Processing" , bc_item);
					assembly.BCS[bc_item] = addObjectFileds(assembly.BCS[bc_item], tmp_result);
				}
			}else{
				tmp_result = computeMAS_ASA_RMI_RR_business_component_agregated(bc_item);
				assembly.BCS[bc_item] = addObjectFileds(assembly.BCS[bc_item], tmp_result);
			}
			
                 });
             });
         });
//Compute RMI and RR
for (var c in assembly.BCS){
	assembly.BCS[c]["RMI"] = 100.0*assembly.BCS[c]["ASA"]/assembly.BCS[c]["MSA"];
	assembly.BCS[c]["RR"] = (assembly.BCS[c]["IR"]/100.0)*(100.0 - assembly.BCS[c]["RMI"]);
};


 __output = {
     data: __input,
     result: assembly
 };

 // .: EOA :.