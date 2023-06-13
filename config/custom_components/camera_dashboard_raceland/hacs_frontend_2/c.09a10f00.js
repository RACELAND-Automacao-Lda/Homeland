import{s as t}from"./c.c13d4687.js";import{g as e}from"./c.da136530.js";import{aR as s,ac as o}from"./c.5a5021e9.js";import{ad as r,ae as n}from"./c.4d0662f5.js";import{e as a,s as i,c as u,d as c}from"./c.655d6539.js";function _(){return a(Date.now())}function f(){return i(Date.now())}const m=[],g=t=>t.callWS({type:"energy/info"}),y=t=>((t,e)=>{const s={};for(const o of t){const t=e(o);t in s?s[t].push(o):s[t]=[o]}return s})(t.energy_sources,(t=>t.type)),d=(a,i={})=>{let y="_energy";if(i.key){if(!i.key.startsWith("energy_"))throw new Error("Key need to start with energy_");y=`_${i.key}`}if(a.connection[y])return a.connection[y];m.push(i.key);const d=s(a.connection,y,(async()=>{if(d.prefs||(d.prefs=await(t=>t.callWS({type:"energy/get_prefs"}))(a)),d._refreshTimeout&&clearTimeout(d._refreshTimeout),d._active&&(!d.end||d.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),d._refreshTimeout=window.setTimeout((()=>d.refresh()),t.getTime()-Date.now())}return(async(s,r,a,i)=>{const[_,f,m]=await Promise.all([e(s),t(s.connection,o),g(s)]),y=_.find((t=>"co2signal"===t.domain));let d;if(y)for(const t of f){if(t.config_entry_id!==y.entry_id)continue;const e=s.states[t.entity_id];if(e&&"%"===e.attributes.unit_of_measurement){d=e.entity_id;break}}const p=[],l=[];for(const t of r.energy_sources)if("solar"!==t.type)if("gas"!==t.type)if("battery"!==t.type){for(const e of t.flow_from){p.push(e.stat_energy_from),l.push(e.stat_energy_from),e.stat_cost&&l.push(e.stat_cost);const t=m.cost_sensors[e.stat_energy_from];t&&l.push(t)}for(const e of t.flow_to){l.push(e.stat_energy_to),e.stat_compensation&&l.push(e.stat_compensation);const t=m.cost_sensors[e.stat_energy_to];t&&l.push(t)}}else l.push(t.stat_energy_from),l.push(t.stat_energy_to);else{l.push(t.stat_energy_from),t.stat_cost&&l.push(t.stat_cost);const e=m.cost_sensors[t.stat_energy_from];e&&l.push(e)}else l.push(t.stat_energy_from);const h=c(i||new Date,a),w=u(a,-1),T=await n(s,w,i,l,h>35?"month":h>2?"day":"hour");let v;return void 0!==d&&(v=await(async(t,e,s,o,r,n="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:null==r?void 0:r.toISOString(),energy_statistic_ids:s,co2_statistic_id:o,period:n}))(s,a,p,d,i,h>35?"month":h>2?"day":"hour")),Object.values(T).forEach((t=>{t.length&&new Date(t[0].start)>w&&t.unshift({...t[0],start:w.toISOString(),end:w.toISOString(),sum:0,state:0})})),{start:a,end:i,info:m,prefs:r,stats:T,co2SignalConfigEntry:y,co2SignalEntity:d,fossilEnergyConsumption:v}})(a,d.prefs,d.start,d.end)})),p=d.subscribe;d.subscribe=t=>{const e=p(t);return d._active++,()=>{d._active--,d._active<1&&(clearTimeout(d._refreshTimeout),d._refreshTimeout=void 0),e()}},d._active=0,d.prefs=i.prefs;const l=new Date;d.start=l.getHours()>0?f():r(),d.end=l.getHours()>0?_():function(){var t=new Date,e=t.getFullYear(),s=t.getMonth(),o=t.getDate(),r=new Date(0);return r.setFullYear(e,s,o-1),r.setHours(23,59,59,999),r}();const h=()=>{d._updatePeriodTimeout=window.setTimeout((()=>{d.start=f(),d.end=_(),h()}),u(_(),1).getTime()-Date.now())};return h(),d.clearPrefs=()=>{d.prefs=void 0},d.setPeriod=(t,e)=>{var s;d.start=t,d.end=e,d.start.getTime()!==f().getTime()||(null===(s=d.end)||void 0===s?void 0:s.getTime())!==_().getTime()||d._updatePeriodTimeout?d._updatePeriodTimeout&&(clearTimeout(d._updatePeriodTimeout),d._updatePeriodTimeout=void 0):h()},d},p=t=>t.callWS({type:"energy/solar_forecast"}),l=(t,e)=>{for(const s of e.energy_sources){if("gas"!==s.type)continue;const e=t.states[s.stat_energy_from];if(null!=e&&e.attributes.unit_of_measurement)return"Wh"===e.attributes.unit_of_measurement?"kWh":e.attributes.unit_of_measurement}};export{_ as a,l as b,p as c,y as e,d as g,f as s};