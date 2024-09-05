import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?=,|\\n|/)',
    'program exit_message\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=,|\\n|\\/)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        20,
        20,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '\\s*(pr(ogram|ogra|ogr|og|o)?)\\s+((di(r)?|drop|l(ist|is|i)?)\\s+)([\\w&&[^0-9]]\\w{0,31})',
    'capture program drop exit_message\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\s*(pr(ogram|ogra|ogr|og|o)?)\\s+((di(r)?|drop|l(ist|is|i)?)\\s+)([\\w&&[^0-9]]\\w{0,31})"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      7,
      33,
    ],
    [
      8,
      15,
    ],
    [
      10,
      15,
    ],
    [
      16,
      21,
    ],
    [
      16,
      20,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      21,
      33,
    ],
  ])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()',
    '    local time     "Start: `start_time\'" _n(1) "End: `end_time\'"\n',
    40,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      41,
      44,
    ],
    [
      41,
      43,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      41,
      43,
    ],
    [
      43,
      44,
    ],
  ])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()',
    '        local message "`progname\' finished running" _n(2) "`time\'"\n',
    51,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      52,
      55,
    ],
    [
      52,
      54,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      52,
      54,
    ],
    [
      54,
      55,
    ],
  ])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()',
    '        local message "`progname\' ran but Stata gave error code r(`rc\')" _n(2) "`time\'"\n',
    72,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      73,
      76,
    ],
    [
      73,
      75,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      73,
      75,
    ],
    [
      75,
      76,
    ],
  ])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()',
    '        local message "`progname\' stopped with error code r(`rc\')" _n(2) "`time\'"\n',
    66,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      67,
      70,
    ],
    [
      67,
      69,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      67,
      69,
    ],
    [
      69,
      70,
    ],
  ])
})
