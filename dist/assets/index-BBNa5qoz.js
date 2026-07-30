(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="160",hc=0,Lo=1,dc=2,hl=1,dl=2,bn=3,Ln=0,He=1,on=2,Vn=0,Ii=1,mn=2,Do=3,Io=4,fc=5,ei=100,pc=101,mc=102,Uo=103,No=104,gc=200,_c=201,vc=202,xc=203,js=204,Ks=205,Mc=206,Sc=207,yc=208,wc=209,Ec=210,Tc=211,bc=212,Ac=213,Rc=214,Cc=0,Pc=1,Lc=2,Gr=3,Dc=4,Ic=5,Uc=6,Nc=7,fl=0,Fc=1,Oc=2,kn=0,Bc=1,zc=2,Hc=3,pl=4,Gc=5,Vc=6,ml=300,Fi=301,Oi=302,Zs=303,$s=304,Zr=306,Js=1e3,an=1001,Qs=1002,De=1003,Fo=1004,us=1005,Ze=1006,kc=1007,ir=1008,Wn=1009,Wc=1010,Xc=1011,fo=1012,gl=1013,Hn=1014,Gn=1015,rr=1016,_l=1017,vl=1018,si=1020,qc=1021,ln=1023,Yc=1024,jc=1025,oi=1026,Bi=1027,Kc=1028,xl=1029,Zc=1030,Ml=1031,Sl=1033,hs=33776,ds=33777,fs=33778,ps=33779,Oo=35840,Bo=35841,zo=35842,Ho=35843,yl=36196,Go=37492,Vo=37496,ko=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,jo=37813,Ko=37814,Zo=37815,$o=37816,Jo=37817,Qo=37818,ta=37819,ea=37820,na=37821,ms=36492,ia=36494,ra=36495,$c=36283,sa=36284,oa=36285,aa=36286,wl=3e3,ai=3001,Jc=3200,Qc=3201,El=0,tu=1,Qe="",we="srgb",Dn="srgb-linear",po="display-p3",$r="display-p3-linear",Vr="linear",ie="srgb",kr="rec709",Wr="p3",hi=7680,la=519,eu=512,nu=513,iu=514,Tl=515,ru=516,su=517,ou=518,au=519,ca=35044,ua="300 es",to=1035,Rn=2e3,Xr=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,eo=180/Math.PI;function sr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function _s(i,t,e){return(1-e)*i+e*t}function ha(i){return(i&i-1)===0&&i!==0}function no(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,r,s,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=r[0],p=r[3],d=r[6],x=r[1],v=r[4],S=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*_+a*x+l*R,s[3]=o*p+a*v+l*T,s[6]=o*d+a*S+l*A,s[1]=c*_+h*x+u*R,s[4]=c*p+h*v+u*T,s[7]=c*d+h*S+u*A,s[2]=f*_+m*x+g*R,s[5]=f*p+m*v+g*T,s[8]=f*d+m*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=e*u+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vs.makeScale(t,e)),this}rotate(t){return this.premultiply(vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new kt;function bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){const i=qr("canvas");return i.style.display="block",i}const da={};function tr(i){i in da||(da[i]=!0,console.warn(i))}const fa=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pa=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[Dn]:{transfer:Vr,primaries:kr,toReference:i=>i,fromReference:i=>i},[we]:{transfer:ie,primaries:kr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$r]:{transfer:Vr,primaries:Wr,toReference:i=>i.applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa)},[po]:{transfer:ie,primaries:Wr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa).convertLinearToSRGB()}},uu=new Set([Dn,$r]),$t={enabled:!0,_workingColorSpace:Dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ur[t].toReference,r=ur[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ur[i].primaries},getTransfer:function(i){return i===Qe?Vr:ur[i].transfer}};function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=qr("canvas")),di.width=t.width,di.height=t.height;const n=di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hu=0;class Rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=sr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;class Xe extends Gi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=an,r=an,s=Ze,o=ir,a=ln,l=Wn,c=Xe.DEFAULT_ANISOTROPY,h=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=sr(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ai?we:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Qs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Qs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?ai:wl}set encoding(t){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ai?we:Qe}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=ml;Xe.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(m+1)/2,R=(d+1)/2,T=(h+f)/4,A=(u+_)/4,U=(g+p)/4;return v>S&&v>R?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=T/n,s=A/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=U/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=U/s),this.set(n,r,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?we:Qe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cl extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pu extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,d*x);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}const S=a*x;if(l=l*p+f*S,c=c*p+m*S,h=h*p+g*S,u=u*p+_*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ma.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ma.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ss.copy(this).projectOnVector(t),this.sub(Ss)}reflect(t){return this.sub(Ss.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new L,ma=new or;class ar{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),dr.subVectors(this.max,Yi),fi.subVectors(t.a,Yi),pi.subVectors(t.b,Yi),mi.subVectors(t.c,Yi),Nn.subVectors(pi,fi),Fn.subVectors(mi,pi),Yn.subVectors(fi,mi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Yn.z,Yn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Yn.z,0,-Yn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Yn.y,Yn.x,0];return!ys(e,fi,pi,mi,dr)||(e=[1,0,0,0,1,0,0,0,1],!ys(e,fi,pi,mi,dr))?!1:(fr.crossVectors(Nn,Fn),e=[fr.x,fr.y,fr.z],ys(e,fi,pi,mi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,hr=new ar,fi=new L,pi=new L,mi=new L,Nn=new L,Fn=new L,Yn=new L,Yi=new L,dr=new L,fr=new L,jn=new L;function ys(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){jn.fromArray(i,s);const a=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mu=new ar,ji=new L,ws=new L;class Jr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ji,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(ws)),this.expandByPoint(ji.copy(t.center).sub(ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new L,Es=new L,pr=new L,On=new L,Ts=new L,mr=new L,bs=new L;class mo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Es.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Es);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=On.dot(this.direction),l=-On.dot(pr),c=On.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Es).addScaledVector(pr,f),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,r,s){Ts.subVectors(e,t),mr.subVectors(n,t),bs.crossVectors(Ts,mr);let o=this.direction.dot(bs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(mr.crossVectors(On,mr));if(l<0)return null;const c=a*this.direction.dot(Ts.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(bs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,r,s,o,a,l,c,h,u,f,m,g,_,p){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,m,g,_,p)}set(t,e,n,r,s,o,a,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/gi.setFromMatrixColumn(t,0).length(),s=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,_u)}lookAt(t,e,n){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Bn.crossVectors(n,Ve),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Bn.crossVectors(n,Ve)),Bn.normalize(),gr.crossVectors(Ve,Bn),r[0]=Bn.x,r[4]=gr.x,r[8]=Ve.x,r[1]=Bn.y,r[5]=gr.y,r[9]=Ve.y,r[2]=Bn.z,r[6]=gr.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],x=n[3],v=n[7],S=n[11],R=n[15],T=r[0],A=r[4],U=r[8],M=r[12],w=r[1],F=r[5],B=r[9],K=r[13],C=r[2],D=r[6],O=r[10],X=r[14],j=r[3],Y=r[7],Z=r[11],it=r[15];return s[0]=o*T+a*w+l*C+c*j,s[4]=o*A+a*F+l*D+c*Y,s[8]=o*U+a*B+l*O+c*Z,s[12]=o*M+a*K+l*X+c*it,s[1]=h*T+u*w+f*C+m*j,s[5]=h*A+u*F+f*D+m*Y,s[9]=h*U+u*B+f*O+m*Z,s[13]=h*M+u*K+f*X+m*it,s[2]=g*T+_*w+p*C+d*j,s[6]=g*A+_*F+p*D+d*Y,s[10]=g*U+_*B+p*O+d*Z,s[14]=g*M+_*K+p*X+d*it,s[3]=x*T+v*w+S*C+R*j,s[7]=x*A+v*F+S*D+R*Y,s[11]=x*U+v*B+S*O+R*Z,s[15]=x*M+v*K+S*X+R*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*m-n*l*m)+_*(+e*l*m-e*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+e*c*u-e*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+d*(-r*a*h-e*l*u+e*a*f+r*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],x=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,S=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,T=e*x+n*v+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=x*A,t[1]=(_*f*s-u*p*s-_*r*m+n*p*m+u*r*d-n*f*d)*A,t[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*d+n*l*d)*A,t[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*m-n*l*m)*A,t[4]=v*A,t[5]=(h*p*s-g*f*s+g*r*m-e*p*m-h*r*d+e*f*d)*A,t[6]=(g*l*s-o*p*s-g*r*c+e*p*c+o*r*d-e*l*d)*A,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*m+e*l*m)*A,t[8]=S*A,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*d-e*u*d)*A,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*d+e*a*d)*A,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*m-e*a*m)*A,t[12]=R*A,t[13]=(h*_*r-g*u*r+g*n*f-e*_*f-h*n*p+e*u*p)*A,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*p-e*a*p)*A,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,g=s*u,_=o*h,p=o*u,d=a*u,x=l*c,v=l*h,S=l*u,R=n.x,T=n.y,A=n.z;return r[0]=(1-(_+d))*R,r[1]=(m+S)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(f+d))*T,r[6]=(p+x)*T,r[7]=0,r[8]=(g+v)*A,r[9]=(p-x)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=gi.set(r[0],r[1],r[2]).length();const o=gi.set(r[4],r[5],r[6]).length(),a=gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],nn.copy(this);const c=1/s,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Rn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r);let m,g;if(a===Rn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Rn){const l=this.elements,c=1/(e-t),h=1/(n-r),u=1/(o-s),f=(e+t)*c,m=(n+r)*h;let g,_;if(a===Rn)g=(o+s)*u,_=-2*u;else if(a===Xr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new L,nn=new me,gu=new L(0,0,0),_u=new L(1,1,1),Bn=new L,gr=new L,Ve=new L,ga=new me,_a=new or;class Qr{constructor(t=0,e=0,n=0,r=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _a.setFromEuler(this),this.setFromQuaternion(_a,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const va=new L,_i=new or,yn=new me,_r=new L,Ki=new L,xu=new L,Mu=new or,xa=new L(1,0,0),Ma=new L(0,1,0),Sa=new L(0,0,1),Su={type:"added"},yu={type:"removed"};class ye extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new L,e=new Qr,n=new or,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new me},normalMatrix:{value:new kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(xa,t)}rotateY(t){return this.rotateOnAxis(Ma,t)}rotateZ(t){return this.rotateOnAxis(Sa,t)}translateOnAxis(t,e){return va.copy(t).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xa,t)}translateY(t){return this.translateOnAxis(Ma,t)}translateZ(t){return this.translateOnAxis(Sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Ki,_r,this.up):yn.lookAt(_r,Ki,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(yn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new L,wn=new L,As=new L,En=new L,vi=new L,xi=new L,ya=new L,Rs=new L,Cs=new L,Ps=new L;let vr=!1;class sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),rn.subVectors(t,e),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){rn.subVectors(r,e),wn.subVectors(n,e),As.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(wn),l=rn.dot(As),c=wn.dot(wn),h=wn.dot(As),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(t,e,n,r,s,o,a,l){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),this.getInterpolation(t,e,n,r,s,o,a,l)}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(t,e,n,r){return rn.subVectors(n,e),wn.subVectors(t,e),rn.cross(wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;vi.subVectors(r,n),xi.subVectors(s,n),Rs.subVectors(t,n);const l=vi.dot(Rs),c=xi.dot(Rs);if(l<=0&&c<=0)return e.copy(n);Cs.subVectors(t,r);const h=vi.dot(Cs),u=xi.dot(Cs);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(vi,o);Ps.subVectors(t,s);const m=vi.dot(Ps),g=xi.dot(Ps);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(xi,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ya.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(ya,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(vi,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ls(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ${constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=lu(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ls(o,s,t+1/3),this.g=Ls(o,s,t),this.b=Ls(o,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=we){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=Pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return $t.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ie(Ae.r*255,0,255))*65536+Math.round(Ie(Ae.g*255,0,255))*256+Math.round(Ie(Ae.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,r=Ae.g,s=Ae.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=we){$t.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,r=Ae.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(xr);const n=_s(zn.h,xr.h,e),r=_s(zn.s,xr.s,e),s=_s(zn.l,xr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new $;$.NAMES=Pl;let wu=0;class Vi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Ii,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Ks,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==js&&(n.blendSrc=this.blendSrc),this.blendDst!==Ks&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Be extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new L,Mr=new qt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),r=Fe(r,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ca&&(t.usage=this.usage),t}}class Ll extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dl extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eu=0;const Ye=new me,Ds=new ye,Mi=new L,ke=new ar,Zi=new ar,Me=new L;class Ne extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Dl:Ll)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Ds.lookAt(t),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(ke.min,Zi.min),ke.expandByPoint(Me),Me.addVectors(ke.max,Zi.max),ke.expandByPoint(Me)):(ke.expandByPoint(Zi.min),ke.expandByPoint(Zi.max))}ke.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(t,c),Me.add(Mi)),r=Math.max(r,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new L,h[w]=new L;const u=new L,f=new L,m=new L,g=new qt,_=new qt,p=new qt,d=new L,x=new L;function v(w,F,B){u.fromArray(r,w*3),f.fromArray(r,F*3),m.fromArray(r,B*3),g.fromArray(o,w*2),_.fromArray(o,F*2),p.fromArray(o,B*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const K=1/(_.x*p.y-p.x*_.y);isFinite(K)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(K),x.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(K),c[w].add(d),c[F].add(d),c[B].add(d),h[w].add(x),h[F].add(x),h[B].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,F=S.length;w<F;++w){const B=S[w],K=B.start,C=B.count;for(let D=K,O=K+C;D<O;D+=3)v(n[D+0],n[D+1],n[D+2])}const R=new L,T=new L,A=new L,U=new L;function M(w){A.fromArray(s,w*3),U.copy(A);const F=c[w];R.copy(F),R.sub(A.multiplyScalar(A.dot(F))).normalize(),T.crossVectors(U,F);const K=T.dot(h[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=K}for(let w=0,F=S.length;w<F;++w){const B=S[w],K=B.start,C=B.count;for(let D=K,O=K+C;D<O;D+=3)M(n[D+0]),M(n[D+1]),M(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new me,Kn=new mo,Sr=new Jr,Ea=new L,Si=new L,yi=new L,wi=new L,Is=new L,yr=new L,wr=new qt,Er=new qt,Tr=new qt,Ta=new L,ba=new L,Aa=new L,br=new L,Ar=new L;class q extends ye{constructor(t=new Ne,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Is.fromBufferAttribute(u,t),o?yr.addScaledVector(Is,h):yr.addScaledVector(Is.sub(e),h))}e.add(yr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Kn.copy(t.ray).recast(t.near),!(Sr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Sr,Ea)===null||Kn.origin.distanceToSquared(Ea)>(t.far-t.near)**2))&&(wa.copy(s).invert(),Kn.copy(t.ray).applyMatrix4(wa),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=x,R=v;S<R;S+=3){const T=a.getX(S),A=a.getX(S+1),U=a.getX(S+2);r=Rr(this,d,t,n,c,h,u,T,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const x=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=Rr(this,o,t,n,c,h,u,x,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=x,R=v;S<R;S+=3){const T=S,A=S+1,U=S+2;r=Rr(this,d,t,n,c,h,u,T,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const x=p,v=p+1,S=p+2;r=Rr(this,o,t,n,c,h,u,x,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Tu(i,t,e,n,r,s,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Ln,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function Rr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Si),i.getVertexPosition(l,yi),i.getVertexPosition(c,wi);const h=Tu(i,t,e,n,Si,yi,wi,br);if(h){r&&(wr.fromBufferAttribute(r,a),Er.fromBufferAttribute(r,l),Tr.fromBufferAttribute(r,c),h.uv=sn.getInterpolation(br,Si,yi,wi,wr,Er,Tr,new qt)),s&&(wr.fromBufferAttribute(s,a),Er.fromBufferAttribute(s,l),Tr.fromBufferAttribute(s,c),h.uv1=sn.getInterpolation(br,Si,yi,wi,wr,Er,Tr,new qt),h.uv2=h.uv1),o&&(Ta.fromBufferAttribute(o,a),ba.fromBufferAttribute(o,l),Aa.fromBufferAttribute(o,c),h.normal=sn.getInterpolation(br,Si,yi,wi,Ta,ba,Aa,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};sn.getNormal(Si,yi,wi,u.normal),h.face=u}return h}class Mt extends Ne{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(_,p,d,x,v,S,R,T,A,U,M){const w=S/A,F=R/U,B=S/2,K=R/2,C=T/2,D=A+1,O=U+1;let X=0,j=0;const Y=new L;for(let Z=0;Z<O;Z++){const it=Z*F-K;for(let rt=0;rt<D;rt++){const W=rt*w-B;Y[_]=W*x,Y[p]=it*v,Y[d]=C,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[d]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(rt/A),u.push(1-Z/U),X+=1}}for(let Z=0;Z<U;Z++)for(let it=0;it<A;it++){const rt=f+it+D*Z,W=f+it+D*(Z+1),J=f+(it+1)+D*(Z+1),ut=f+(it+1)+D*Z;l.push(rt,W,ut),l.push(W,J,ut),j+=6}a.addGroup(m,j,M),m+=j,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=zi(i[e]);for(const r in n)t[r]=n[r]}return t}function bu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Il(i){return i.getRenderTarget()===null?i.outputColorSpace:$t.workingColorSpace}const Au={clone:zi,merge:Le};var Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class de extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ul extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends Ul{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,Ti=1;class Pu extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(Ei,Ti,t,e);r.layers=this.layers,this.add(r);const s=new $e(Ei,Ti,t,e);s.layers=this.layers,this.add(s);const o=new $e(Ei,Ti,t,e);o.layers=this.layers,this.add(o);const a=new $e(Ei,Ti,t,e);a.layers=this.layers,this.add(a);const l=new $e(Ei,Ti,t,e);l.layers=this.layers,this.add(l);const c=new $e(Ei,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nl extends Xe{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lu extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ai?we:Qe),this.texture=new Nl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mt(5,5,5),s=new de({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Vn});s.uniforms.tEquirect.value=e;const o=new q(r,s),a=e.minFilter;return e.minFilter===ir&&(e.minFilter=Ze),new Pu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Us=new L,Du=new L,Iu=new kt;class Jn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Us.subVectors(n,e).cross(Du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Iu.getNormalMatrix(t),r=this.coplanarPoint(Us).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Jr,Cr=new L;class _o{constructor(t=new Jn,e=new Jn,n=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],x=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,f-c,p-m,S-d).normalize(),n[1].setComponents(l+s,f+c,p+m,S+d).normalize(),n[2].setComponents(l+o,f+h,p+g,S+x).normalize(),n[3].setComponents(l-o,f-h,p-g,S-x).normalize(),n[4].setComponents(l-a,f-u,p-_,S-v).normalize(),e===Rn)n[5].setComponents(l+a,f+u,p+_,S+v).normalize();else if(e===Xr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Cr.x=r.normal.x>0?t.max.x:t.min.x,Cr.y=r.normal.y>0?t.max.y:t.min.y,Cr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fl(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Uu(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,f=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ni extends Ne{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const x=d*f-o;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+c*d,S=x+c*(d+1),R=x+1+c*(d+1),T=x+1+c*d;m.push(v,S,T),m.push(S,R,T)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ku=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",dh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Th=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ah=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ph=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ih=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$h=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,of=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Nu,alphahash_pars_fragment:Fu,alphamap_fragment:Ou,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:Hu,aomap_fragment:Gu,aomap_pars_fragment:Vu,batching_pars_vertex:ku,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:qu,bsdfs:Yu,iridescence_fragment:ju,bumpmap_pars_fragment:Ku,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Qu,color_fragment:th,color_pars_fragment:eh,color_pars_vertex:nh,color_vertex:ih,common:rh,cube_uv_reflection_fragment:sh,defaultnormal_vertex:oh,displacementmap_pars_vertex:ah,displacementmap_vertex:lh,emissivemap_fragment:ch,emissivemap_pars_fragment:uh,colorspace_fragment:hh,colorspace_pars_fragment:dh,envmap_fragment:fh,envmap_common_pars_fragment:ph,envmap_pars_fragment:mh,envmap_pars_vertex:gh,envmap_physical_pars_fragment:Rh,envmap_vertex:_h,fog_vertex:vh,fog_pars_vertex:xh,fog_fragment:Mh,fog_pars_fragment:Sh,gradientmap_pars_fragment:yh,lightmap_fragment:wh,lightmap_pars_fragment:Eh,lights_lambert_fragment:Th,lights_lambert_pars_fragment:bh,lights_pars_begin:Ah,lights_toon_fragment:Ch,lights_toon_pars_fragment:Ph,lights_phong_fragment:Lh,lights_phong_pars_fragment:Dh,lights_physical_fragment:Ih,lights_physical_pars_fragment:Uh,lights_fragment_begin:Nh,lights_fragment_maps:Fh,lights_fragment_end:Oh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:zh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:Gh,map_fragment:Vh,map_pars_fragment:kh,map_particle_fragment:Wh,map_particle_pars_fragment:Xh,metalnessmap_fragment:qh,metalnessmap_pars_fragment:Yh,morphcolor_vertex:jh,morphnormal_vertex:Kh,morphtarget_pars_vertex:Zh,morphtarget_vertex:$h,normal_fragment_begin:Jh,normal_fragment_maps:Qh,normal_pars_fragment:td,normal_pars_vertex:ed,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:od,iridescence_pars_fragment:ad,opaque_fragment:ld,packing:cd,premultiplied_alpha_fragment:ud,project_vertex:hd,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:vd,shadowmask_pars_fragment:xd,skinbase_vertex:Md,skinning_pars_vertex:Sd,skinning_vertex:yd,skinnormal_vertex:wd,specularmap_fragment:Ed,specularmap_pars_fragment:Td,tonemapping_fragment:bd,tonemapping_pars_fragment:Ad,transmission_fragment:Rd,transmission_pars_fragment:Cd,uv_pars_fragment:Pd,uv_pars_vertex:Ld,uv_vertex:Dd,worldpos_vertex:Id,background_vert:Ud,background_frag:Nd,backgroundCube_vert:Fd,backgroundCube_frag:Od,cube_vert:Bd,cube_frag:zd,depth_vert:Hd,depth_frag:Gd,distanceRGBA_vert:Vd,distanceRGBA_frag:kd,equirect_vert:Wd,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:Yd,meshbasic_vert:jd,meshbasic_frag:Kd,meshlambert_vert:Zd,meshlambert_frag:$d,meshmatcap_vert:Jd,meshmatcap_frag:Qd,meshnormal_vert:tf,meshnormal_frag:ef,meshphong_vert:nf,meshphong_frag:rf,meshphysical_vert:sf,meshphysical_frag:of,meshtoon_vert:af,meshtoon_frag:lf,points_vert:cf,points_frag:uf,shadow_vert:hf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},ot={common:{diffuse:{value:new $(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new $(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},dn={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new $(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new $(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};dn.physical={uniforms:Le([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new $(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new $(0)},specularColor:{value:new $(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Pr={r:0,b:0,g:0};function mf(i,t,e,n,r,s,o){const a=new $(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zr)?(h===void 0&&(h=new q(new Mt(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:zi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$t.getTransfer(v.colorSpace)!==ie,(u!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new q(new Ni(2,2),new de({name:"BackgroundMaterial",uniforms:zi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Pr,Il(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function gf(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(C,D,O,X,j){let Y=!1;if(o){const Z=_(X,O,D);c!==Z&&(c=Z,m(c.object)),Y=d(C,X,O,j),Y&&x(C,X,O,j)}else{const Z=D.wireframe===!0;(c.geometry!==X.id||c.program!==O.id||c.wireframe!==Z)&&(c.geometry=X.id,c.program=O.id,c.wireframe=Z,Y=!0)}j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(C,D,O,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,D,O){const X=O.wireframe===!0;let j=a[C.id];j===void 0&&(j={},a[C.id]=j);let Y=j[D.id];Y===void 0&&(Y={},j[D.id]=Y);let Z=Y[X];return Z===void 0&&(Z=p(f()),Y[X]=Z),Z}function p(C){const D=[],O=[],X=[];for(let j=0;j<r;j++)D[j]=0,O[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:X,object:C,attributes:{},index:null}}function d(C,D,O,X){const j=c.attributes,Y=D.attributes;let Z=0;const it=O.getAttributes();for(const rt in it)if(it[rt].location>=0){const J=j[rt];let ut=Y[rt];if(ut===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),J===void 0||J.attribute!==ut||ut&&J.data!==ut.data)return!0;Z++}return c.attributesNum!==Z||c.index!==X}function x(C,D,O,X){const j={},Y=D.attributes;let Z=0;const it=O.getAttributes();for(const rt in it)if(it[rt].location>=0){let J=Y[rt];J===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));const ut={};ut.attribute=J,J&&J.data&&(ut.data=J.data),j[rt]=ut,Z++}c.attributes=j,c.attributesNum=Z,c.index=X}function v(){const C=c.newAttributes;for(let D=0,O=C.length;D<O;D++)C[D]=0}function S(C){R(C,0)}function R(C,D){const O=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;O[C]=1,X[C]===0&&(i.enableVertexAttribArray(C),X[C]=1),j[C]!==D&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,D),j[C]=D)}function T(){const C=c.newAttributes,D=c.enabledAttributes;for(let O=0,X=D.length;O<X;O++)D[O]!==C[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function A(C,D,O,X,j,Y,Z){Z===!0?i.vertexAttribIPointer(C,D,O,j,Y):i.vertexAttribPointer(C,D,O,X,j,Y)}function U(C,D,O,X){if(n.isWebGL2===!1&&(C.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const j=X.attributes,Y=O.getAttributes(),Z=D.defaultAttributeValues;for(const it in Y){const rt=Y[it];if(rt.location>=0){let W=j[it];if(W===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){const J=W.normalized,ut=W.itemSize,vt=e.get(W);if(vt===void 0)continue;const _t=vt.buffer,Dt=vt.type,Nt=vt.bytesPerElement,bt=n.isWebGL2===!0&&(Dt===i.INT||Dt===i.UNSIGNED_INT||W.gpuType===gl);if(W.isInterleavedBufferAttribute){const jt=W.data,z=jt.stride,Re=W.offset;if(jt.isInstancedInterleavedBuffer){for(let St=0;St<rt.locationSize;St++)R(rt.location+St,jt.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let St=0;St<rt.locationSize;St++)S(rt.location+St);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let St=0;St<rt.locationSize;St++)A(rt.location+St,ut/rt.locationSize,Dt,J,z*Nt,(Re+ut/rt.locationSize*St)*Nt,bt)}else{if(W.isInstancedBufferAttribute){for(let jt=0;jt<rt.locationSize;jt++)R(rt.location+jt,W.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let jt=0;jt<rt.locationSize;jt++)S(rt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let jt=0;jt<rt.locationSize;jt++)A(rt.location+jt,ut/rt.locationSize,Dt,J,ut*Nt,ut/rt.locationSize*jt*Nt,bt)}}else if(Z!==void 0){const J=Z[it];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(rt.location,J);break;case 3:i.vertexAttrib3fv(rt.location,J);break;case 4:i.vertexAttrib4fv(rt.location,J);break;default:i.vertexAttrib1fv(rt.location,J)}}}}T()}function M(){B();for(const C in a){const D=a[C];for(const O in D){const X=D[O];for(const j in X)g(X[j].object),delete X[j];delete D[O]}delete a[C]}}function w(C){if(a[C.id]===void 0)return;const D=a[C.id];for(const O in D){const X=D[O];for(const j in X)g(X[j].object),delete X[j];delete D[O]}delete a[C.id]}function F(C){for(const D in a){const O=a[D];if(O[C.id]===void 0)continue;const X=O[C.id];for(const j in X)g(X[j].object),delete X[j];delete O[C.id]}}function B(){K(),h=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function _f(i,t,e,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,u){i.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,f){if(f===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,f),e.update(u,s,f)}function c(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function vf(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||t.has("OES_texture_float"),R=v&&S,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function xf(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Jn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,v=x*4;let S=d.clippingState||null;l.value=S,S=h(g,f,v,m);for(let R=0;R!==v;++R)S[R]=e[R];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,S=m;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Mf(i){let t=new WeakMap;function e(o,a){return a===Zs?o.mapping=Fi:a===$s&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zs||a===$s)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lu(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ol extends Ul{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,Ra=[.125,.215,.35,.446,.526,.582],ni=20,Ns=new Ol,Ca=new $;let Fs=null,Os=0,Bs=0;const Qn=(1+Math.sqrt(5))/2,bi=1/Qn,Pa=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Qn,bi),new L(0,Qn,-bi),new L(bi,0,Qn),new L(-bi,0,Qn),new L(Qn,bi,0),new L(-Qn,bi,0)];class La{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Fs=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fs,Os,Bs),t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fs=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:rr,format:ln,colorSpace:Dn,depthBuffer:!1},r=Da(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(s)),this._blurMaterial=yf(s,t,e)}return r}_compileMaterial(t){const e=new q(this._lodPlanes[0],t);this._renderer.compile(e,Ns)}_sceneToCubeUV(t,e,n,r){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ca),h.toneMapping=kn,h.autoClear=!1;const m=new Be({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new q(new Mt,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ca),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Lr(r,x*v,d>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Fi||t.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new q(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ns)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pa[(r-1)%Pa.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new q(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ni-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):ni;p>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const d=[];let x=0;for(let A=0;A<ni;++A){const U=A/_,M=Math.exp(-U*U/2);d.push(M),A===0?x+=M:A<p&&(x+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[r],R=3*S*(r>v-Ci?r-v+Ci:0),T=4*(this._cubeSize-S);Lr(e,R,T,3*S,2*S),l.setRenderTarget(e),l.render(u,Ns)}}function Sf(i){const t=[],e=[],n=[];let r=i;const s=i-Ci+1+Ra.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ci?l=Ra[o-i+Ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,x=new Float32Array(_*g*m),v=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,U=T>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];x.set(M,_*g*T),v.set(f,p*g*T);const w=[T,T,T,T,T,T];S.set(w,d*g*T)}const R=new Ne;R.setAttribute("position",new gn(x,_)),R.setAttribute("uv",new gn(v,p)),R.setAttribute("faceIndex",new gn(S,d)),t.push(R),r>Ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Da(i,t,e){const n=new ci(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function yf(i,t,e){const n=new Float32Array(ni),r=new L(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ia(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ua(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zs||l===$s,h=l===Fi||l===Oi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new La(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new La(i));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ef(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tf(i,t,e,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,S=x.length;v<S;v+=3){const R=x[v+0],T=x[v+1],A=x[v+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const R=v+0,T=v+1,A=v+2;f.push(R,T,T,A,A,R)}}else return;const p=new(bl(f)?Dl:Ll)(f,1);p.version=_;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bf(i,t,e,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(s,g,a,m*l),e.update(g,s,1)}function u(m,g,_){if(_===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,m*l,_),e.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];e.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Af(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Rf(i,t){return i[0]-t[0]}function Cf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Pf(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new Se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let D=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var m=D;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),R===!0&&(M=3);let w=h.attributes.position.count*M,F=1;w>t.maxTextureSize&&(F=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const B=new Float32Array(w*F*4*_),K=new Cl(B,w,F,_);K.type=Gn,K.needsUpdate=!0;const C=M*4;for(let O=0;O<_;O++){const X=T[O],j=A[O],Y=U[O],Z=w*F*4*O;for(let it=0;it<X.count;it++){const rt=it*C;v===!0&&(o.fromBufferAttribute(X,it),B[Z+rt+0]=o.x,B[Z+rt+1]=o.y,B[Z+rt+2]=o.z,B[Z+rt+3]=0),S===!0&&(o.fromBufferAttribute(j,it),B[Z+rt+4]=o.x,B[Z+rt+5]=o.y,B[Z+rt+6]=o.z,B[Z+rt+7]=0),R===!0&&(o.fromBufferAttribute(Y,it),B[Z+rt+8]=o.x,B[Z+rt+9]=o.y,B[Z+rt+10]=o.z,B[Z+rt+11]=Y.itemSize===4?o.w:1)}}p={count:_,texture:K,size:new qt(w,F)},s.set(h,p),h.addEventListener("dispose",D)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const x=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const R=_[S];R[0]=S,R[1]=f[S]}_.sort(Cf);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Rf);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const R=a[S],T=R[0],A=R[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+S)!==p[T]&&h.setAttribute("morphTarget"+S,p[T]),d&&h.getAttribute("morphNormal"+S)!==d[T]&&h.setAttribute("morphNormal"+S,d[T]),r[S]=A,x+=A):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Lf(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Bl extends Xe{constructor(t,e,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:oi,h!==oi&&h!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=Hn),n===void 0&&h===Bi&&(n=si),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zl=new Xe,Hl=new Bl(1,1);Hl.compareFunction=Tl;const Gl=new Cl,Vl=new pu,kl=new Nl,Na=[],Fa=[],Oa=new Float32Array(16),Ba=new Float32Array(9),za=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Na[r];if(s===void 0&&(s=new Float32Array(r),Na[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ts(i,t){let e=Fa[t];e===void 0&&(e=new Int32Array(t),Fa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Df(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;za.set(n),i.uniformMatrix2fv(this.addr,!1,za),_e(e,n)}}function Of(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ba.set(n),i.uniformMatrix3fv(this.addr,!1,Ba),_e(e,n)}}function Bf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Oa.set(n),i.uniformMatrix4fv(this.addr,!1,Oa),_e(e,n)}}function zf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Yf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Hl:zl;e.setTexture2D(t||s,r)}function jf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Vl,r)}function Kf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||kl,r)}function Zf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Gl,r)}function $f(i){switch(i){case 5126:return Df;case 35664:return If;case 35665:return Uf;case 35666:return Nf;case 35674:return Ff;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return Hf;case 35668:case 35672:return Gf;case 35669:case 35673:return Vf;case 5125:return kf;case 36294:return Wf;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Zf}}function Jf(i,t){i.uniform1fv(this.addr,t)}function Qf(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function tp(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function ep(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function np(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ip(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rp(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sp(i,t){i.uniform1iv(this.addr,t)}function op(i,t){i.uniform2iv(this.addr,t)}function ap(i,t){i.uniform3iv(this.addr,t)}function lp(i,t){i.uniform4iv(this.addr,t)}function cp(i,t){i.uniform1uiv(this.addr,t)}function up(i,t){i.uniform2uiv(this.addr,t)}function hp(i,t){i.uniform3uiv(this.addr,t)}function dp(i,t){i.uniform4uiv(this.addr,t)}function fp(i,t,e){const n=this.cache,r=t.length,s=ts(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||zl,s[o])}function pp(i,t,e){const n=this.cache,r=t.length,s=ts(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Vl,s[o])}function mp(i,t,e){const n=this.cache,r=t.length,s=ts(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||kl,s[o])}function gp(i,t,e){const n=this.cache,r=t.length,s=ts(e,r);ge(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Gl,s[o])}function _p(i){switch(i){case 5126:return Jf;case 35664:return Qf;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return rp;case 5124:case 35670:return sp;case 35667:case 35671:return op;case 35668:case 35672:return ap;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return up;case 36295:return hp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}class vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$f(e.type)}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_p(e.type)}}class Mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function Ha(i,t){i.seq.push(t),i.map[t.id]=t}function Sp(i,t,e){const n=i.name,r=n.length;for(zs.lastIndex=0;;){const s=zs.exec(n),o=zs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ha(e,c===void 0?new vp(a,i,t):new xp(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mp(a),Ha(e,u)),e=u}}}class Br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Sp(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ga(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yp=37297;let wp=0;function Ep(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Tp(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===Wr&&e===kr?n="LinearDisplayP3ToLinearSRGB":t===kr&&e===Wr&&(n="LinearSRGBToLinearDisplayP3"),i){case Dn:case $r:return[n,"LinearTransferOETF"];case we:case po:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Va(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Ep(i.getShaderSource(t),o)}else return r}function bp(i,t){const e=Tp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ap(i,t){let e;switch(t){case Bc:e="Linear";break;case zc:e="Reinhard";break;case Hc:e="OptimizedCineon";break;case pl:e="ACESFilmic";break;case Vc:e="AgX";break;case Gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function Pp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pi(i){return i!==""}function ka(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(Dp,Up)}const Ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Up(i,t){let e=Ot[t];if(e===void 0){const n=Ip.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const Np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(i){return i.replace(Np,Fp)}function Fp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qa(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Op(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fl:t="ENVMAP_BLENDING_MULTIPLY";break;case Fc:t="ENVMAP_BLENDING_MIX";break;case Oc:t="ENVMAP_BLENDING_ADD";break}return t}function Gp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Op(e),c=Bp(e),h=zp(e),u=Hp(e),f=Gp(e),m=e.isWebGL2?"":Rp(e),g=Cp(e),_=Pp(s),p=r.createProgram();let d,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Pi).join(`
`),d.length>0&&(d+=`
`),x=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Pi).join(`
`),x.length>0&&(x+=`
`)):(d=[qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),x=[m,qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==kn?Ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,bp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),o=io(o),o=ka(o,e),o=Wa(o,e),a=io(a),a=ka(a,e),a=Wa(a,e),o=Xa(o),a=Xa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+d+o,R=v+x+a,T=Ga(r,r.VERTEX_SHADER,S),A=Ga(r,r.FRAGMENT_SHADER,R);r.attachShader(p,T),r.attachShader(p,A),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(B){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(T).trim(),D=r.getShaderInfoLog(A).trim();let O=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,T,A);else{const j=Va(r,T,"vertex"),Y=Va(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+j+`
`+Y)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(C===""||D==="")&&(X=!1);X&&(B.diagnostics={runnable:O,programLog:K,vertexShader:{log:C,prefix:d},fragmentShader:{log:D,prefix:x}})}r.deleteShader(T),r.deleteShader(A),M=new Br(r,p),w=Lp(r,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(p,yp)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}let kp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xp(t),e.set(t,n)),n}}class Xp{constructor(t){this.id=kp++,this.code=t,this.usedTimes=0}}function qp(i,t,e,n,r,s,o){const a=new go,l=new Wp,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,w,F,B,K){const C=B.fog,D=K.geometry,O=M.isMeshStandardMaterial?B.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),j=X&&X.mapping===Zr?X.image.height:null,Y=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=Z!==void 0?Z.length:0;let rt=0;D.morphAttributes.position!==void 0&&(rt=1),D.morphAttributes.normal!==void 0&&(rt=2),D.morphAttributes.color!==void 0&&(rt=3);let W,J,ut,vt;if(Y){const Ce=dn[Y];W=Ce.vertexShader,J=Ce.fragmentShader}else W=M.vertexShader,J=M.fragmentShader,l.update(M),ut=l.getVertexShaderID(M),vt=l.getFragmentShaderID(M);const _t=i.getRenderTarget(),Dt=K.isInstancedMesh===!0,Nt=K.isBatchedMesh===!0,bt=!!M.map,jt=!!M.matcap,z=!!X,Re=!!M.aoMap,St=!!M.lightMap,Pt=!!M.bumpMap,pt=!!M.normalMap,se=!!M.displacementMap,Bt=!!M.emissiveMap,b=!!M.metalnessMap,y=!!M.roughnessMap,G=M.anisotropy>0,et=M.clearcoat>0,tt=M.iridescence>0,nt=M.sheen>0,mt=M.transmission>0,ct=G&&!!M.anisotropyMap,dt=et&&!!M.clearcoatMap,Et=et&&!!M.clearcoatNormalMap,zt=et&&!!M.clearcoatRoughnessMap,Q=tt&&!!M.iridescenceMap,Zt=tt&&!!M.iridescenceThicknessMap,Xt=nt&&!!M.sheenColorMap,Ct=nt&&!!M.sheenRoughnessMap,xt=!!M.specularMap,ft=!!M.specularColorMap,Ft=!!M.specularIntensityMap,Kt=mt&&!!M.transmissionMap,ae=mt&&!!M.thicknessMap,Gt=!!M.gradientMap,st=!!M.alphaMap,P=M.alphaTest>0,at=!!M.alphaHash,lt=!!M.extensions,At=!!D.attributes.uv1,yt=!!D.attributes.uv2,te=!!D.attributes.uv3;let ee=kn;return M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ee=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:J,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Nt,instancing:Dt,instancingColor:Dt&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Dn,map:bt,matcap:jt,envMap:z,envMapMode:z&&X.mapping,envMapCubeUVHeight:j,aoMap:Re,lightMap:St,bumpMap:Pt,normalMap:pt,displacementMap:f&&se,emissiveMap:Bt,normalMapObjectSpace:pt&&M.normalMapType===tu,normalMapTangentSpace:pt&&M.normalMapType===El,metalnessMap:b,roughnessMap:y,anisotropy:G,anisotropyMap:ct,clearcoat:et,clearcoatMap:dt,clearcoatNormalMap:Et,clearcoatRoughnessMap:zt,iridescence:tt,iridescenceMap:Q,iridescenceThicknessMap:Zt,sheen:nt,sheenColorMap:Xt,sheenRoughnessMap:Ct,specularMap:xt,specularColorMap:ft,specularIntensityMap:Ft,transmission:mt,transmissionMap:Kt,thicknessMap:ae,gradientMap:Gt,opaque:M.transparent===!1&&M.blending===Ii,alphaMap:st,alphaTest:P,alphaHash:at,combine:M.combine,mapUv:bt&&_(M.map.channel),aoMapUv:Re&&_(M.aoMap.channel),lightMapUv:St&&_(M.lightMap.channel),bumpMapUv:Pt&&_(M.bumpMap.channel),normalMapUv:pt&&_(M.normalMap.channel),displacementMapUv:se&&_(M.displacementMap.channel),emissiveMapUv:Bt&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:dt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:xt&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:Ft&&_(M.specularIntensityMap.channel),transmissionMapUv:Kt&&_(M.transmissionMap.channel),thicknessMapUv:ae&&_(M.thicknessMap.channel),alphaMapUv:st&&_(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pt||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:yt,vertexUv3s:te,pointsUvs:K.isPoints===!0&&!!D.attributes.uv&&(bt||st),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&$t.getTransfer(M.map.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:lt&&M.extensions.derivatives===!0,extensionFragDepth:lt&&M.extensions.fragDepth===!0,extensionDrawBuffers:lt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const w=g[M.type];let F;if(w){const B=dn[w];F=Au.clone(B.uniforms)}else F=M.uniforms;return F}function R(M,w){let F;for(let B=0,K=c.length;B<K;B++){const C=c[B];if(C.cacheKey===w){F=C,++F.usedTimes;break}}return F===void 0&&(F=new Vp(i,w,M,s),c.push(F)),F}function T(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:U}}function Yp(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function jp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ya(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ja(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,m,g,_,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function a(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function l(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||jp),n.length>1&&n.sort(f||Ya),r.length>1&&r.sort(f||Ya)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Kp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new ja,i.set(n,[o])):r>=s.length?(o=new ja,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new $};break;case"SpotLight":e={position:new L,direction:new L,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new $,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new $,groundColor:new $};break;case"RectAreaLight":e={color:new $,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function $p(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jp=0;function Qp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tm(i,t){const e=new Zp,n=$p(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new L);const s=new L,o=new me,a=new me;function l(h,u){let f=0,m=0,g=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let _=0,p=0,d=0,x=0,v=0,S=0,R=0,T=0,A=0,U=0,M=0;h.sort(Qp);const w=u===!0?Math.PI:1;for(let B=0,K=h.length;B<K;B++){const C=h[B],D=C.color,O=C.intensity,X=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=D.r*O*w,m+=D.g*O*w,g+=D.b*O*w;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(C.sh.coefficients[Y],O);M++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const Z=C.shadow,it=n.get(C);it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,r.directionalShadow[_]=it,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=C.shadow.matrix,S++}r.directional[_]=Y,_++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(D).multiplyScalar(O*w),Y.distance=X,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,r.spot[d]=Y;const Z=C.shadow;if(C.map&&(r.spotLightMap[A]=C.map,A++,Z.updateMatrices(C),C.castShadow&&U++),r.spotLightMatrix[d]=Z.matrix,C.castShadow){const it=n.get(C);it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,r.spotShadow[d]=it,r.spotShadowMap[d]=j,T++}d++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(D).multiplyScalar(O),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),r.rectArea[x]=Y,x++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*w),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const Z=C.shadow,it=n.get(C);it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,it.shadowCameraNear=Z.camera.near,it.shadowCameraFar=Z.camera.far,r.pointShadow[p]=it,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=C.shadow.matrix,R++}r.point[p]=Y,p++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(O*w),Y.groundColor.copy(C.groundColor).multiplyScalar(O*w),r.hemi[v]=Y,v++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_FLOAT_1,r.rectAreaLTC2=ot.LTC_FLOAT_2):(r.rectAreaLTC1=ot.LTC_HALF_1,r.rectAreaLTC2=ot.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_FLOAT_1,r.rectAreaLTC2=ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_HALF_1,r.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==d||F.rectAreaLength!==x||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==T||F.numSpotMaps!==A||F.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=x,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=T+A-U,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,F.directionalLength=_,F.pointLength=p,F.spotLength=d,F.rectAreaLength=x,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=T,F.numSpotMaps=A,F.numLightProbes=M,r.version=Jp++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0;const d=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),f++}else if(S.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Ka(i,t){const e=new tm(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function em(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Ka(i,t),e.set(s,[l])):o>=a.length?(l=new Ka(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class nm extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class im extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function om(i,t,e){let n=new _o;const r=new qt,s=new qt,o=new Se,a=new nm({depthPacking:Qc}),l=new im,c={},h=e.maxTextureSize,u={[Ln]:He,[He]:Ln,[on]:on},f=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:rm,fragmentShader:sm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new q(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let d=this.type;this.render=function(T,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=d!==bn&&this.type===bn,C=d===bn&&this.type!==bn;for(let D=0,O=T.length;D<O;D++){const X=T[D],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const Y=j.getFrameExtents();if(r.multiply(Y),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,j.mapSize.y=s.y)),j.map===null||K===!0||C===!0){const it=this.type!==bn?{minFilter:De,magFilter:De}:{};j.map!==null&&j.map.dispose(),j.map=new ci(r.x,r.y,it),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const Z=j.getViewportCount();for(let it=0;it<Z;it++){const rt=j.getViewport(it);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),B.viewport(o),j.updateMatrices(X,it),n=j.getFrustum(),S(A,U,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===bn&&x(j,U),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,w,F)};function x(T,A){const U=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,U,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,U,m,_,null)}function v(T,A,U,M){let w=null;const F=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)w=F;else if(w=U.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=w.uuid,K=A.uuid;let C=c[B];C===void 0&&(C={},c[B]=C);let D=C[K];D===void 0&&(D=w.clone(),C[K]=D,A.addEventListener("dispose",R)),w=D}if(w.visible=A.visible,w.wireframe=A.wireframe,M===bn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=i.properties.get(w);B.light=U}return w}function S(T,A,U,M,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const K=t.update(T),C=T.material;if(Array.isArray(C)){const D=K.groups;for(let O=0,X=D.length;O<X;O++){const j=D[O],Y=C[j.materialIndex];if(Y&&Y.visible){const Z=v(T,Y,M,w);T.onBeforeShadow(i,T,A,U,K,Z,j),i.renderBufferDirect(U,null,K,Z,T,j),T.onAfterShadow(i,T,A,U,K,Z,j)}}}else if(C.visible){const D=v(T,C,M,w);T.onBeforeShadow(i,T,A,U,K,D,null),i.renderBufferDirect(U,null,K,D,T,null),T.onAfterShadow(i,T,A,U,K,D,null)}}const B=T.children;for(let K=0,C=B.length;K<C;K++)S(B[K],A,U,M,w)}function R(T){T.target.removeEventListener("dispose",R);for(const U in c){const M=c[U],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function am(i,t,e){const n=e.isWebGL2;function r(){let P=!1;const at=new Se;let lt=null;const At=new Se(0,0,0,0);return{setMask:function(yt){lt!==yt&&!P&&(i.colorMask(yt,yt,yt,yt),lt=yt)},setLocked:function(yt){P=yt},setClear:function(yt,te,ee,ve,Ce){Ce===!0&&(yt*=ve,te*=ve,ee*=ve),at.set(yt,te,ee,ve),At.equals(at)===!1&&(i.clearColor(yt,te,ee,ve),At.copy(at))},reset:function(){P=!1,lt=null,At.set(-1,0,0,0)}}}function s(){let P=!1,at=null,lt=null,At=null;return{setTest:function(yt){yt?Nt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(yt){at!==yt&&!P&&(i.depthMask(yt),at=yt)},setFunc:function(yt){if(lt!==yt){switch(yt){case Cc:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case Gr:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=yt}},setLocked:function(yt){P=yt},setClear:function(yt){At!==yt&&(i.clearDepth(yt),At=yt)},reset:function(){P=!1,at=null,lt=null,At=null}}}function o(){let P=!1,at=null,lt=null,At=null,yt=null,te=null,ee=null,ve=null,Ce=null;return{setTest:function(ne){P||(ne?Nt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ne){at!==ne&&!P&&(i.stencilMask(ne),at=ne)},setFunc:function(ne,Pe,un){(lt!==ne||At!==Pe||yt!==un)&&(i.stencilFunc(ne,Pe,un),lt=ne,At=Pe,yt=un)},setOp:function(ne,Pe,un){(te!==ne||ee!==Pe||ve!==un)&&(i.stencilOp(ne,Pe,un),te=ne,ee=Pe,ve=un)},setLocked:function(ne){P=ne},setClear:function(ne){Ce!==ne&&(i.clearStencil(ne),Ce=ne)},reset:function(){P=!1,at=null,lt=null,At=null,yt=null,te=null,ee=null,ve=null,Ce=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,x=null,v=null,S=null,R=null,T=null,A=null,U=null,M=new $(0,0,0),w=0,F=!1,B=null,K=null,C=null,D=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=Y>=2);let it=null,rt={};const W=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),ut=new Se().fromArray(W),vt=new Se().fromArray(J);function _t(P,at,lt,At){const yt=new Uint8Array(4),te=i.createTexture();i.bindTexture(P,te),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<lt;ee++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(at,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(at+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return te}const Dt={};Dt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(i.DEPTH_TEST),l.setFunc(Gr),Bt(!1),b(Lo),Nt(i.CULL_FACE),pt(Vn);function Nt(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function bt(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function jt(P,at){return m[P]!==at?(i.bindFramebuffer(P,at),m[P]=at,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=at),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=at)),!0):!1}function z(P,at){let lt=_,At=!1;if(P)if(lt=g.get(at),lt===void 0&&(lt=[],g.set(at,lt)),P.isWebGLMultipleRenderTargets){const yt=P.texture;if(lt.length!==yt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let te=0,ee=yt.length;te<ee;te++)lt[te]=i.COLOR_ATTACHMENT0+te;lt.length=yt.length,At=!0}}else lt[0]!==i.COLOR_ATTACHMENT0&&(lt[0]=i.COLOR_ATTACHMENT0,At=!0);else lt[0]!==i.BACK&&(lt[0]=i.BACK,At=!0);At&&(e.isWebGL2?i.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Re(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const St={[ei]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};if(n)St[Uo]=i.MIN,St[No]=i.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(St[Uo]=P.MIN_EXT,St[No]=P.MAX_EXT)}const Pt={[gc]:i.ZERO,[_c]:i.ONE,[vc]:i.SRC_COLOR,[js]:i.SRC_ALPHA,[Ec]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[Mc]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[Ks]:i.ONE_MINUS_SRC_ALPHA,[wc]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[Tc]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Ac]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(P,at,lt,At,yt,te,ee,ve,Ce,ne){if(P===Vn){d===!0&&(bt(i.BLEND),d=!1);return}if(d===!1&&(Nt(i.BLEND),d=!0),P!==fc){if(P!==x||ne!==F){if((v!==ei||T!==ei)&&(i.blendEquation(i.FUNC_ADD),v=ei,T=ei),ne)switch(P){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,A=null,U=null,M.set(0,0,0),w=0,x=P,F=ne}return}yt=yt||at,te=te||lt,ee=ee||At,(at!==v||yt!==T)&&(i.blendEquationSeparate(St[at],St[yt]),v=at,T=yt),(lt!==S||At!==R||te!==A||ee!==U)&&(i.blendFuncSeparate(Pt[lt],Pt[At],Pt[te],Pt[ee]),S=lt,R=At,A=te,U=ee),(ve.equals(M)===!1||Ce!==w)&&(i.blendColor(ve.r,ve.g,ve.b,Ce),M.copy(ve),w=Ce),x=P,F=!1}function se(P,at){P.side===on?bt(i.CULL_FACE):Nt(i.CULL_FACE);let lt=P.side===He;at&&(lt=!lt),Bt(lt),P.blending===Ii&&P.transparent===!1?pt(Vn):pt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const At=P.stencilWrite;c.setTest(At),At&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),G(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Nt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){B!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),B=P)}function b(P){P!==hc?(Nt(i.CULL_FACE),P!==K&&(P===Lo?i.cullFace(i.BACK):P===dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),K=P}function y(P){P!==C&&(j&&i.lineWidth(P),C=P)}function G(P,at,lt){P?(Nt(i.POLYGON_OFFSET_FILL),(D!==at||O!==lt)&&(i.polygonOffset(at,lt),D=at,O=lt)):bt(i.POLYGON_OFFSET_FILL)}function et(P){P?Nt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function tt(P){P===void 0&&(P=i.TEXTURE0+X-1),it!==P&&(i.activeTexture(P),it=P)}function nt(P,at,lt){lt===void 0&&(it===null?lt=i.TEXTURE0+X-1:lt=it);let At=rt[lt];At===void 0&&(At={type:void 0,texture:void 0},rt[lt]=At),(At.type!==P||At.texture!==at)&&(it!==lt&&(i.activeTexture(lt),it=lt),i.bindTexture(P,at||Dt[P]),At.type=P,At.texture=at)}function mt(){const P=rt[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(P){ut.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ut.copy(P))}function Kt(P){vt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),vt.copy(P))}function ae(P,at){let lt=u.get(at);lt===void 0&&(lt=new WeakMap,u.set(at,lt));let At=lt.get(P);At===void 0&&(At=i.getUniformBlockIndex(at,P.name),lt.set(P,At))}function Gt(P,at){const At=u.get(at).get(P);h.get(at)!==At&&(i.uniformBlockBinding(at,At,P.__bindingPointIndex),h.set(at,At))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},it=null,rt={},m={},g=new WeakMap,_=[],p=null,d=!1,x=null,v=null,S=null,R=null,T=null,A=null,U=null,M=new $(0,0,0),w=0,F=!1,B=null,K=null,C=null,D=null,O=null,ut.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Nt,disable:bt,bindFramebuffer:jt,drawBuffers:z,useProgram:Re,setBlending:pt,setMaterial:se,setFlipSided:Bt,setCullFace:b,setLineWidth:y,setPolygonOffset:G,setScissorTest:et,activeTexture:tt,bindTexture:nt,unbindTexture:mt,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:xt,texImage3D:ft,updateUBOMapping:ae,uniformBlockBinding:Gt,texStorage2D:Xt,texStorage3D:Ct,texSubImage2D:Et,texSubImage3D:zt,compressedTexSubImage2D:Q,compressedTexSubImage3D:Zt,scissor:Ft,viewport:Kt,reset:st}}function lm(i,t,e,n,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return m?new OffscreenCanvas(b,y):qr("canvas")}function _(b,y,G,et){let tt=1;if((b.width>et||b.height>et)&&(tt=et/Math.max(b.width,b.height)),tt<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const nt=y?no:Math.floor,mt=nt(tt*b.width),ct=nt(tt*b.height);u===void 0&&(u=g(mt,ct));const dt=G?g(mt,ct):u;return dt.width=mt,dt.height=ct,dt.getContext("2d").drawImage(b,0,0,mt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+mt+"x"+ct+")."),dt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return ha(b.width)&&ha(b.height)}function d(b){return a?!1:b.wrapS!==an||b.wrapT!==an||b.minFilter!==De&&b.minFilter!==Ze}function x(b,y){return b.generateMipmaps&&y&&b.minFilter!==De&&b.minFilter!==Ze}function v(b){i.generateMipmap(b)}function S(b,y,G,et,tt=!1){if(a===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let nt=y;if(y===i.RED&&(G===i.FLOAT&&(nt=i.R32F),G===i.HALF_FLOAT&&(nt=i.R16F),G===i.UNSIGNED_BYTE&&(nt=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.R8UI),G===i.UNSIGNED_SHORT&&(nt=i.R16UI),G===i.UNSIGNED_INT&&(nt=i.R32UI),G===i.BYTE&&(nt=i.R8I),G===i.SHORT&&(nt=i.R16I),G===i.INT&&(nt=i.R32I)),y===i.RG&&(G===i.FLOAT&&(nt=i.RG32F),G===i.HALF_FLOAT&&(nt=i.RG16F),G===i.UNSIGNED_BYTE&&(nt=i.RG8)),y===i.RGBA){const mt=tt?Vr:$t.getTransfer(et);G===i.FLOAT&&(nt=i.RGBA32F),G===i.HALF_FLOAT&&(nt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(nt=mt===ie?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function R(b,y,G){return x(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==De&&b.minFilter!==Ze?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===De||b===Fo||b===us?i.NEAREST:i.LINEAR}function A(b){const y=b.target;y.removeEventListener("dispose",A),M(y),y.isVideoTexture&&h.delete(y)}function U(b){const y=b.target;y.removeEventListener("dispose",U),F(y)}function M(b){const y=n.get(b);if(y.__webglInit===void 0)return;const G=b.source,et=f.get(G);if(et){const tt=et[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(b),Object.keys(et).length===0&&f.delete(G)}n.remove(b)}function w(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const G=b.source,et=f.get(G);delete et[y.__cacheKey],o.memory.textures--}function F(b){const y=b.texture,G=n.get(b),et=n.get(y);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(G.__webglFramebuffer[tt]))for(let nt=0;nt<G.__webglFramebuffer[tt].length;nt++)i.deleteFramebuffer(G.__webglFramebuffer[tt][nt]);else i.deleteFramebuffer(G.__webglFramebuffer[tt]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[tt])}else{if(Array.isArray(G.__webglFramebuffer))for(let tt=0;tt<G.__webglFramebuffer.length;tt++)i.deleteFramebuffer(G.__webglFramebuffer[tt]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let tt=0;tt<G.__webglColorRenderbuffer.length;tt++)G.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[tt]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let tt=0,nt=y.length;tt<nt;tt++){const mt=n.get(y[tt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(y[tt])}n.remove(y),n.remove(b)}let B=0;function K(){B=0}function C(){const b=B;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),B+=1,b}function D(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function O(b,y){const G=n.get(b);if(b.isVideoTexture&&se(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const et=b.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(G,b,y);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function X(b,y){const G=n.get(b);if(b.version>0&&G.__version!==b.version){ut(G,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function j(b,y){const G=n.get(b);if(b.version>0&&G.__version!==b.version){ut(G,b,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function Y(b,y){const G=n.get(b);if(b.version>0&&G.__version!==b.version){vt(G,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const Z={[Js]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[Qs]:i.MIRRORED_REPEAT},it={[De]:i.NEAREST,[Fo]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[kc]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},rt={[eu]:i.NEVER,[au]:i.ALWAYS,[nu]:i.LESS,[Tl]:i.LEQUAL,[iu]:i.EQUAL,[ou]:i.GEQUAL,[ru]:i.GREATER,[su]:i.NOTEQUAL};function W(b,y,G){if(G?(i.texParameteri(b,i.TEXTURE_WRAP_S,Z[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Z[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Z[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,it[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,it[y.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==an||y.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==De&&y.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===De||y.minFilter!==us&&y.minFilter!==ir||y.type===Gn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===rr&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function J(b,y){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const et=y.source;let tt=f.get(et);tt===void 0&&(tt={},f.set(et,tt));const nt=D(y);if(nt!==b.__cacheKey){tt[nt]===void 0&&(tt[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[nt].usedTimes++;const mt=tt[b.__cacheKey];mt!==void 0&&(tt[b.__cacheKey].usedTimes--,mt.usedTimes===0&&w(y)),b.__cacheKey=nt,b.__webglTexture=tt[nt].texture}return G}function ut(b,y,G){let et=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=i.TEXTURE_3D);const tt=J(b,y),nt=y.source;e.bindTexture(et,b.__webglTexture,i.TEXTURE0+G);const mt=n.get(nt);if(nt.version!==mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const ct=$t.getPrimaries($t.workingColorSpace),dt=y.colorSpace===Qe?null:$t.getPrimaries(y.colorSpace),Et=y.colorSpace===Qe||ct===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const zt=d(y)&&p(y.image)===!1;let Q=_(y.image,zt,!1,r.maxTextureSize);Q=Bt(y,Q);const Zt=p(Q)||a,Xt=s.convert(y.format,y.colorSpace);let Ct=s.convert(y.type),xt=S(y.internalFormat,Xt,Ct,y.colorSpace,y.isVideoTexture);W(et,y,Zt);let ft;const Ft=y.mipmaps,Kt=a&&y.isVideoTexture!==!0&&xt!==yl,ae=mt.__version===void 0||tt===!0,Gt=R(y,Q,Zt);if(y.isDepthTexture)xt=i.DEPTH_COMPONENT,a?y.type===Gn?xt=i.DEPTH_COMPONENT32F:y.type===Hn?xt=i.DEPTH_COMPONENT24:y.type===si?xt=i.DEPTH24_STENCIL8:xt=i.DEPTH_COMPONENT16:y.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===oi&&xt===i.DEPTH_COMPONENT&&y.type!==fo&&y.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Hn,Ct=s.convert(y.type)),y.format===Bi&&xt===i.DEPTH_COMPONENT&&(xt=i.DEPTH_STENCIL,y.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=si,Ct=s.convert(y.type))),ae&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,Xt,Ct,null));else if(y.isDataTexture)if(Ft.length>0&&Zt){Kt&&ae&&e.texStorage2D(i.TEXTURE_2D,Gt,xt,Ft[0].width,Ft[0].height);for(let st=0,P=Ft.length;st<P;st++)ft=Ft[st],Kt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,Xt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,st,xt,ft.width,ft.height,0,Xt,Ct,ft.data);y.generateMipmaps=!1}else Kt?(ae&&e.texStorage2D(i.TEXTURE_2D,Gt,xt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Xt,Ct,Q.data)):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,Xt,Ct,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,xt,Ft[0].width,Ft[0].height,Q.depth);for(let st=0,P=Ft.length;st<P;st++)ft=Ft[st],y.format!==ln?Xt!==null?Kt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,Q.depth,Xt,ft.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,xt,ft.width,ft.height,Q.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,Q.depth,Xt,Ct,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,xt,ft.width,ft.height,Q.depth,0,Xt,Ct,ft.data)}else{Kt&&ae&&e.texStorage2D(i.TEXTURE_2D,Gt,xt,Ft[0].width,Ft[0].height);for(let st=0,P=Ft.length;st<P;st++)ft=Ft[st],y.format!==ln?Xt!==null?Kt?e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,Xt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,xt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,Xt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,st,xt,ft.width,ft.height,0,Xt,Ct,ft.data)}else if(y.isDataArrayTexture)Kt?(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,xt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xt,Ct,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,Xt,Ct,Q.data);else if(y.isData3DTexture)Kt?(ae&&e.texStorage3D(i.TEXTURE_3D,Gt,xt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xt,Ct,Q.data)):e.texImage3D(i.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,Xt,Ct,Q.data);else if(y.isFramebufferTexture){if(ae)if(Kt)e.texStorage2D(i.TEXTURE_2D,Gt,xt,Q.width,Q.height);else{let st=Q.width,P=Q.height;for(let at=0;at<Gt;at++)e.texImage2D(i.TEXTURE_2D,at,xt,st,P,0,Xt,Ct,null),st>>=1,P>>=1}}else if(Ft.length>0&&Zt){Kt&&ae&&e.texStorage2D(i.TEXTURE_2D,Gt,xt,Ft[0].width,Ft[0].height);for(let st=0,P=Ft.length;st<P;st++)ft=Ft[st],Kt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,Xt,Ct,ft):e.texImage2D(i.TEXTURE_2D,st,xt,Xt,Ct,ft);y.generateMipmaps=!1}else Kt?(ae&&e.texStorage2D(i.TEXTURE_2D,Gt,xt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,Ct,Q)):e.texImage2D(i.TEXTURE_2D,0,xt,Xt,Ct,Q);x(y,Zt)&&v(et),mt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function vt(b,y,G){if(y.image.length!==6)return;const et=J(b,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const nt=n.get(tt);if(tt.version!==nt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const mt=$t.getPrimaries($t.workingColorSpace),ct=y.colorSpace===Qe?null:$t.getPrimaries(y.colorSpace),dt=y.colorSpace===Qe||mt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Et=y.isCompressedTexture||y.image[0].isCompressedTexture,zt=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let st=0;st<6;st++)!Et&&!zt?Q[st]=_(y.image[st],!1,!0,r.maxCubemapSize):Q[st]=zt?y.image[st].image:y.image[st],Q[st]=Bt(y,Q[st]);const Zt=Q[0],Xt=p(Zt)||a,Ct=s.convert(y.format,y.colorSpace),xt=s.convert(y.type),ft=S(y.internalFormat,Ct,xt,y.colorSpace),Ft=a&&y.isVideoTexture!==!0,Kt=nt.__version===void 0||et===!0;let ae=R(y,Zt,Xt);W(i.TEXTURE_CUBE_MAP,y,Xt);let Gt;if(Et){Ft&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ae,ft,Zt.width,Zt.height);for(let st=0;st<6;st++){Gt=Q[st].mipmaps;for(let P=0;P<Gt.length;P++){const at=Gt[P];y.format!==ln?Ct!==null?Ft?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,at.width,at.height,Ct,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,ft,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,at.width,at.height,Ct,xt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,ft,at.width,at.height,0,Ct,xt,at.data)}}}else{Gt=y.mipmaps,Ft&&Kt&&(Gt.length>0&&ae++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ae,ft,Q[0].width,Q[0].height));for(let st=0;st<6;st++)if(zt){Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Q[st].width,Q[st].height,Ct,xt,Q[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ft,Q[st].width,Q[st].height,0,Ct,xt,Q[st].data);for(let P=0;P<Gt.length;P++){const lt=Gt[P].image[st].image;Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,lt.width,lt.height,Ct,xt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,ft,lt.width,lt.height,0,Ct,xt,lt.data)}}else{Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ct,xt,Q[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ft,Ct,xt,Q[st]);for(let P=0;P<Gt.length;P++){const at=Gt[P];Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,Ct,xt,at.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,ft,Ct,xt,at.image[st])}}}x(y,Xt)&&v(i.TEXTURE_CUBE_MAP),nt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function _t(b,y,G,et,tt,nt){const mt=s.convert(G.format,G.colorSpace),ct=s.convert(G.type),dt=S(G.internalFormat,mt,ct,G.colorSpace);if(!n.get(y).__hasExternalTextures){const zt=Math.max(1,y.width>>nt),Q=Math.max(1,y.height>>nt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,nt,dt,zt,Q,y.depth,0,mt,ct,null):e.texImage2D(tt,nt,dt,zt,Q,0,mt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),pt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,tt,n.get(G).__webglTexture,0,Pt(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,tt,n.get(G).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(b,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let et=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||pt(y)){const tt=y.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Gn?et=i.DEPTH_COMPONENT32F:tt.type===Hn&&(et=i.DEPTH_COMPONENT24));const nt=Pt(y);pt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,et,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,et,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const et=Pt(y);G&&pt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,y.width,y.height):pt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const et=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let tt=0;tt<et.length;tt++){const nt=et[tt],mt=s.convert(nt.format,nt.colorSpace),ct=s.convert(nt.type),dt=S(nt.internalFormat,mt,ct,nt.colorSpace),Et=Pt(y);G&&pt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,y.width,y.height):pt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,dt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,dt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);const et=n.get(y.depthTexture).__webglTexture,tt=Pt(y);if(y.depthTexture.format===oi)pt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===Bi)pt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function bt(b){const y=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Nt(y.__webglFramebuffer,b)}else if(G){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]=i.createRenderbuffer(),Dt(y.__webglDepthbuffer[et],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Dt(y.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(b,y,G){const et=n.get(b);y!==void 0&&_t(et.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&bt(b)}function z(b){const y=b.texture,G=n.get(b),et=n.get(y);b.addEventListener("dispose",U),b.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=y.version,o.memory.textures++);const tt=b.isWebGLCubeRenderTarget===!0,nt=b.isWebGLMultipleRenderTargets===!0,mt=p(b)||a;if(tt){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let dt=0;dt<y.mipmaps.length;dt++)G.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else G.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)G.__webglFramebuffer[ct]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(nt)if(r.drawBuffers){const ct=b.texture;for(let dt=0,Et=ct.length;dt<Et;dt++){const zt=n.get(ct[dt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&pt(b)===!1){const ct=nt?y:[y];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<ct.length;dt++){const Et=ct[dt];G.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const zt=s.convert(Et.format,Et.colorSpace),Q=s.convert(Et.type),Zt=S(Et.internalFormat,zt,Q,Et.colorSpace,b.isXRRenderTarget===!0),Xt=Pt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Zt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(G.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),W(i.TEXTURE_CUBE_MAP,y,mt);for(let ct=0;ct<6;ct++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)_t(G.__webglFramebuffer[ct][dt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else _t(G.__webglFramebuffer[ct],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);x(y,mt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ct=b.texture;for(let dt=0,Et=ct.length;dt<Et;dt++){const zt=ct[dt],Q=n.get(zt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),W(i.TEXTURE_2D,zt,mt),_t(G.__webglFramebuffer,b,zt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),x(zt,mt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,et.__webglTexture),W(ct,y,mt),a&&y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)_t(G.__webglFramebuffer[dt],b,y,i.COLOR_ATTACHMENT0,ct,dt);else _t(G.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,ct,0);x(y,mt)&&v(ct),e.unbindTexture()}b.depthBuffer&&bt(b)}function Re(b){const y=p(b)||a,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0,tt=G.length;et<tt;et++){const nt=G[et];if(x(nt,y)){const mt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(nt).__webglTexture;e.bindTexture(mt,ct),v(mt),e.unbindTexture()}}}function St(b){if(a&&b.samples>0&&pt(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,et=b.height;let tt=i.COLOR_BUFFER_BIT;const nt=[],mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(b),dt=b.isWebGLMultipleRenderTargets===!0;if(dt)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){nt.push(i.COLOR_ATTACHMENT0+Et),b.depthBuffer&&nt.push(mt);const zt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(zt===!1&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[mt])),dt){const Q=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,G,et,0,0,G,et,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]);const zt=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Pt(b){return Math.min(r.maxSamples,b.samples)}function pt(b){const y=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Bt(b,y){const G=b.colorSpace,et=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===to||G!==Dn&&G!==Qe&&($t.getTransfer(G)===ie?a===!1?t.has("EXT_sRGB")===!0&&et===ln?(b.format=to,b.minFilter=Ze,b.generateMipmaps=!1):y=Al.sRGBToLinear(y):(et!==ln||tt!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=C,this.resetTextureUnits=K,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=jt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=pt}function cm(i,t,e){const n=e.isWebGL2;function r(s,o=Qe){let a;const l=$t.getTransfer(o);if(s===Wn)return i.UNSIGNED_BYTE;if(s===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(s===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Wc)return i.BYTE;if(s===Xc)return i.SHORT;if(s===fo)return i.UNSIGNED_SHORT;if(s===gl)return i.INT;if(s===Hn)return i.UNSIGNED_INT;if(s===Gn)return i.FLOAT;if(s===rr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qc)return i.ALPHA;if(s===ln)return i.RGBA;if(s===Yc)return i.LUMINANCE;if(s===jc)return i.LUMINANCE_ALPHA;if(s===oi)return i.DEPTH_COMPONENT;if(s===Bi)return i.DEPTH_STENCIL;if(s===to)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Kc)return i.RED;if(s===xl)return i.RED_INTEGER;if(s===Zc)return i.RG;if(s===Ml)return i.RG_INTEGER;if(s===Sl)return i.RGBA_INTEGER;if(s===hs||s===ds||s===fs||s===ps)if(l===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ds)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oo||s===Bo||s===zo||s===Ho)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Go||s===Vo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Go)return l===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ko||s===Wo||s===Xo||s===qo||s===Yo||s===jo||s===Ko||s===Zo||s===$o||s===Jo||s===Qo||s===ta||s===ea||s===na)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ko)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ko)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$o)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ta)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ea)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===na)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ms||s===ia||s===ra)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ms)return l===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ia)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$c||s===sa||s===oa||s===aa)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===ms)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===oa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===aa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===si?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class um extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class dm extends Gi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,d=null;const x=[],v=[],S=new qt;let R=null;const T=new $e;T.layers.enable(1),T.viewport=new Se;const A=new $e;A.layers.enable(2),A.viewport=new Se;const U=[T,A],M=new um;M.layers.enable(1),M.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=x[W];return J===void 0&&(J=new Hs,x[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=x[W];return J===void 0&&(J=new Hs,x[W]=J),J.getGripSpace()},this.getHand=function(W){let J=x[W];return J===void 0&&(J=new Hs,x[W]=J),J.getHandSpace()};function B(W){const J=v.indexOf(W.inputSource);if(J===-1)return;const ut=x[J];ut!==void 0&&(ut.update(W.inputSource,W.frame,c||o),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",C);for(let W=0;W<x.length;W++){const J=v[W];J!==null&&(v[W]=null,x[W].disconnect(J))}w=null,F=null,t.setRenderTarget(p),m=null,f=null,u=null,r=null,d=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new ci(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,ut=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=_.stencil?Bi:oi,ut=_.stencil?si:Hn);const _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(_t),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new ci(f.textureWidth,f.textureHeight,{format:ln,type:Wn,depthTexture:new Bl(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Dt=t.properties.get(d);Dt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(W){for(let J=0;J<W.removed.length;J++){const ut=W.removed[J],vt=v.indexOf(ut);vt>=0&&(v[vt]=null,x[vt].disconnect(ut))}for(let J=0;J<W.added.length;J++){const ut=W.added[J];let vt=v.indexOf(ut);if(vt===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=v.length){v.push(ut),vt=Dt;break}else if(v[Dt]===null){v[Dt]=ut,vt=Dt;break}if(vt===-1)break}const _t=x[vt];_t&&_t.connect(ut)}}const D=new L,O=new L;function X(W,J,ut){D.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(ut.matrixWorld);const vt=D.distanceTo(O),_t=J.projectionMatrix.elements,Dt=ut.projectionMatrix.elements,Nt=_t[14]/(_t[10]-1),bt=_t[14]/(_t[10]+1),jt=(_t[9]+1)/_t[5],z=(_t[9]-1)/_t[5],Re=(_t[8]-1)/_t[0],St=(Dt[8]+1)/Dt[0],Pt=Nt*Re,pt=Nt*St,se=vt/(-Re+St),Bt=se*-Re;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Bt),W.translateZ(se),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const b=Nt+se,y=bt+se,G=Pt-Bt,et=pt+(vt-Bt),tt=jt*bt/y*b,nt=z*bt/y*b;W.projectionMatrix.makePerspective(G,et,tt,nt,b,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;M.near=A.near=T.near=W.near,M.far=A.far=T.far=W.far,(w!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far);const J=W.parent,ut=M.cameras;j(M,J);for(let vt=0;vt<ut.length;vt++)j(ut[vt],J);ut.length===2?X(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),Y(W,M,J)};function Y(W,J,ut){ut===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=eo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let Z=null;function it(W,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let vt=!1;ut.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let _t=0;_t<ut.length;_t++){const Dt=ut[_t];let Nt=null;if(m!==null)Nt=m.getViewport(Dt);else{const jt=u.getViewSubImage(f,Dt);Nt=jt.viewport,_t===0&&(t.setRenderTargetTextures(d,jt.colorTexture,f.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(d))}let bt=U[_t];bt===void 0&&(bt=new $e,bt.layers.enable(_t),bt.viewport=new Se,U[_t]=bt),bt.matrix.fromArray(Dt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Dt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),_t===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(bt)}}for(let ut=0;ut<x.length;ut++){const vt=v[ut],_t=x[ut];vt!==null&&_t!==void 0&&_t.update(vt,J,c||o)}Z&&Z(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const rt=new Fl;rt.setAnimationLoop(it),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}function fm(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Il(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,x,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,x,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===He&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===He&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,x,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=v*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===He&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const x=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pm(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(g(x),S=h(x),r[x.id]=S,x.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(x,R);const T=t.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function h(x){const v=u();x.__bindingPointIndex=v;const S=i.createBuffer(),R=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],S=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const U=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,w=U.length;M<w;M++){const F=U[M];if(m(F,T,M,R)===!0){const B=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let C=0;for(let D=0;D<K.length;D++){const O=K[D],X=_(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,B+C,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,C),C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,v,S,R){const T=x.value,A=v+"_"+S;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const U=R[A];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return R[A]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(x){const v=x.uniforms;let S=0;const R=16;for(let A=0,U=v.length;A<U;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,F=M.length;w<F;w++){const B=M[w],K=Array.isArray(B.value)?B.value:[B.value];for(let C=0,D=K.length;C<D;C++){const O=K[C],X=_(O),j=S%R;j!==0&&R-j<X.boundary&&(S+=R-j),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=X.storage}}}const T=S%R;return T>0&&(S+=R-T),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Wl{constructor(t={}){const{canvas:e=cu(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const v=this;let S=!1,R=0,T=0,A=null,U=-1,M=null;const w=new Se,F=new Se;let B=null;const K=new $(0);let C=0,D=e.width,O=e.height,X=1,j=null,Y=null;const Z=new Se(0,0,D,O),it=new Se(0,0,D,O);let rt=!1;const W=new _o;let J=!1,ut=!1,vt=null;const _t=new me,Dt=new qt,Nt=new L,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function jt(){return A===null?X:1}let z=n;function Re(E,I){for(let V=0;V<E.length;V++){const k=E[V],H=e.getContext(k,I);if(H!==null)return H}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",at,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),z=Re(I,E),z===null)throw Re(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let St,Pt,pt,se,Bt,b,y,G,et,tt,nt,mt,ct,dt,Et,zt,Q,Zt,Xt,Ct,xt,ft,Ft,Kt;function ae(){St=new Ef(z),Pt=new vf(z,St,t),St.init(Pt),ft=new cm(z,St,Pt),pt=new am(z,St,Pt),se=new Af(z),Bt=new Yp,b=new lm(z,St,pt,Bt,Pt,ft,se),y=new Mf(v),G=new wf(v),et=new Uu(z,Pt),Ft=new gf(z,St,et,Pt),tt=new Tf(z,et,se,Ft),nt=new Lf(z,tt,et,se),Xt=new Pf(z,Pt,b),zt=new xf(Bt),mt=new qp(v,y,G,St,Pt,Ft,zt),ct=new fm(v,Bt),dt=new Kp,Et=new em(St,Pt),Zt=new mf(v,y,G,pt,nt,f,l),Q=new om(v,nt,Pt),Kt=new pm(z,se,Pt,pt),Ct=new _f(z,St,se,Pt),xt=new bf(z,St,se,Pt),se.programs=mt.programs,v.capabilities=Pt,v.extensions=St,v.properties=Bt,v.renderLists=dt,v.shadowMap=Q,v.state=pt,v.info=se}ae();const Gt=new dm(v,z);this.xr=Gt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=St.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=St.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(D,O,!1))},this.getSize=function(E){return E.set(D,O)},this.setSize=function(E,I,V=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,O=I,e.width=Math.floor(E*X),e.height=Math.floor(I*X),V===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(D*X,O*X).floor()},this.setDrawingBufferSize=function(E,I,V){D=E,O=I,X=V,e.width=Math.floor(E*V),e.height=Math.floor(I*V),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,I,V,k){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,I,V,k),pt.viewport(w.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,I,V,k){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,I,V,k),pt.scissor(F.copy(it).multiplyScalar(X).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){pt.setScissorTest(rt=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(E=!0,I=!0,V=!0){let k=0;if(E){let H=!1;if(A!==null){const ht=A.texture.format;H=ht===Sl||ht===Ml||ht===xl}if(H){const ht=A.texture.type,gt=ht===Wn||ht===Hn||ht===fo||ht===si||ht===_l||ht===vl,wt=Zt.getClearColor(),Rt=Zt.getClearAlpha(),Ht=wt.r,Lt=wt.g,It=wt.b;gt?(m[0]=Ht,m[1]=Lt,m[2]=It,m[3]=Rt,z.clearBufferuiv(z.COLOR,0,m)):(g[0]=Ht,g[1]=Lt,g[2]=It,g[3]=Rt,z.clearBufferiv(z.COLOR,0,g))}else k|=z.COLOR_BUFFER_BIT}I&&(k|=z.DEPTH_BUFFER_BIT),V&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",at,!1),dt.dispose(),Et.dispose(),Bt.dispose(),y.dispose(),G.dispose(),nt.dispose(),Ft.dispose(),Kt.dispose(),mt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Ce),Gt.removeEventListener("sessionend",ne),vt&&(vt.dispose(),vt=null),Pe.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=se.autoReset,I=Q.enabled,V=Q.autoUpdate,k=Q.needsUpdate,H=Q.type;ae(),se.autoReset=E,Q.enabled=I,Q.autoUpdate=V,Q.needsUpdate=k,Q.type=H}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function lt(E){const I=E.target;I.removeEventListener("dispose",lt),At(I)}function At(E){yt(E),Bt.remove(E)}function yt(E){const I=Bt.get(E).programs;I!==void 0&&(I.forEach(function(V){mt.releaseProgram(V)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,V,k,H,ht){I===null&&(I=bt);const gt=H.isMesh&&H.matrixWorld.determinant()<0,wt=ac(E,I,V,k,H);pt.setMaterial(k,gt);let Rt=V.index,Ht=1;if(k.wireframe===!0){if(Rt=tt.getWireframeAttribute(V),Rt===void 0)return;Ht=2}const Lt=V.drawRange,It=V.attributes.position;let he=Lt.start*Ht,Ge=(Lt.start+Lt.count)*Ht;ht!==null&&(he=Math.max(he,ht.start*Ht),Ge=Math.min(Ge,(ht.start+ht.count)*Ht)),Rt!==null?(he=Math.max(he,0),Ge=Math.min(Ge,Rt.count)):It!=null&&(he=Math.max(he,0),Ge=Math.min(Ge,It.count));const xe=Ge-he;if(xe<0||xe===1/0)return;Ft.setup(H,k,wt,V,Rt);let xn,oe=Ct;if(Rt!==null&&(xn=et.get(Rt),oe=xt,oe.setIndex(xn)),H.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*jt()),oe.setMode(z.LINES)):oe.setMode(z.TRIANGLES);else if(H.isLine){let Vt=k.linewidth;Vt===void 0&&(Vt=1),pt.setLineWidth(Vt*jt()),H.isLineSegments?oe.setMode(z.LINES):H.isLineLoop?oe.setMode(z.LINE_LOOP):oe.setMode(z.LINE_STRIP)}else H.isPoints?oe.setMode(z.POINTS):H.isSprite&&oe.setMode(z.TRIANGLES);if(H.isBatchedMesh)oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)oe.renderInstances(he,xe,H.count);else if(V.isInstancedBufferGeometry){const Vt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,os=Math.min(V.instanceCount,Vt);oe.renderInstances(he,xe,os)}else oe.render(he,xe)};function te(E,I,V){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,cr(E,I,V),E.side=Ln,E.needsUpdate=!0,cr(E,I,V),E.side=on):cr(E,I,V)}this.compile=function(E,I,V=null){V===null&&(V=E),p=Et.get(V),p.init(),x.push(p),V.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==V&&E.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights);const k=new Set;return E.traverse(function(H){const ht=H.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const wt=ht[gt];te(wt,V,H),k.add(wt)}else te(ht,V,H),k.add(ht)}),x.pop(),p=null,k},this.compileAsync=function(E,I,V=null){const k=this.compile(E,I,V);return new Promise(H=>{function ht(){if(k.forEach(function(gt){Bt.get(gt).currentProgram.isReady()&&k.delete(gt)}),k.size===0){H(E);return}setTimeout(ht,10)}St.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ee=null;function ve(E){ee&&ee(E)}function Ce(){Pe.stop()}function ne(){Pe.start()}const Pe=new Fl;Pe.setAnimationLoop(ve),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(E){ee=E,Gt.setAnimationLoop(E),E===null?Pe.stop():Pe.start()},Gt.addEventListener("sessionstart",Ce),Gt.addEventListener("sessionend",ne),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(I),I=Gt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,A),p=Et.get(E,x.length),p.init(),x.push(p),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(_t),ut=this.localClippingEnabled,J=zt.init(this.clippingPlanes,ut),_=dt.get(E,d.length),_.init(),d.push(_),un(E,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,Y),this.info.render.frame++,J===!0&&zt.beginShadows();const V=p.state.shadowsArray;if(Q.render(V,E,I),J===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(_,E),p.setupLights(v._useLegacyLights),I.isArrayCamera){const k=I.cameras;for(let H=0,ht=k.length;H<ht;H++){const gt=k[H];To(_,E,gt,gt.viewport)}}else To(_,E,I);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,I),Ft.resetDefaultState(),U=-1,M=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function un(E,I,V,k){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){k&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const gt=nt.update(E),wt=E.material;wt.visible&&_.push(E,gt,wt,V,Nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const gt=nt.update(E),wt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Nt.copy(gt.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(wt)){const Rt=gt.groups;for(let Ht=0,Lt=Rt.length;Ht<Lt;Ht++){const It=Rt[Ht],he=wt[It.materialIndex];he&&he.visible&&_.push(E,gt,he,V,Nt.z,It)}}else wt.visible&&_.push(E,gt,wt,V,Nt.z,null)}}const ht=E.children;for(let gt=0,wt=ht.length;gt<wt;gt++)un(ht[gt],I,V,k)}function To(E,I,V,k){const H=E.opaque,ht=E.transmissive,gt=E.transparent;p.setupLightsView(V),J===!0&&zt.setGlobalState(v.clippingPlanes,V),ht.length>0&&oc(H,ht,I,V),k&&pt.viewport(w.copy(k)),H.length>0&&lr(H,I,V),ht.length>0&&lr(ht,I,V),gt.length>0&&lr(gt,I,V),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function oc(E,I,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ht=Pt.isWebGL2;vt===null&&(vt=new ci(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?rr:Wn,minFilter:ir,samples:ht?4:0})),v.getDrawingBufferSize(Dt),ht?vt.setSize(Dt.x,Dt.y):vt.setSize(no(Dt.x),no(Dt.y));const gt=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(K),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const wt=v.toneMapping;v.toneMapping=kn,lr(E,V,k),b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt);let Rt=!1;for(let Ht=0,Lt=I.length;Ht<Lt;Ht++){const It=I[Ht],he=It.object,Ge=It.geometry,xe=It.material,xn=It.group;if(xe.side===on&&he.layers.test(k.layers)){const oe=xe.side;xe.side=He,xe.needsUpdate=!0,bo(he,V,k,Ge,xe,xn),xe.side=oe,xe.needsUpdate=!0,Rt=!0}}Rt===!0&&(b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt)),v.setRenderTarget(gt),v.setClearColor(K,C),v.toneMapping=wt}function lr(E,I,V){const k=I.isScene===!0?I.overrideMaterial:null;for(let H=0,ht=E.length;H<ht;H++){const gt=E[H],wt=gt.object,Rt=gt.geometry,Ht=k===null?gt.material:k,Lt=gt.group;wt.layers.test(V.layers)&&bo(wt,I,V,Rt,Ht,Lt)}}function bo(E,I,V,k,H,ht){E.onBeforeRender(v,I,V,k,H,ht),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,I,V,k,E,ht),H.transparent===!0&&H.side===on&&H.forceSinglePass===!1?(H.side=He,H.needsUpdate=!0,v.renderBufferDirect(V,I,k,H,E,ht),H.side=Ln,H.needsUpdate=!0,v.renderBufferDirect(V,I,k,H,E,ht),H.side=on):v.renderBufferDirect(V,I,k,H,E,ht),E.onAfterRender(v,I,V,k,H,ht)}function cr(E,I,V){I.isScene!==!0&&(I=bt);const k=Bt.get(E),H=p.state.lights,ht=p.state.shadowsArray,gt=H.state.version,wt=mt.getParameters(E,H.state,ht,I,V),Rt=mt.getProgramCacheKey(wt);let Ht=k.programs;k.environment=E.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(E.isMeshStandardMaterial?G:y).get(E.envMap||k.environment),Ht===void 0&&(E.addEventListener("dispose",lt),Ht=new Map,k.programs=Ht);let Lt=Ht.get(Rt);if(Lt!==void 0){if(k.currentProgram===Lt&&k.lightsStateVersion===gt)return Ro(E,wt),Lt}else wt.uniforms=mt.getUniforms(E),E.onBuild(V,wt,v),E.onBeforeCompile(wt,v),Lt=mt.acquireProgram(wt,Rt),Ht.set(Rt,Lt),k.uniforms=wt.uniforms;const It=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=zt.uniform),Ro(E,wt),k.needsLights=cc(E),k.lightsStateVersion=gt,k.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),k.currentProgram=Lt,k.uniformsList=null,Lt}function Ao(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Br.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Ro(E,I){const V=Bt.get(E);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function ac(E,I,V,k,H){I.isScene!==!0&&(I=bt),b.resetTextureUnits();const ht=I.fog,gt=k.isMeshStandardMaterial?I.environment:null,wt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Dn,Rt=(k.isMeshStandardMaterial?G:y).get(k.envMap||gt),Ht=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Lt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),It=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Ge=!!V.morphAttributes.color;let xe=kn;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xe=v.toneMapping);const xn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=xn!==void 0?xn.length:0,Vt=Bt.get(k),os=p.state.lights;if(J===!0&&(ut===!0||E!==M)){const qe=E===M&&k.id===U;zt.setState(k,E,qe)}let le=!1;k.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==os.state.version||Vt.outputColorSpace!==wt||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||Vt.envMap!==Rt||k.fog===!0&&Vt.fog!==ht||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==zt.numPlanes||Vt.numIntersection!==zt.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Lt||Vt.morphTargets!==It||Vt.morphNormals!==he||Vt.morphColors!==Ge||Vt.toneMapping!==xe||Pt.isWebGL2===!0&&Vt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Vt.__version=k.version);let Xn=Vt.currentProgram;le===!0&&(Xn=cr(k,I,H));let Co=!1,Xi=!1,as=!1;const Te=Xn.getUniforms(),qn=Vt.uniforms;if(pt.useProgram(Xn.program)&&(Co=!0,Xi=!0,as=!0),k.id!==U&&(U=k.id,Xi=!0),Co||M!==E){Te.setValue(z,"projectionMatrix",E.projectionMatrix),Te.setValue(z,"viewMatrix",E.matrixWorldInverse);const qe=Te.map.cameraPosition;qe!==void 0&&qe.setValue(z,Nt.setFromMatrixPosition(E.matrixWorld)),Pt.logarithmicDepthBuffer&&Te.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Te.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Xi=!0,as=!0)}if(H.isSkinnedMesh){Te.setOptional(z,H,"bindMatrix"),Te.setOptional(z,H,"bindMatrixInverse");const qe=H.skeleton;qe&&(Pt.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Te.setValue(z,"boneTexture",qe.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Te.setOptional(z,H,"batchingTexture"),Te.setValue(z,"batchingTexture",H._matricesTexture,b));const ls=V.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0&&Pt.isWebGL2===!0)&&Xt.update(H,V,Xn),(Xi||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,Te.setValue(z,"receiveShadow",H.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(qn.envMap.value=Rt,qn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Xi&&(Te.setValue(z,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&lc(qn,as),ht&&k.fog===!0&&ct.refreshFogUniforms(qn,ht),ct.refreshMaterialUniforms(qn,k,X,O,vt),Br.upload(z,Ao(Vt),qn,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Br.upload(z,Ao(Vt),qn,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Te.setValue(z,"center",H.center),Te.setValue(z,"modelViewMatrix",H.modelViewMatrix),Te.setValue(z,"normalMatrix",H.normalMatrix),Te.setValue(z,"modelMatrix",H.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const qe=k.uniformsGroups;for(let cs=0,uc=qe.length;cs<uc;cs++)if(Pt.isWebGL2){const Po=qe[cs];Kt.update(Po,Xn),Kt.bind(Po,Xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xn}function lc(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function cc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,I,V){Bt.get(E.texture).__webglTexture=I,Bt.get(E.depthTexture).__webglTexture=V;const k=Bt.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const V=Bt.get(E);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,V=0){A=E,R=I,T=V;let k=!0,H=null,ht=!1,gt=!1;if(E){const Rt=Bt.get(E);Rt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(z.FRAMEBUFFER,null),k=!1):Rt.__webglFramebuffer===void 0?b.setupRenderTarget(E):Rt.__hasExternalTextures&&b.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(gt=!0);const Lt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[I])?H=Lt[I][V]:H=Lt[I],ht=!0):Pt.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?H=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?H=Lt[V]:H=Lt,w.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else w.copy(Z).multiplyScalar(X).floor(),F.copy(it).multiplyScalar(X).floor(),B=rt;if(pt.bindFramebuffer(z.FRAMEBUFFER,H)&&Pt.drawBuffers&&k&&pt.drawBuffers(E,H),pt.viewport(w),pt.scissor(F),pt.setScissorTest(B),ht){const Rt=Bt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,Rt.__webglTexture,V)}else if(gt){const Rt=Bt.get(E.texture),Ht=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,Ht)}U=-1},this.readRenderTargetPixels=function(E,I,V,k,H,ht,gt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){pt.bindFramebuffer(z.FRAMEBUFFER,wt);try{const Rt=E.texture,Ht=Rt.format,Lt=Rt.type;if(Ht!==ln&&ft.convert(Ht)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Lt===rr&&(St.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Lt!==Wn&&ft.convert(Lt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===Gn&&(Pt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-k&&V>=0&&V<=E.height-H&&z.readPixels(I,V,k,H,ft.convert(Ht),ft.convert(Lt),ht)}finally{const Rt=A!==null?Bt.get(A).__webglFramebuffer:null;pt.bindFramebuffer(z.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(E,I,V=0){const k=Math.pow(2,-V),H=Math.floor(I.image.width*k),ht=Math.floor(I.image.height*k);b.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,E.x,E.y,H,ht),pt.unbindTexture()},this.copyTextureToTexture=function(E,I,V,k=0){const H=I.image.width,ht=I.image.height,gt=ft.convert(V.format),wt=ft.convert(V.type);b.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,E.x,E.y,H,ht,gt,wt,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,gt,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,k,E.x,E.y,gt,wt,I.image),k===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,I,V,k,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=E.max.x-E.min.x+1,gt=E.max.y-E.min.y+1,wt=E.max.z-E.min.z+1,Rt=ft.convert(k.format),Ht=ft.convert(k.type);let Lt;if(k.isData3DTexture)b.setTexture3D(k,0),Lt=z.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)b.setTexture2DArray(k,0),Lt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const It=z.getParameter(z.UNPACK_ROW_LENGTH),he=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ge=z.getParameter(z.UNPACK_SKIP_PIXELS),xe=z.getParameter(z.UNPACK_SKIP_ROWS),xn=z.getParameter(z.UNPACK_SKIP_IMAGES),oe=V.isCompressedTexture?V.mipmaps[H]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(Lt,H,I.x,I.y,I.z,ht,gt,wt,Rt,Ht,oe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Lt,H,I.x,I.y,I.z,ht,gt,wt,Rt,oe.data)):z.texSubImage3D(Lt,H,I.x,I.y,I.z,ht,gt,wt,Rt,Ht,oe),z.pixelStorei(z.UNPACK_ROW_LENGTH,It),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,xe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,xn),H===0&&k.generateMipmaps&&z.generateMipmap(Lt),pt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,pt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===po?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===$r?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?ai:wl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ai?we:Dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class mm extends Wl{}mm.prototype.isWebGL1Renderer=!0;class xo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $(t),this.near=e,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gm extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class _m extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Za=new me,ro=new mo,Dr=new Jr,Ir=new L;class vm extends ye{constructor(t=new Ne,e=new _m){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Dr.radius+=s,t.ray.intersectsSphere(Dr)===!1)return;Za.copy(r).invert(),ro.copy(t.ray).applyMatrix4(Za);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Ir.fromBufferAttribute(u,p),$a(Ir,p,l,r,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Ir.fromBufferAttribute(u,g),$a(Ir,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $a(i,t,e,n,r,s,o){const a=ro.distanceSqToPoint(i);if(a<e){const l=new L;ro.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Qt extends Ne{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(m,2));function x(){const S=new L,R=new L;let T=0;const A=(e-t)/n;for(let U=0;U<=s;U++){const M=[],w=U/s,F=w*(e-t)+t;for(let B=0;B<=r;B++){const K=B/r,C=K*l+a,D=Math.sin(C),O=Math.cos(C);R.x=F*D,R.y=-w*n+p,R.z=F*O,u.push(R.x,R.y,R.z),S.set(D,A,O).normalize(),f.push(S.x,S.y,S.z),m.push(K,1-w),M.push(g++)}_.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){const w=_[M][U],F=_[M+1][U],B=_[M+1][U+1],K=_[M][U+1];h.push(w,F,K),h.push(F,B,K),T+=6}c.addGroup(d,T,0),d+=T}function v(S){const R=g,T=new qt,A=new L;let U=0;const M=S===!0?t:e,w=S===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const F=g;for(let B=0;B<=r;B++){const C=B/r*l+a,D=Math.cos(C),O=Math.sin(C);A.x=M*O,A.y=p*w,A.z=M*D,u.push(A.x,A.y,A.z),f.push(0,w,0),T.x=D*.5+.5,T.y=O*.5*w+.5,m.push(T.x,T.y),g++}for(let B=0;B<r;B++){const K=R+B,C=F+B;S===!0?h.push(C,C+1,K):h.push(C+1,C,K),U+=3}c.addGroup(d,U,S===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li extends Qt{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mo extends Ne{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new L,S=new L,R=new L;for(let T=0;T<e.length;T+=3)m(e[T+0],v),m(e[T+1],S),m(e[T+2],R),l(v,S,R,x)}function l(x,v,S,R){const T=R+1,A=[];for(let U=0;U<=T;U++){A[U]=[];const M=x.clone().lerp(S,U/T),w=v.clone().lerp(S,U/T),F=T-U;for(let B=0;B<=F;B++)B===0&&U===T?A[U][B]=M:A[U][B]=M.clone().lerp(w,B/F)}for(let U=0;U<T;U++)for(let M=0;M<2*(T-U)-1;M++){const w=Math.floor(M/2);M%2===0?(f(A[U][w+1]),f(A[U+1][w]),f(A[U][w])):(f(A[U][w+1]),f(A[U+1][w+1]),f(A[U+1][w]))}}function c(x){const v=new L;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const x=new L;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=p(x)/2/Math.PI+.5,R=d(x)/Math.PI+.5;o.push(S,1-R)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],R=o[x+4],T=Math.max(v,S,R),A=Math.min(v,S,R);T>.9&&A<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function m(x,v){const S=x*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const x=new L,v=new L,S=new L,R=new L,T=new qt,A=new qt,U=new qt;for(let M=0,w=0;M<s.length;M+=9,w+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),T.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),R.copy(x).add(v).add(S).divideScalar(3);const F=p(R);_(T,w+0,x,F),_(A,w+2,v,F),_(U,w+4,S,F)}}function _(x,v,S,R){R<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.vertices,t.indices,t.radius,t.details)}}class es extends Mo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new es(t.radius,t.detail)}}class So extends Ne{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/r,m=new L,g=new qt;for(let _=0;_<=r;_++){for(let p=0;p<=n;p++){const d=s+p/n*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<r;_++){const p=_*(n+1);for(let d=0;d<n;d++){const x=d+p,v=x,S=x+n+1,R=x+n+2,T=x+1;a.push(v,S,T),a.push(S,R,T)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class re extends Ne{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const x=[],v=d/n;let S=0;d===0&&o===0?S=.5/e:d===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(r+T*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+S,1-v),x.push(c++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const v=h[d][x+1],S=h[d][x],R=h[d+1][x],T=h[d+1][x+1];(d!==0||o>0)&&m.push(v,S,T),(d!==n-1||l<Math.PI)&&m.push(S,R,T)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ns extends Ne{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const _=g/r*s,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,d=(r+1)*(m-1)+g,x=(r+1)*m+g;o.push(_,p,x),o.push(p,d,x)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ce extends Vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xm extends ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xl extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Gs=new me,Ja=new L,Qa=new L;class Mm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ja),Qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qa),e.updateMatrixWorld(),Gs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sm extends Mm{constructor(){super(new Ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yo extends Xl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ym extends Xl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wm{constructor(t,e,n=0,r=1/0){this.ray=new mo(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return so(t,this,n,e),n.sort(tl),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)so(t[r],this,n,e);return n.sort(tl),n}}function tl(i,t){return i.distance-t.distance}function so(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)so(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function N(i,t,e=0){let n=e+i*374761393+t*668265263;return n=(n^n>>13)*1274126177,(n^n>>16)/2147483648}function wo(i,t,e=0){const n=Math.floor(i),r=Math.floor(t),s=i-n,o=t-r,a=s*s*(3-2*s),l=o*o*(3-2*o),c=N(n,r,e),h=N(n+1,r,e),u=N(n,r+1,e),f=N(n+1,r+1,e),m=c*(1-a)+h*a,g=u*(1-a)+f*a;return m*(1-l)+g*l}function Li(i,t,e=4,n=0){let r=0,s=1,o=1,a=0;for(let l=0;l<e;l++)r+=s*wo(i*o,t*o,n+l*100),a+=s,s*=.5,o*=2;return r/a}function Wi(i){let t=i|0;return function(){return t=t*1664525+1013904223|0,(t>>>0)/4294967296}}function Em(i,t,e=4,n=0){let r=0,s=1,o=1,a=0;for(let l=0;l<e;l++){let c=1-Math.abs(wo(i*o,t*o,n+l*100));c=c*c,r+=s*c,a+=s,s*=.5,o*=2}return r/a}const Je=120,ii=1.2,ql=18;function ze(i,t,e){const n=i*.025,r=t*.025;let s=Li(n,r,5,e);const o=Em(n*.5+50,r*.5+50,4,e+200),a=bm(.45,.7,s);s=s*(1-a)+(s+o*.3)*a;const l=wo(n*.15+100,r*.15+100,e+300);return l>.65&&(s=Math.max(s,l*.8)),s*ql-2}function Tm(i,t=0,e=0){const n=[],r=Math.round(Je/ii)+1,s=t*Je,o=e*Je;for(let a=0;a<r;a++){const l=[],c=o+a*ii-Je/2;for(let h=0;h<r;h++){const u=s+h*ii-Je/2;l.push(ze(u,c,i))}n.push(l)}return n}function bm(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Pn(i,t,e){const n=i*.01,r=t*.01,s=Li(n+30,r+30,3,e+500),o=Li(n+60,r+60,3,e+600);if(Li(n+90,r+90,3,e+700)>.62&&o>.35&&s>.35)return"ruins";if(o<.25)return"snow";if(s<.25)return"desert";if(s>.55&&o>.45)return"forest";const l=Li(n+120,r+120,2,e+800);return o<.35&&l>.5?"snow":s<.35&&l<.5?"desert":"grassland"}function Am(i,t,e=0,n=0){const r=i.length,s=i[0].length,o=[],a=[],l=[],c=[],h=e*Je,u=n*Je,f={grassland:[.45,.7,.35],forest:[.3,.6,.25],desert:[.8,.7,.4],snow:[.9,.92,.95],ruins:[.55,.53,.48]},m={grassland:[.55,.8,.4],forest:[.4,.7,.3],desert:[.85,.75,.45],snow:[.95,.96,1],ruins:[.6,.58,.52]};for(let v=0;v<r;v++)for(let S=0;S<s;S++){const R=h-Je/2+S*ii,T=u-Je/2+v*ii,A=i[v][S];o.push(R,A,T);const U=Pn(R,T,t);let M=f[U];const w=m[U],F=(A+2)/ql;if(F>.6?M=M.map((K,C)=>K+(w[C]-K)*(F-.6)*2):F<.15&&(M=M.map(K=>K*.7)),U==="ruins"){const K=Li(R*.03,T*.03,2,t+800);K<.35?M=M.map(C=>C*.65):K<.45&&(M=M.map(C=>C*.8))}const B=N(R*.1,T*.1,t+999)*.06-.03;a.push(M[0]+B,M[1]+B,M[2]+B),c.push(S/s,v/r)}for(let v=0;v<r-1;v++)for(let S=0;S<s-1;S++){const R=v*s+S,T=v*s+S+1,A=(v+1)*s+S,U=(v+1)*s+S+1;l.push(R,T,A),l.push(T,U,A)}const g=[],_=.1;for(let v=0;v<r;v++)for(let S=0;S<s;S++){const R=h-Je/2+S*ii,T=u-Je/2+v*ii,A=ze(R-_,T,t),U=ze(R+_,T,t),M=ze(R,T-_,t),w=ze(R,T+_,t),F=(U-A)/(2*_),B=(w-M)/(2*_),K=1/Math.sqrt(F*F+1+B*B);g.push(-F*K,K,-B*K)}const p=new Ne;p.setAttribute("position",new Jt(o,3)),p.setAttribute("color",new Jt(a,3)),p.setAttribute("uv",new Jt(c,2)),p.setAttribute("normal",new Jt(g,3)),p.setIndex(l);const d=new de({uniforms:{uColor:{value:new $(.5,.7,.4)},uShadowColor:{value:new $(.5,.48,.4)},uHighlightColor:{value:new $(.7,.9,.6)},uRimPower:{value:2},uRimColor:{value:new $(.7,.85,.6)},uAmbientLight:{value:new $(.35,.35,.4)},uMainLightDir:{value:new L(.5,.8,.3).normalize()},uMainLightColor:{value:new $(1,.9,.8)},uUseHeightColor:{value:!0},uLowColor:{value:new $(.35,.5,.3)},uHighColor:{value:new $(.7,.8,.6)}},vertexShader:`
      attribute vec3 color;
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying float vHeight;
      void main() {
        vColor = color;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        vHeight = position.y;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uShadowColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform vec3 uAmbientLight;
      uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor;

      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying float vHeight;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        vec3 lightDir = normalize(uMainLightDir);

        float NdotL = dot(normal, lightDir);
        float lightBand = smoothstep(0.1, 0.45, NdotL);

        vec3 base = vColor;
        vec3 shadowed = base * uShadowColor;
        vec3 lit = base;

        vec3 ambient = base * uAmbientLight;
        vec3 diffuse = mix(shadowed, lit, lightBand);
        diffuse = mix(diffuse, lit * 1.15, smoothstep(0.6, 1.0, NdotL) * 0.25);

        vec3 finalColor = ambient + diffuse * uMainLightColor;

        // Rim light
        float rim = 1.0 - max(0.0, dot(normal, viewDir));
        rim = pow(rim, uRimPower);
        finalColor += uRimColor * rim * 0.4;

        // Fog
        float depth = length(vViewPosition);
        float fog = smoothstep(30.0, 80.0, depth);
        finalColor = mix(finalColor, vec3(0.55, 0.65, 0.7), fog * 0.3);

        finalColor = pow(finalColor, vec3(0.88));
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,side:on}),x=new q(p,d);return x.receiveShadow=!0,x.frustumCulled=!0,x.matrixAutoUpdate=!1,x.updateMatrix(),x}function ui(){return Je}function We(i,t,e){return ze(i,t,e)}const Vs={ambient:new $(.4,.4,.45),lightDir:new L(.5,.8,.3).normalize(),lightColor:new $(1,.95,.85)};function Tn(i,t=!1){const e=new $(i);return new de({uniforms:{uColor:{value:e},uShadowColor:{value:e.clone().multiplyScalar(.4)},uRimColor:{value:e.clone().multiplyScalar(1.5)},uRimPower:{value:t?2:5},uAmbientLight:{value:Vs.ambient},uMainLightDir:{value:Vs.lightDir},uMainLightColor:{value:Vs.lightColor},uEmissive:{value:t?.3:0}},vertexShader:`
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uShadowColor; uniform vec3 uRimColor;
      uniform float uRimPower; uniform vec3 uAmbientLight; uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor; uniform float uEmissive;
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal); vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.5;
        final += uColor * uEmissive;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `})}const In=[{id:"sword",name:"Sword",icon:"🗡️",damage:12,speed:1.2,range:1.8,type:"melee",color:8960989,desc:"Balanced steel blade",startup:.15,active:.2,recovery:.25,postureDmg:8},{id:"greatsword",name:"Greatsword",icon:"⚔️",damage:25,speed:.6,range:2.5,type:"melee",color:13404228,desc:"Slow but devastating",startup:.35,active:.3,recovery:.45,postureDmg:20},{id:"polearm",name:"Polearm",icon:"🔱",damage:15,speed:1,range:3,type:"melee",color:8965256,desc:"Long reach",startup:.2,active:.25,recovery:.3,postureDmg:12},{id:"bow",name:"Bow",icon:"🏹",damage:18,speed:.9,range:15,type:"ranged",color:14531430,desc:"Precise ranged attacks",startup:.25,active:.05,recovery:.3,postureDmg:5},{id:"catalyst",name:"Catalyst",icon:"🔮",damage:20,speed:.8,range:12,type:"magic",color:12290286,desc:"Arcane projectiles",startup:.3,active:.1,recovery:.35,postureDmg:10},{id:"dagger",name:"Dagger",icon:"🗡",damage:8,speed:1.8,range:1.2,type:"melee",color:11184810,desc:"Lightning fast strikes",startup:.08,active:.12,recovery:.15,postureDmg:5}];function Rm(i,t=null){const e=In.find(s=>s.id===i)||In[0],n=new pe,r=Tn(e.color,e.type==="magic");switch(i){case"sword":{const s=new q(new Mt(.04,.35,.015),r);s.position.y=.2,s.castShadow=!0,n.add(s);const o=new q(new Mt(.1,.02,.04),Tn(8939076));o.position.y=.02,n.add(o);const a=new q(new Qt(.015,.02,.06,5),Tn(5583650));a.position.y=-.04,n.add(a);break}case"greatsword":{const s=new q(new Mt(.06,.6,.02),r);s.position.y=.35,s.castShadow=!0,n.add(s);const o=new q(new Mt(.18,.03,.06),Tn(8939076));o.position.y=.04,n.add(o);const a=new q(new Qt(.025,.03,.1,5),Tn(5583650));a.position.y=-.07,n.add(a);break}case"polearm":{const s=new q(new Qt(.015,.02,.6,5),Tn(6702114));s.castShadow=!0,n.add(s);const o=new q(new Mt(.03,.12,.02),r);o.position.y=.35,o.castShadow=!0,n.add(o);break}case"bow":{const s=Tn(8934690),o=new q(new ns(.25,.015,6,12),s);o.rotation.x=Math.PI/2,o.scale.set(1,1,.08),o.castShadow=!0,n.add(o);const a=new q(new Qt(.003,.003,.4,3),Tn(13421772));a.position.z=.12,a.rotation.x=Math.PI/2,n.add(a);break}case"catalyst":{const s=new q(new re(.08,8,8),r);s.castShadow=!0,n.add(s);const o=new de({uniforms:{uColor:{value:new $(e.color)},uTime:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){vN=normalize(normalMatrix*normal);vec4 m=modelViewMatrix*vec4(position,1.0);vV=-m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uColor;uniform float uTime;varying vec3 vN;varying vec3 vV;void main(){float r=1.0-max(0.0,dot(normalize(vN),normalize(vV)));r=pow(r,3.0);float p=0.7+0.3*sin(uTime*2.0);gl_FragColor=vec4(uColor*r*0.8*p,r*0.4);}",transparent:!0,blending:mn}),a=new q(new re(.12,8,8),o);n.add(a),n.userData.glowMat=o;break}case"dagger":{const s=new q(new Mt(.025,.2,.01),r);s.position.y=.12,s.castShadow=!0,n.add(s);const o=new q(new Qt(.01,.015,.04,5),Tn(5583650));o.position.y=-.04,n.add(o);break}}return n.userData.weaponDef=e,n}function el(i,t,e,n){const r=new de({uniforms:{uColor:{value:new $(e)},uTime:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){vN=normalize(normalMatrix*normal);vec4 m=modelViewMatrix*vec4(position,1.0);vV=-m.xyz;gl_Position=projectionMatrix*m;}",fragmentShader:"uniform vec3 uColor;uniform float uTime;varying vec3 vN;varying vec3 vV;void main(){float r=1.0-max(0.0,dot(normalize(vN),normalize(vV)));r=pow(r,4.0);float p=0.8+0.2*sin(uTime*5.0);gl_FragColor=vec4(uColor*r*p*2.0,r*0.8);}",transparent:!0,blending:mn}),s=new q(new re(.06,6,6),r);s.position.copy(i);const o=new L().copy(t).sub(i),a=15;return o.normalize(),s.userData={velocity:o.multiplyScalar(a),damage:n,lifetime:3,age:0,mat:r},s}function Cm(i,t,e=0,n=0){const r=[],s=ui(),o=2.5,a=Um(),l=Nm(),c=e*s,h=n*s;for(let u=-s/2+1;u<s/2-1;u+=o)for(let f=-s/2+1;f<s/2-1;f+=o){const m=c+f,g=h+u;if(N(m*.1,g*.1,i+777)>.55)continue;const p=ze(m,g,i);if(p<-.5||p>12)continue;const d=Pn(m,g,i),x=N(m*.07,g*.07,i+888);if(d==="forest"){if(x<.4){const T=ao(m,p,g,i,d,a);t.add(T),r.push(T)}else if(x<.45){const T=Ur(m,p,g,i);t.add(T),r.push(T)}if(N(m*.17,g*.17,i+3333)<.35){const T=nl(m,p,g,i,"forest");t.add(T),r.push(T)}if(N(m*.19,g*.19,i+5555)<.01){const T=Fm(m,p,g,i);t.add(T),r.push(T)}if(N(m*.13,g*.13,i+9999)<.008){const T=ks(m,p,g,i);t.add(T),r.push(T)}}else if(d==="grassland"){if(x<.08){const S=ao(m,p,g,i,d,a);t.add(S),r.push(S)}else if(x<.12){const S=Ur(m,p,g,i);t.add(S),r.push(S)}if(N(m*.13,g*.13,i+9999)<.003){const S=ks(m,p,g,i);t.add(S),r.push(S)}}else if(d==="desert"){if(x<.02){const v=Dm(m,p,g,i);t.add(v),r.push(v)}else if(x<.2){const v=Ur(m,p,g,i);t.add(v),r.push(v)}}else if(d==="snow"){if(x<.25){const S=oo(m,p,g,i+m*100+g);t.add(S),r.push(S)}else if(x<.3){const S=Ur(m,p,g,i);t.add(S),r.push(S)}if(N(m*.17,g*.17,i+4444)<.4){const S=nl(m,p,g,i,"snow");t.add(S),r.push(S)}}else if(d==="ruins"){if(x<.1){const S=oo(m,p,g,i+m*100+g);t.add(S),r.push(S)}if(N(m*.13,g*.13,i+9999)<.015){const S=ks(m,p,g,i);t.add(S),r.push(S)}}}return e===0&&n===0&&Gm(i,t,r),Pm(i,t,r,a,e,n),Lm(i,t,r,e,n),Hm(i,t,r,l,e,n),N(e*.1,n*.1,i+44444)<.5&&Im(i,t,r,l,e,n),r}function Pm(i,t,e,n,r,s){const o=ui(),a=r*o,l=s*o,c=Wi(i+r*1e3+s*100+5e4);for(let h=0;h<20;h++){const u=a+(c()-.5)*o,f=l+(c()-.5)*o,m=ze(u,f,i);if(m<-.5||m>10)continue;const g=Pn(u,f,i);if(g!=="forest")continue;const _=ao(u,m,f,i+h*50+r*1e4+s*100,g,n);t.add(_),e.push(_)}}function oo(i,t,e,n){const r=new pe;r.position.set(i,t,e);const s=3+N(i,e,n+100)*3,o=.1+N(i,e,n+200)*.07,a=new ce({color:5914155,roughness:.9}),l=new q(new Qt(o,o*1.3,s,5),a);l.position.y=s/2,l.castShadow=!0,r.add(l),r.userData.trunkR=o*1.1;const c=new ce({color:2972199+Math.floor(N(i,e,n+300)*8208),roughness:.8,flatShading:!0}),h=3;for(let u=0;u<h;u++){const f=u/h,m=(1.2+N(i,e,n+400+u)*.5)*(1-f*.5),g=1.2+N(i,e,n+500+u)*.6,_=new q(new li(m,g,6),c);_.position.y=s+f*1.8-.1,_.castShadow=!0,r.add(_)}return r.rotation.y=N(i,e,n+600)*Math.PI*2,r}function Lm(i,t,e,n,r){const s=ui(),o=n*s,a=r*s,l=Wi(i+n*1e3+r*100+51e3),c=6+Math.floor(l()*4);for(let h=0;h<c;h++){const u=o+(l()-.5)*s,f=a+(l()-.5)*s,m=ze(u,f,i);if(m<-.5||m>12||Pn(u,f,i)!=="snow")continue;const _=10+Math.floor(l()*8);for(let p=0;p<_;p++){const d=u+(l()-.5)*6,x=f+(l()-.5)*6,v=ze(d,x,i);if(v<-.5||v>12)continue;const S=oo(d,v,x,i+h*100+p*10+n*1e4+r*100);t.add(S),e.push(S)}}}function Dm(i,t,e,n){const r=new pe;r.position.set(i,t,e);const s=2.4+N(i,e,n+100)*1.6,o=.06+N(i,e,n+200)*.03,a=new ce({color:9075290,roughness:.9}),l=new q(new Qt(o*.5,o,s,7),a);l.position.y=s/2,l.castShadow=!0,r.add(l),r.userData.trunkR=o*.75;const c=new ce({color:4880954+Math.floor(N(i,e,n+300)*12320),roughness:.7,flatShading:!0}),h=9+Math.floor(N(i,e,n+400)*4);for(let u=0;u<h;u++){const f=u/h*Math.PI*2+N(i,e,n+500+u)*.25,m=.6+N(i,e,n+600+u)*.3,g=.18+N(i,e,n+700+u)*.1,_=N(i,e,n+800+u)*.2,p=new ye;p.position.set(0,s+_,0),p.rotation.y=f;const d=.3+N(i,e,n+900+u)*.5,x=new q(new Mt(m,.015,g),c);x.position.x=m/2,x.rotation.z=-d,x.castShadow=!0,p.add(x),r.add(p)}return r.rotation.y=N(i,e,n+1e3)*Math.PI*2,r}function Im(i,t,e,n,r,s){const o=ui(),a=r*o,l=s*o,c=Wi(i+r*1e3+s*100+52e3);for(let h=0;h<10;h++){const u=a+(c()-.5)*o*.7,f=l+(c()-.5)*o*.7,m=ze(u,f,i);if(m<-.5||m>12||Pn(u,f,i)==="snow")continue;const _=Bm(u,m,f,i+h*100+r*1e3+s*100,n);t.add(_.house),e.push(_.house),_.chest&&(t.add(_.chest),e.push(_.chest));return}}function Um(){return new de({uniforms:{uColor:{value:new $(.35,.55,.25)},uShadowColor:{value:new $(.2,.35,.15)},uRimColor:{value:new $(.5,.8,.4)},uAmbientLight:{value:new $(.3,.3,.35)},uMainLightDir:{value:new L(.5,.8,.3).normalize()},uMainLightColor:{value:new $(1,.9,.8)},uRimPower:{value:3}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform vec3 uShadowColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform vec3 uAmbientLight;
      uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor;

      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        vec3 l = normalize(uMainLightDir);
        float ndotl = dot(n, l);
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 ambient = uColor * uAmbientLight;
        vec3 diffuse = mix(uColor * uShadowColor, uColor, band);
        vec3 final = ambient + diffuse * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.5;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `})}function Nm(){return new de({uniforms:{uColor:{value:new $(.65,.6,.55)},uShadowColor:{value:new $(.4,.37,.34)},uRimColor:{value:new $(.85,.8,.7)},uAmbientLight:{value:new $(.3,.3,.35)},uMainLightDir:{value:new L(.5,.8,.3).normalize()},uMainLightColor:{value:new $(1,.9,.8)},uRimPower:{value:4}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform vec3 uShadowColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform vec3 uAmbientLight;
      uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        vec3 l = normalize(uMainLightDir);
        float ndotl = dot(n, l);
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 ambient = uColor * uAmbientLight;
        vec3 diffuse = mix(uColor * uShadowColor, uColor, band);
        vec3 final = ambient + diffuse * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.3;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `})}function ao(i,t,e,n,r,s){const o=new pe;o.position.set(i,t,e);const a=2.4+N(i*2,e*2,n)*3,l=.24+N(i,e,n+50)*.16,c=new Qt(l*.7,l,a,6),h=new q(c,s.clone());h.material.uniforms.uColor.value.setHSL(.08,.3,.25+N(i,e,n+100)*.1),h.position.y=a/2,h.castShadow=!0,o.add(h),o.userData.trunkR=l*.85;const u=r==="forest"?new $(.2+N(i,e,n+200)*.2,.45+N(i,e,n+300)*.2,.15):new $(.3+N(i,e,n+200)*.2,.55+N(i,e,n+300)*.2,.2),f=s.clone();f.uniforms.uColor.value=u,f.uniforms.uShadowColor.value=u.clone().multiplyScalar(.5),f.uniforms.uRimColor.value=u.clone().multiplyScalar(1.4);const m=1.6+N(i*.5,e*.5,n+400)*1.2,g=a+.4;for(let _=0;_<5;_++){const p=_/5*Math.PI*2+N(i,e,n+500+_)*.5,d=m*(.3+N(i,e,n+600+_)*.4),x=m*(.5+N(i,e,n+700+_)*.3),v=new q(new re(x,7,7),f);v.position.set(Math.cos(p)*d,g+N(i,e,n+800+_)*.6-.3,Math.sin(p)*d),v.scale.y=.8+N(i,e,n+900+_)*.2,v.castShadow=!0,o.add(v)}return o.rotation.y=N(i,e,n+1e3)*Math.PI*2,o}function nl(i,t,e,n,r){const s=new pe;s.position.set(i,t,e);let o;r==="snow"?o=new $(2972199+Math.floor(N(i,e,n+200)*12320)):o=new $(.2+N(i,e,n+200)*.2,.45+N(i,e,n+300)*.2,.15);const a=new ce({color:o,roughness:.8,flatShading:!0}),l=3+Math.floor(N(i,e,n+400)*2);for(let c=0;c<l;c++){const h=.12+N(i,e,n+500+c)*.1,u=c/l*Math.PI*2+N(i,e,n+600+c)*.4,f=.08+N(i,e,n+700+c)*.1,m=new q(new re(h,7,7),a);m.position.set(Math.cos(u)*f,h*.6+N(i,e,n+800+c)*.1,Math.sin(u)*f),m.scale.y=.6+N(i,e,n+900+c)*.3,m.castShadow=!0,s.add(m)}return s}function Fm(i,t,e,n){const r=new pe;r.position.set(i,t,e);const s=new ce({color:14500932,roughness:.6,emissive:6689041,emissiveIntensity:.15}),o=new ce({color:15259076,roughness:.9}),a=new q(new Qt(.03,.04,.08,6),o);a.position.y=.04,r.add(a);const l=.06+N(i,e,n+100)*.03,c=new q(new re(l,8,8),s);return c.position.y=.08+l*.4,c.scale.y=.5,c.castShadow=!0,r.add(c),r.userData.type="mushroom",r.userData.healAmount=5+Math.floor(N(i,e,n+200)*6),r}function ks(i,t,e,n){const r=new pe;r.position.set(i,t,e);const s=1.5+N(i*2,e*2,n)*1.2,o=.1+N(i,e,n+50)*.06,a=new ce({color:7031867,roughness:.9}),l=new q(new Qt(o*.6,o,s,6),a);l.position.y=s/2,l.castShadow=!0,r.add(l),r.userData.trunkR=o*.8;const c=new $(.25+N(i,e,n+100)*.15,.5+N(i,e,n+200)*.2,.15),h=new ce({color:c,roughness:.8,flatShading:!0}),u=.9+N(i*.5,e*.5,n+300)*.5,f=s+.1;for(let x=0;x<4;x++){const v=x/4*Math.PI*2+N(i,e,n+400+x)*.5,S=u*(.3+N(i,e,n+500+x)*.4),R=u*(.4+N(i,e,n+600+x)*.3),T=new q(new re(R,6,6),h);T.position.set(Math.cos(v)*S,f+N(i,e,n+700+x)*.3-.15,Math.sin(v)*S),T.scale.y=.7+N(i,e,n+800+x)*.2,T.castShadow=!0,r.add(T)}const m=new ce({color:15610675,roughness:.3,emissive:8917265,emissiveIntensity:.2}),g=new ce({color:5914155,roughness:.9}),_=[],p=[],d=1+Math.floor(N(i,e,n+900)*2);for(let x=0;x<d;x++){const v=N(i,e,n+1e3+x)*Math.PI*2,S=.25+N(i,e,n+1100+x)*(u*.5),R=Math.cos(v)*S,T=Math.sin(v)*S,A=f-.4-N(i,e,n+1200+x)*.2,U=new q(new Qt(.008,.008,f-A+.05,3),g);U.position.set(R,(f+A)/2,T),r.add(U),p.push(U);const M=new q(new re(.055,8,8),m);M.position.set(R,A,T),M.castShadow=!0,r.add(M),_.push(M)}return r.userData.appleMeshes=_,r.userData.stalkMeshes=p,r.userData.appleCount=d,r.userData.type="appleTree",r.rotation.y=N(i,e,n+1300)*Math.PI*2,r}function Om(i,t,e,n,r){const s=new pe;s.position.set(i,t,e);const o=Math.floor(N(i,e,n+1100)*3),a=new $(.55+N(i,e,n+1200)*.15,.5+N(i,e,n+1300)*.15,.45+N(i,e,n+1400)*.1),l=r.clone();if(l.uniforms.uColor.value=a,l.uniforms.uShadowColor.value=a.clone().multiplyScalar(.6),o===0){const c=.6+N(i,e,n+1500)*.8,h=new q(new Qt(.1,.14,c,7),l);h.position.y=c/2,h.castShadow=!0,s.add(h);const u=new q(new Qt(.2,.25,.08,7),l);u.position.y=.04,u.castShadow=!0,s.add(u);const f=new q(new Qt(.18,.14,.06,7),l);f.position.y=c+.03,f.castShadow=!0,s.add(f),s.rotation.z=(N(i,e,n+1550)-.5)*.06,s.rotation.x=(N(i,e,n+1551)-.5)*.06}else if(o===1){const c=.4+N(i,e,n+1600)*.3,h=.12,u=.12,f=new q(new Mt(h,c,u),l);f.position.set(-.3,c/2,0),f.castShadow=!0,s.add(f);const m=f.clone();m.position.set(.3,c/2,0),s.add(m);const g=new q(new Mt(.9,.1,.3),l);g.position.y=c+.05,g.castShadow=!0,s.add(g)}else{const c=.4+N(i,e,n+1700)*.4,h=new q(new Mt(.5,c,.12),l);h.position.y=c/2,h.rotation.z=(N(i,e,n+1800)-.5)*.12,h.castShadow=!0,s.add(h);const u=new q(new es(.04+N(i,e,n+1810)*.04),l);u.position.set((N(i,e,n+1820)-.5)*.3,.02,(N(i,e,n+1830)-.5)*.15),u.castShadow=!0,s.add(u)}return s.rotation.y=N(i,e,n+1900)*Math.PI*2,s}function Bm(i,t,e,n,r){const s=new pe;s.position.set(i,t,e);const o=1.6+N(i,e,n+5e3)*.8,a=1.4+N(i,e,n+5100)*.6,l=1+N(i,e,n+5200)*.5,c=new $(.5+N(i,e,n+5300)*.2,.45+N(i,e,n+5400)*.15,.4+N(i,e,n+5500)*.1),h=r.clone();h.uniforms.uColor.value=c,h.uniforms.uShadowColor.value=c.clone().multiplyScalar(.6);const u=r.clone(),f=new $(.4+N(i,e,n+5600)*.15,.25+N(i,e,n+5700)*.1,.15+N(i,e,n+5800)*.1);u.uniforms.uColor.value=f,u.uniforms.uShadowColor.value=f.clone().multiplyScalar(.5);const m=N(i,e,n+5900),g=[],_=(U,M,w,F)=>{g.push({cx:U,cz:M,hw:w,hd:F})},p=new q(new Mt(.12,l,a),h);p.position.set(-o/2,l/2,0),p.castShadow=!0,s.add(p),_(-o/2,0,.08,a/2);const d=new q(new Mt(.12,l,a),h);d.position.set(o/2,l/2,0),d.castShadow=!0,s.add(d),_(o/2,0,.08,a/2);const x=new q(new Mt(o,l,.12),h);x.position.set(0,l/2,-a/2),x.castShadow=!0,s.add(x),_(0,-a/2,o/2,.06),m<.4&&(x.position.y=l*.5,x.scale.y=.5+N(i,e,n+6e3)*.3);const v=.3,S=new q(new Mt(o/2-v,l,.12),h);S.position.set(-o/4-v/2,l/2,a/2),S.castShadow=!0,s.add(S),_(-o/4-v/2,a/2,(o/2-v)/2,.06);const R=new q(new Mt(o/2-v,l,.12),h);if(R.position.set(o/4+v/2,l/2,a/2),R.castShadow=!0,s.add(R),_(o/4+v/2,a/2,(o/2-v)/2,.06),m>.7){const U=2+Math.floor(N(i,e,n+6100)*4);for(let M=0;M<U;M++){const w=new q(new Mt(.04+N(i,e,n+6200+M)*.06,.02+N(i,e,n+6300+M)*.04,.04+N(i,e,n+6400+M)*.06),h);w.position.set((N(i,e,n+6500+M)-.5)*o*.6,.02+N(i,e,n+6600+M)*.05,(N(i,e,n+6700+M)-.5)*a*.6),w.rotation.set(N(i,e,n+6800+M)*.5,0,N(i,e,n+6900+M)*.5),w.castShadow=!0,s.add(w)}}const T=.15+N(i,e,n+7e3)*.1;for(let U=-1;U<=1;U+=2){const M=new q(new Mt(o*.6,.05,a*.6),u),w=l+T*o*.15*U;M.position.set(U*o*.15,w,0),M.rotation.z=U*T*.5,M.rotation.x=N(i,e,n+7100)*.1,M.castShadow=!0,s.add(M)}let A=null;if(N(i,e,n+7200)<.16){const U=new ce({color:13404228,roughness:.6,metalness:.3,flatShading:!0}),M=new ce({color:16768358,roughness:.2,metalness:.6});A=new pe,A.position.set(i+(N(i,e,n+7300)-.5)*.3,t,e+(N(i,e,n+7400)-.5)*.2);const w=new q(new Mt(.45,.16,.35),U);w.position.y=.08,w.castShadow=!0,A.add(w);const F=new q(new Mt(.43,.07,.33),U);F.position.y=.19,F.castShadow=!0,A.add(F);const B=new q(new Mt(.4,.025,.02),M);B.position.set(0,.14,.17),A.add(B),A.userData.type="chest";const K=Math.abs(n*12.9898+i*78.233+e*435.123)%1;let C;if(K<.15){const D=Math.abs(n*7.3+i*13.7+e*29.1)%In.length,O=In[Math.floor(D)];C={type:"weapon",id:O.id,label:"✦ "+O.name.toUpperCase()}}else if(K<.5){const D=5+Math.floor(Math.abs(n*3.7+i*91.5+e*62.3)%21);C={type:"coins",amount:D,label:"+"+D+"🪙"}}else C={type:"heal",amount:30,label:"+30 HP"};A.userData.loot=C}return s.userData.type="house",s.userData.walls=g,s.rotation.y=N(i,e,n+7500)*Math.PI*2,{house:s,chest:A}}function zm(i,t,e,n,r){const s=new pe;s.position.set(i,t,e);const o=Math.floor(N(i,e,n+1e4)*4),a=new $(.5+N(i,e,n+10100)*.15,.48+N(i,e,n+10200)*.12,.42+N(i,e,n+10300)*.1),l=r.clone();l.uniforms.uColor.value=a,l.uniforms.uShadowColor.value=a.clone().multiplyScalar(.55);const c=[],h=(u,f,m,g)=>c.push({cx:u,cz:f,hw:m,hd:g});if(o===0){const u=1.2+N(i,e,n+10400)*.8,f=1+N(i,e,n+10500)*.6,m=.8+N(i,e,n+10600)*.6,g=.25,_=new q(new Mt(u,m,.12),l);_.position.set(0,m/2,-f/2),_.castShadow=!0,s.add(_),h(0,-f/2,u/2,.06);const p=new q(new Mt(.12,m,f),l);p.position.set(-u/2,m/2,0),p.castShadow=!0,s.add(p),h(-u/2,0,.06,f/2);const d=new q(new Mt(.12,m,f),l);d.position.set(u/2,m/2,0),d.castShadow=!0,s.add(d),h(u/2,0,.06,f/2);const x=new q(new Mt(u/2-g,m,.12),l);x.position.set(-u/4-g/2,m/2,f/2),x.castShadow=!0,s.add(x),h(-u/4-g/2,f/2,(u/2-g)/2,.06);const v=new q(new Mt(u/2-g,m,.12),l);v.position.set(u/4+g/2,m/2,f/2),v.castShadow=!0,s.add(v),h(u/4+g/2,f/2,(u/2-g)/2,.06),N(i,e,n+10700)<.5&&(p.scale.y=.5+N(i,e,n+10800)*.3,p.position.y=m*p.scale.y/2),N(i,e,n+10900)<.4&&(d.scale.y=.4+N(i,e,n+11e3)*.3,d.position.y=m*d.scale.y/2)}else if(o===1){const u=2.4+N(i,e,n+11100)*1.2,f=1.8+N(i,e,n+11200)*1,m=1.2+N(i,e,n+11300)*.8,g=.3,_=new q(new Mt(u,m,.15),l);_.position.set(0,m/2,-f/2),_.castShadow=!0,s.add(_),h(0,-f/2,u/2,.075);const p=new q(new Mt(u/2-g,m,.15),l);p.position.set(-u/4-g/2,m/2,f/2),p.castShadow=!0,s.add(p),h(-u/4-g/2,f/2,(u/2-g)/2,.075);const d=new q(new Mt(u/2-g,m,.15),l);d.position.set(u/4+g/2,m/2,f/2),d.castShadow=!0,s.add(d),h(u/4+g/2,f/2,(u/2-g)/2,.075);const x=m*(.4+N(i,e,n+11400)*.4),v=new q(new Mt(.15,x,f),l);v.position.set(-u/2,x/2,0),v.castShadow=!0,s.add(v),h(-u/2,0,.075,f/2);const S=2+Math.floor(N(i,e,n+11500)*2);for(let R=0;R<S;R++){const T=m*(.6+N(i,e,n+11600+R)*.4),A=new q(new Qt(.08,.1,T,5),l);A.position.set(u/2,T/2,-f/2+f/(S+1)*(R+1)),A.castShadow=!0,s.add(A)}}else if(o===2){const u=.8+N(i,e,n+11700)*.4,f=.8+N(i,e,n+11800)*.4,m=1.8+N(i,e,n+11900)*1.2;for(let d=-1;d<=1;d+=2){const x=new q(new Mt(u,m,.12),l);x.position.set(0,m/2,d*f/2),x.castShadow=!0,s.add(x),h(0,d*f/2,u/2,.06)}const g=new q(new Mt(.12,m,f),l);g.position.set(-u/2,m/2,0),g.castShadow=!0,s.add(g),h(-u/2,0,.06,f/2);const _=new q(new Mt(.12,m*(.5+N(i,e,n+12e3)*.3),f),l);_.position.set(u/2,m*_.scale.y/2,0),_.castShadow=!0,s.add(_),h(u/2,0,.06,f/2);const p=new q(new Mt(u+.2,.08,f+.2),l);p.position.y=m,p.castShadow=!0,s.add(p)}else{const u=1.2+N(i,e,n+12100)*.8,f=1+N(i,e,n+12200)*.6;1+N(i,e,n+12300)*.6;const m=1.2+N(i,e,n+12400)*.8,g=.7+N(i,e,n+12500)*.5,_=.6+N(i,e,n+12600)*.5,p=.2,d=new q(new Mt(u,g,.12),l);d.position.set(u/4,g/2,-f/2),d.castShadow=!0,s.add(d),h(u/4,-f/2,u/2,.06);const x=new q(new Mt(u/2-p,g,.12),l);x.position.set(-u/8,g/2,f/2),x.castShadow=!0,s.add(x),h(-u/8,f/2,(u/2-p)/2,.06);const v=new q(new Mt(u/2-p,g,.12),l);v.position.set(u/2-p/4,g/2,f/2),v.castShadow=!0,s.add(v),h(u/2-p/4,f/2,(u/2-p)/2,.06);const S=new q(new Mt(.12,_,m),l);S.position.set(-u/2,_/2,m/4),S.castShadow=!0,s.add(S),h(-u/2,m/4,.06,m/2);const R=new q(new Mt(.12,_,m/2-p),l);R.position.set(-u/2,_/2,-m/8),R.castShadow=!0,s.add(R),h(-u/2,-m/8,.06,(m/2-p)/2)}return s.userData.type="cityBuilding",s.userData.walls=c,s.rotation.y=N(i,e,n+12700)*Math.PI*2,s}function Hm(i,t,e,n,r,s){const o=ui(),a=r*o,l=s*o,c=Wi(i+r*1e3+s*100+53e3);let h=!1;for(let p=0;p<20;p++){const d=a+(c()-.5)*o,x=l+(c()-.5)*o;if(Pn(d,x,i)==="ruins"){h=!0;break}}if(!h)return;const u=[],f=4,m=120+Math.floor(c()*90),g=o*.6;for(let p=0;p<m;p++){const d=a+(c()-.5)*g,x=l+(c()-.5)*g,v=ze(d,x,i);if(v<-.5||v>12||Pn(d,x,i)!=="ruins")continue;let S=!1;for(const T of u)if(Math.sqrt((d-T.x)**2+(x-T.z)**2)<f){S=!0;break}if(S)continue;const R=zm(d,v,x,i+p*100+r*1e3+s*100,n);t.add(R),e.push(R),u.push({x:d,z:x})}const _=80+Math.floor(c()*60);for(let p=0;p<_;p++){const d=a+(c()-.5)*g,x=l+(c()-.5)*g,v=ze(d,x,i);if(v<-.5||v>12||Pn(d,x,i)!=="ruins")continue;const S=Om(d,v,x,i+p*50+r*1e3+s*100,n);t.add(S),e.push(S)}}function Ur(i,t,e,n){const r=new pe;r.position.set(i,t,e);const s=new de({uniforms:{uColor:{value:new $(.5,.48,.45)},uShadowColor:{value:new $(.3,.28,.25)},uRimColor:{value:new $(.7,.68,.6)},uAmbientLight:{value:new $(.3,.3,.35)},uMainLightDir:{value:new L(.5,.8,.3).normalize()},uMainLightColor:{value:new $(1,.9,.8)},uRimPower:{value:5}},vertexShader:`
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uShadowColor; uniform vec3 uRimColor;
      uniform float uRimPower; uniform vec3 uAmbientLight; uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor; varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal); vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v)); rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.3;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `}),o=2+Math.floor(N(i,e,n+2e3)*3);for(let a=0;a<o;a++){const l=.15+N(i,e,n+2100+a)*.15,c=new es(l),h=new q(c,s);h.position.set((N(i,e,n+2200+a)-.5)*.5,l*.5+N(i,e,n+2300+a)*.1,(N(i,e,n+2400+a)-.5)*.5),h.rotation.set(N(i,e,n+2500+a)*6,N(i,e,n+2600+a)*6,N(i,e,n+2700+a)*6),h.castShadow=!0,r.add(h)}return r.userData.trunkR=.35,r}function Gm(i,t,e){const n=3+Math.floor(N(i,0,3e3)*3);for(let r=0;r<n;r++){const s=N(i,r,3100)*Math.PI*2,o=15+N(i,r,3200)*20,a=Math.cos(s)*o,l=Math.sin(s)*o,c=ze(a,l,i);if(c<0||c>8)continue;const h=Vm(a,c,l);t.add(h),e.push(h)}}function Vm(i,t,e,n){const r=new pe;r.position.set(i,t,e);const s=new de({uniforms:{uColor:{value:new $(.7,.65,.55)},uShadowColor:{value:new $(.4,.37,.3)},uRimColor:{value:new $(.9,.85,.7)},uAmbientLight:{value:new $(.35,.35,.4)},uMainLightDir:{value:new L(.5,.8,.3).normalize()},uMainLightColor:{value:new $(1,.9,.8)},uRimPower:{value:3}},vertexShader:`
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uShadowColor; uniform vec3 uRimColor;
      uniform float uRimPower; uniform vec3 uAmbientLight; uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor; varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal); vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v)); rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.4;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `}),o=new q(new Qt(2.4,3,.9,6),s);o.position.y=.45,o.castShadow=!0,r.add(o);for(let h=0;h<4;h++){const u=h/4*Math.PI*2,f=new q(new Qt(.24,.3,2.4,5),s);f.position.set(Math.cos(u)*1.5,1.65,Math.sin(u)*1.5),f.castShadow=!0,r.add(f)}const a=new q(new Qt(1.5,1.8,.45,6),s);a.position.y=2.85,a.castShadow=!0,r.add(a);const l=new de({uniforms:{uColor:{value:new $(.8,.6,1)},uTime:{value:0}},vertexShader:`
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor; uniform float uTime;
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        float pulse = 0.7 + 0.3 * sin(uTime * 2.0);
        float rim = 1.0 - max(0.0, dot(n, v));
        vec3 col = uColor * pulse + vec3(1.0) * pow(rim, 3.0) * 0.5;
        gl_FragColor = vec4(col, 0.9);
      }
    `,transparent:!0,blending:mn}),c=new q(new re(.36,8,8),l);return c.position.y=3.3,r.add(c),r.userData.orb=c,r.userData.glowMat=l,r.userData.trunkR=2.5,r}function km(i,t){for(const e of i)e.userData&&e.userData.glowMat&&(e.userData.glowMat.uniforms.uTime.value=t)}const Nr=16766144,il=16435380;function Di(i){return new ce({color:i,roughness:.4,metalness:0})}function Wm(){const i=new pe;i.position.set(0,0,0);const t=Di(Nr),e=Di(il),n={skin:Nr,skin2:il};i.userData._defaultColors=n;const r={},s=[];for(let p=-1;p<=1;p+=2){const d=new q(new Qt(.04,.055,.42,14),e);d.position.set(p*.08,.21,0),d.castShadow=!0,i.add(d),s.push(d)}r.legs=s;const o=new q(new Qt(.09,.18,.44,4),t);o.position.y=.64,o.scale.z=.55,o.castShadow=!0,i.add(o),i.userData.torso=o,r.body=o;const a=[];for(let p=-1;p<=1;p+=2){const d=new q(new li(.055,.08,8),t);d.position.set(p*.06,.77,.1),d.rotation.x=Math.PI/2,d.castShadow=!0,i.add(d),a.push(d)}r.breasts=a;const l=new q(new Qt(.04,.05,.06,10),Di(Nr));l.position.y=.88,l.castShadow=!0,i.add(l),r.neck=l;const c=new q(new re(.13,20,20),Di(Nr));c.position.y=1,c.scale.set(1,1.05,.88),c.castShadow=!0,i.add(c),i.userData.head=c,r.head=c;const h=[];for(let p=-1;p<=1;p+=2){const d=new q(new Qt(.022,.032,.28,10),e);d.position.set(p*.15,.73,.01),d.rotation.z=p*.26,d.rotation.x=-.06,d.castShadow=!0,i.add(d),h.push(d)}r.arms=h;const u=new ce({color:16746666,roughness:.5}),f=new q(new re(.15,20,20),u);f.position.set(0,1.07,-.04),f.scale.set(1.05,.85,.9),f.rotation.x=-.08,f.castShadow=!0,i.add(f),r.hairMain=f;const m=new Be({color:16777215}),g=new xm({color:4478327,roughness:.1,metalness:0,ior:1.4,transmission:.3});for(let p=-1;p<=1;p+=2){const d=new q(new re(.04,12,12),m);d.position.set(p*.055,1.02,.12),d.scale.set(1,.9,.18),i.add(d);const x=new q(new re(.025,10,10),g);x.position.set(p*.055,1.02,.13),x.scale.set(1,.9,.08),i.add(x);const v=new q(new re(.008,6,6),new Be({color:16777215}));v.position.set(p*.065,1.04,.135),v.scale.set(1,.9,.08),i.add(v)}for(let p=-1;p<=1;p+=2){const d=new q(new Mt(.035,.005,.01),new Be({color:6715272}));d.position.set(p*.055,1.04,.125),d.rotation.z=p*.08,i.add(d)}const _=new q(new ns(.015,.003,4,8),new Be({color:13404313}));return _.position.set(0,.96,.125),_.rotation.x=Math.PI/2,_.rotation.z=.08,_.scale.set(1,.35,1),i.add(_),i.userData.parts=r,i.userData.currentOutfit={dress:null,legwear:null,armwear:null,headwear:null},i}function lo(i,t,e){const n=i.userData.parts;if(!n)return;const r=new $(e);switch(t){case"dress":n.body&&(n.body.material=n.body.material.clone(),n.body.material.color.set(r)),n.breasts.forEach(s=>{s.material=s.material.clone(),s.material.color.set(r)});break;case"legwear":n.legs.forEach(s=>{s.material=s.material.clone(),s.material.color.set(r)});break;case"armwear":n.arms.forEach(s=>{s.material=s.material.clone(),s.material.color.set(r)});break;case"headwear":n.hairMain&&n.hairMain.material.color.set(r);break}}function Xm(i,t){const e=i.userData._defaultColors;if(e)switch(t){case"dress":lo(i,"dress",e.skin);break;case"legwear":parts.legs.forEach(n=>{n.material=Di(e.skin2)});break;case"armwear":parts.arms.forEach(n=>{n.material=Di(e.skin2)});break;case"headwear":lo(i,"headwear",16746666);break}}const Ut={red:13382451,orange:14513971,yellow:14531379,green:4500036,teal:3381657,blue:3368652,purple:8930474,pink:14509721,white:15658734,black:3355443,gray:10066329},Yr=[{id:"dress_red",slot:"dress",color:Ut.red,name:"Red Dress"},{id:"dress_orange",slot:"dress",color:Ut.orange,name:"Orange Dress"},{id:"dress_yellow",slot:"dress",color:Ut.yellow,name:"Yellow Dress"},{id:"dress_green",slot:"dress",color:Ut.green,name:"Green Dress"},{id:"dress_teal",slot:"dress",color:Ut.teal,name:"Teal Dress"},{id:"dress_blue",slot:"dress",color:Ut.blue,name:"Blue Dress"},{id:"dress_purple",slot:"dress",color:Ut.purple,name:"Purple Dress"},{id:"dress_pink",slot:"dress",color:Ut.pink,name:"Pink Dress"},{id:"dress_white",slot:"dress",color:Ut.white,name:"White Dress"},{id:"dress_black",slot:"dress",color:Ut.black,name:"Black Dress"},{id:"dress_gray",slot:"dress",color:Ut.gray,name:"Gray Dress"},{id:"legs_red",slot:"legwear",color:Ut.red,name:"Red Legwear"},{id:"legs_orange",slot:"legwear",color:Ut.orange,name:"Orange Legwear"},{id:"legs_yellow",slot:"legwear",color:Ut.yellow,name:"Yellow Legwear"},{id:"legs_green",slot:"legwear",color:Ut.green,name:"Green Legwear"},{id:"legs_teal",slot:"legwear",color:Ut.teal,name:"Teal Legwear"},{id:"legs_blue",slot:"legwear",color:Ut.blue,name:"Blue Legwear"},{id:"legs_purple",slot:"legwear",color:Ut.purple,name:"Purple Legwear"},{id:"legs_pink",slot:"legwear",color:Ut.pink,name:"Pink Legwear"},{id:"legs_white",slot:"legwear",color:Ut.white,name:"White Legwear"},{id:"legs_black",slot:"legwear",color:Ut.black,name:"Black Legwear"},{id:"arms_red",slot:"armwear",color:Ut.red,name:"Red Armwear"},{id:"arms_orange",slot:"armwear",color:Ut.orange,name:"Orange Armwear"},{id:"arms_yellow",slot:"armwear",color:Ut.yellow,name:"Yellow Armwear"},{id:"arms_green",slot:"armwear",color:Ut.green,name:"Green Armwear"},{id:"arms_teal",slot:"armwear",color:Ut.teal,name:"Teal Armwear"},{id:"arms_blue",slot:"armwear",color:Ut.blue,name:"Blue Armwear"},{id:"arms_purple",slot:"armwear",color:Ut.purple,name:"Purple Armwear"},{id:"arms_pink",slot:"armwear",color:Ut.pink,name:"Pink Armwear"},{id:"arms_white",slot:"armwear",color:Ut.white,name:"White Armwear"},{id:"arms_black",slot:"armwear",color:Ut.black,name:"Black Armwear"},{id:"hair_red",slot:"headwear",color:Ut.red,name:"Red Hair"},{id:"hair_orange",slot:"headwear",color:Ut.orange,name:"Orange Hair"},{id:"hair_yellow",slot:"headwear",color:Ut.yellow,name:"Yellow Hair"},{id:"hair_green",slot:"headwear",color:Ut.green,name:"Green Hair"},{id:"hair_teal",slot:"headwear",color:Ut.teal,name:"Teal Hair"},{id:"hair_blue",slot:"headwear",color:Ut.blue,name:"Blue Hair"},{id:"hair_purple",slot:"headwear",color:Ut.purple,name:"Purple Hair"},{id:"hair_pink",slot:"headwear",color:Ut.pink,name:"Pink Hair"},{id:"hair_white",slot:"headwear",color:Ut.white,name:"White Hair"},{id:"hair_black",slot:"headwear",color:Ut.black,name:"Black Hair"}];function hn(i){return Yr.find(t=>t.id===i)||null}new $(.35,.35,.4),new L(.5,.8,.3).normalize(),new $(1,.9,.8);const rl=[{id:"blob",name:"Blob",tier:0,bodyType:"sphere",legs:0,arms:0,baseHealth:20,baseAttack:5,baseSpeed:3,color:8965290,eyeSize:.12,eyeColor:3359846,scale:.3,isCute:!0,glowColor:8969727,glowIntensity:.2},{id:"sprout",name:"Sprout",tier:1,bodyType:"capsule",legs:2,arms:0,baseHealth:50,baseAttack:13,baseSpeed:2.7,color:8965290,eyeSize:.12,eyeColor:3359846,scale:.7,isCute:!0,glowColor:8969727,glowIntensity:.2},{id:"imp",name:"Imp",tier:2,bodyType:"humanoid",legs:2,arms:2,baseHealth:80,baseAttack:21,baseSpeed:2.4,color:8939076,eyeSize:.06,eyeColor:16746564,scale:1.1,isCute:!1,glowColor:0,glowIntensity:0},{id:"brute",name:"Brute",tier:3,bodyType:"humanoid",legs:2,arms:2,baseHealth:110,baseAttack:29,baseSpeed:2.1,color:4460834,eyeSize:.04,eyeColor:16720384,scale:1.5,isCute:!1,glowColor:16729088,glowIntensity:.6,hornLength:.26,teethSize:.065,spikes:5},{id:"titan",name:"Titan",tier:4,bodyType:"giant",legs:2,arms:2,baseHealth:140,baseAttack:37,baseSpeed:1.8,color:4460834,eyeSize:.04,eyeColor:16720384,scale:1.9,isCute:!1,glowColor:16729088,glowIntensity:.6,hornLength:.32,teethSize:.08,spikes:6}];function qm(i){return rl[i]||rl[Math.min(i,4)]}function Ym(i,t){const{tier:e,name:n,bodyType:r,legs:s,arms:o,color:a,eyeSize:l,eyeColor:c,scale:h,isCute:u,glowColor:f,glowIntensity:m}=i,g=i.hornLength||0,_=i.spikes||0,p=new pe,d=new ce({color:a,roughness:.5,metalness:.1,flatShading:!0,emissive:m>0?new $(f).multiplyScalar(.2):new $(0)}),x=new ce({color:8934724,roughness:.6,metalness:.1,flatShading:!0}),v=.25+e*.06,S=v/2;if(s>0)for(let C=-1;C<=1;C+=2){const D=new q(new Qt(.04+e*.015,.05+e*.02,v,6),x);D.position.set(C*.12,S,0),D.castShadow=!0,p.add(D),p.userData[`leg${C>0?"R":"L"}`]=D}const R=.35+e*.08;if(r==="sphere"||u){const C=new q(new re(.35+e*.04,8,8),d);C.position.y=S+v/2+.15,C.scale.y=.85,C.castShadow=!0,p.add(C),p.userData.bodyMesh=C}else{const C=.25+e*.08,D=new q(new Mt(C*1,R,C*.6),d);D.position.y=S+v/2+R/2,D.castShadow=!0,p.add(D),p.userData.bodyMesh=D;const O=.18+e*.04,X=new q(new re(O,8,8),x);if(X.position.y=S+v/2+R+O*.6,X.castShadow=!0,p.add(X),p.userData.headMesh=X,o>0){const j=.2+e*.06;for(let Y=-1;Y<=1;Y+=2){const Z=new q(new Qt(.03+e*.01,.04+e*.015,j,5),x);if(Z.position.set(Y*(C*.6),S+v/2+R*.7,0),Z.rotation.z=Y*.25,Z.castShadow=!0,p.add(Z),p.userData[`arm${Y>0?"R":"L"}`]=Z,e>=3){const it=new q(new li(.03,.05,4),x);it.position.set(Y*(C*.6),S+v/2+R*.7-j/2,0),it.rotation.z=Y*.5,p.add(it)}}}}const T=new Be({color:c}),A=new Be({color:0}),U=.35+e*.04,M=S+v/2+.15,w=.18+e*.04,F=S+v/2+R+w*.6,B=r==="sphere"||u?U*.9:w*.85;if(u)for(let C=-1;C<=1;C+=2){const D=new q(new re(l,8,8),T);D.position.set(C*.12,M+.05,B),D.scale.set(1,1.1,.3),p.add(D);const O=new q(new re(l*.5,6,6),A);O.position.set(C*.12,M+.05,B+.02),O.scale.set(1,1.1,.3),p.add(O);const X=new q(new re(l*.2,4,4),new Be({color:16777215}));X.position.set(C*.14,M+.07,B+.04),X.scale.set(1,1.1,.3),p.add(X)}else for(let C=-1;C<=1;C+=2){const D=new q(new re(l,6,6),T);if(D.position.set(C*.08,F,B),p.add(D),e>=3){const O=new q(new Mt(.08,.015,.02),new Be({color:2236962}));O.position.set(C*.08,F+.04,B),O.rotation.z=-C*.3,p.add(O)}}if(g>0){const C=new ce({color:2236962,roughness:.8});for(let D=-1;D<=1;D+=2){const O=new q(new li(.03,g,4),C),X=u?new L(D*.15,M+U*.85,U*.6):new L(D*.1,F+w*.65,w*.7);O.position.copy(X),O.rotation.z=D*.2,O.rotation.x=-.3,p.add(O)}}const K=S+v/2+R/2;if(_>0){const C=new ce({color:3351074,roughness:.8});for(let D=0;D<_*3;D++){const O=D/(_*3)*Math.PI*2,X=new q(new li(.025,.1+e*.03,4),C);X.position.set(Math.cos(O)*.4,K+Math.sin(D*2)*.15,Math.sin(O)*.4),X.rotation.x=-Math.atan2(X.position.x,X.position.z)+Math.PI/2,X.rotation.z=O,p.add(X)}}if(m>0){const C=new de({uniforms:{uColor:{value:new $(f)},uIntensity:{value:m},uTime:{value:0}},vertexShader:`
        varying vec3 vNormal; varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPos.xyz;
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform vec3 uColor; uniform float uIntensity; uniform float uTime;
        varying vec3 vNormal; varying vec3 vViewPosition;
        void main() {
          vec3 n = normalize(vNormal);
          vec3 v = normalize(vViewPosition);
          float rim = 1.0 - max(0.0, dot(n, v));
          rim = pow(rim, 3.0);
          float pulse = 0.7 + 0.3 * sin(uTime * 3.0);
          gl_FragColor = vec4(uColor * rim * uIntensity * pulse, rim * uIntensity * 0.6);
        }
      `,transparent:!0,blending:mn,side:Ln}),D=new q(new re(.4+e*.15,10,10),C);D.position.y=K,p.add(D),p.userData.glowMat=C,p.userData.aura=D}return p.scale.set(h,h,h),p.userData.baseScale=h,p}function jm(i,t){const e=qm(i),n=Ym(e);return n.userData.tier=i,n.userData.def=e,n.userData.health=e.baseHealth,n.userData.maxHealth=e.baseHealth,n.userData.attackPower=e.baseAttack,n.userData.speed=e.baseSpeed,n.userData.isBoss=i>=4,n.userData.name=e.name,n.userData.hitFlash=0,n}function $i(i,t,e,n){const r=i.userData;if(!r)return;const s=t,o=Math.sin(s*2)*.02;if(r.bodyMesh&&(r.bodyBaseY===void 0&&(r.bodyBaseY=r.bodyMesh.position.y),r.bodyMesh.position.y=r.bodyBaseY+o),r.glowMat&&(r.glowMat.uniforms.uTime.value=s),e){for(const a of["L","R"]){const l=r[`leg${a}`];l&&(l.rotation.x=Math.sin(s*8+(a==="L"?0:Math.PI))*.3)}r.armL&&r.armR&&(r.armL.rotation.x=Math.sin(s*8)*.2,r.armR.rotation.x=Math.sin(s*8+Math.PI)*.2)}if(r.hitFlash>0&&(r.hitFlash-=.05,r.bodyMesh)){const a=Math.max(0,r.hitFlash);r.bodyMesh.material.emissive.setHSL(0,1,a*.5),r.bodyMesh.material.emissiveIntensity=a}}class Km{constructor(t,e){this.scene=t,this.camera=e,this.projectiles=[],this.slashVFX=[],this.attackState=null,this.attackCooldown=0,this.comboCount=0,this.comboWindow=0}canAttack(){return!this.attackState&&this.attackCooldown<=0}playerAttack(t,e,n,r=0){if(!this.canAttack())return!1;const s=In.find(a=>a.id===e)||In[0];1/s.speed;const o=this.comboWindow>0?this.comboCount%3:0;return this.attackState={phase:"startup",timer:s.startup,activeTimer:s.active,recoveryTimer:s.recovery,def:s,levelBonus:r,combo:o,heroinePos:t.position.clone(),heroineQuat:t.quaternion.clone(),hits:new Set},this.attackCooldown=.1,this.spawnTelegraph(t,s),!0}update(t,e){if(this.comboWindow=Math.max(0,this.comboWindow-t),this.attackCooldown=Math.max(0,this.attackCooldown-t),this.attackState){const n=this.attackState;n.timer-=t,n.phase==="startup"&&n.timer<=0&&(n.phase="active",n.timer=n.activeTimer,this.executeHit(n,e,this.camera)),n.phase==="active"&&n.timer<=0&&(n.phase="recovery",n.timer=n.recoveryTimer),n.phase==="recovery"&&n.timer<=0&&(this.attackState=null,this.comboCount=(this.comboCount+1)%3,this.comboWindow=.4)}for(let n=this.projectiles.length-1;n>=0;n--){const r=this.projectiles[n];if(r.userData.age+=t,r.userData.mat.uniforms.uTime.value=r.userData.age,r.userData.age>r.userData.lifetime){this.scene.remove(r),this.projectiles.splice(n,1);continue}r.position.add(r.userData.velocity.clone().multiplyScalar(t));for(const s of e){if(!s.userData.alive)continue;if(r.position.distanceTo(s.position)<.8)return this.scene.remove(r),this.projectiles.splice(n,1),{monster:s,damage:r.userData.damage,projectile:!0}}}for(let n=this.slashVFX.length-1;n>=0;n--){const r=this.slashVFX[n];r.userData.age+=t,r.userData.mat.uniforms.uTime.value=r.userData.age/r.userData.lifetime,r.userData.age>r.userData.lifetime&&(this.scene.remove(r),this.slashVFX.splice(n,1))}return null}executeHit(t,e,n){const r=t.heroinePos.clone();r.y+=.8;const s=new L(0,0,-1);s.applyQuaternion(t.heroineQuat);const o=t.def;if(o.type==="melee"){for(const a of e){if(!a.userData.alive||t.hits.has(a))continue;const l=a.position.clone();l.y=0;const c=r.clone();if(c.y=0,c.distanceTo(l)<o.range){const u=l.clone().sub(c).normalize();if(s.dot(u)>.2){t.hits.add(a);const m=(o.damage+t.levelBonus)*(.85+Math.random()*.3);this.applyDamage(a,Math.round(m),o,r,l,n)}}}this.spawnSlashArc(r,s,o.color)}else o.type==="ranged"?this.rangedShot(t,e):o.type==="magic"&&this.magicBolt(t,e)}applyDamage(t,e,n,r,s,o){const a=t.userData.posture||0,l=t.userData.maxPosture||50;t.userData.posture=Math.min(l,a+n.postureDmg),t.userData.posture>=l&&(t.userData.posture=0,t.userData.staggerTimer=.8,t.userData.staggerDmgMult=1.5);const c=new L().copy(s).sub(r).normalize().multiplyScalar(2);t.position.x+=c.x,t.position.z+=c.z,this.spawnSlashEffect(r,s,n.color),this.hitstop=.06,this._onDamage&&this._onDamage(t,e)}rangedShot(t,e){const n=t.heroinePos.clone();n.y+=.8;const r=new L(0,0,-1);r.applyQuaternion(t.heroineQuat);let s=null,o=1/0;for(const c of e){if(!c.userData.alive)continue;const h=n.distanceTo(c.position);h<o&&(o=h,s=c)}const a=s?s.position.clone():n.clone().add(r.multiplyScalar(10)),l=el(n,a,t.def.color,t.def.damage+t.levelBonus);this.scene.add(l),this.projectiles.push(l)}magicBolt(t,e){for(let n=-1;n<=1;n++){const r=t.heroinePos.clone();r.y+=.8;const s=new L(0,0,-1);s.applyQuaternion(t.heroineQuat);const o=new L(1,0,0);o.applyQuaternion(t.heroineQuat);const a=o.multiplyScalar(n*.3),l=r.clone().add(s.multiplyScalar(10)).add(a),c=el(r,l,t.def.color,Math.round(t.def.damage*.7+t.levelBonus));this.scene.add(c),this.projectiles.push(c)}}spawnTelegraph(t,e){const n=new L(0,0,-1);n.applyQuaternion(t.quaternion);const r=new de({uniforms:{uColor:{value:new $(e.color)},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uTime;varying vec2 vUv;void main(){float a=1.0-smoothstep(0.0,1.0,uTime);float d=length(vUv-0.5)*2.0;float r=smoothstep(1.0,0.0,d);gl_FragColor=vec4(uColor,r*a*0.3);}",transparent:!0,blending:mn,depthWrite:!1}),s=new q(new Ni(e.range*1.5,.5),r),o=t.position.clone().add(n.multiplyScalar(e.range*.5));o.y+=.3,s.position.copy(o),s.lookAt(this.camera.position),s.userData={lifetime:e.startup,age:0,mat:r},this.scene.add(s),this.slashVFX.push(s)}spawnSlashEffect(t,e,n){const r=new de({uniforms:{uColor:{value:new $(n)},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uTime;varying vec2 vUv;void main(){float d=distance(vUv,vec2(0.5));float r=0.5-d;r=smoothstep(0.0,0.5,r);float a=r*(1.0-uTime);gl_FragColor=vec4(uColor,a*0.6);}",transparent:!0,blending:mn,depthWrite:!1}),s=new Ni(.3,.3),o=new q(s,r),a=t.clone().add(e).multiplyScalar(.5);o.position.copy(a),o.lookAt(this.camera.position),o.userData={lifetime:.3,age:0,mat:r},this.scene.add(o),this.slashVFX.push(o)}spawnSlashArc(t,e,n){const r=new de({uniforms:{uColor:{value:new $(n)},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uTime;varying vec2 vUv;void main(){float a=1.0-abs(vUv.x-0.5)*2.0;a=smoothstep(0.0,0.8,a);float r=1.0-distance(vUv,vec2(0.5,0.3))*2.0;float alpha=a*r*(1.0-uTime)*0.5;gl_FragColor=vec4(uColor,alpha);}",transparent:!0,blending:mn,depthWrite:!1}),s=new Ni(.8,.3),o=new q(s,r),a=t.clone().add(e.multiplyScalar(1.2));o.position.copy(a),o.position.y+=.3,o.lookAt(this.camera.position),o.userData={lifetime:.25,age:0,mat:r},this.scene.add(o),this.slashVFX.push(o)}}class Zm{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.currentMusic=null,this.musicPlaying=!1,this.unlocked=!1,this._melodyTimer=null,this._melodyNotes=[],this._melodyIdx=0,this._melodyTempo=0}unlock(){if(!this.unlocked)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.5,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.2,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.6,this.sfxGain.connect(this.masterGain),this.unlocked=!0}catch(t){console.warn("Audio unavailable",t)}}_ensure(){return this.unlocked||this.unlock(),!!this.ctx}playSfx(t){if(!this._ensure())return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();switch(e.connect(n),n.connect(this.sfxGain),t){case"hit":{e.type="sawtooth",e.frequency.setValueAtTime(200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.1),n.gain.setValueAtTime(.4,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),e.start(),e.stop(this.ctx.currentTime+.15);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.connect(s),s.connect(this.sfxGain),r.type="square",r.frequency.setValueAtTime(100,this.ctx.currentTime),s.gain.setValueAtTime(.2,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),r.start(),r.stop(this.ctx.currentTime+.1);break}case"pickup":{e.type="sine",e.frequency.setValueAtTime(600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1200,this.ctx.currentTime+.1),e.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.2),n.gain.setValueAtTime(.3,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),e.start(),e.stop(this.ctx.currentTime+.25);break}case"coin":{e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1600,this.ctx.currentTime+.15),n.gain.setValueAtTime(.25,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.2),e.start(),e.stop(this.ctx.currentTime+.2);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.connect(s),s.connect(this.sfxGain),r.type="sine",r.frequency.setValueAtTime(1200,this.ctx.currentTime+.1),r.frequency.exponentialRampToValueAtTime(2e3,this.ctx.currentTime+.2),s.gain.setValueAtTime(.2,this.ctx.currentTime+.1),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),r.start(this.ctx.currentTime+.1),r.stop(this.ctx.currentTime+.3);break}case"swing":{e.type="triangle",e.frequency.setValueAtTime(300,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.08),n.gain.setValueAtTime(.15,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12),e.start(),e.stop(this.ctx.currentTime+.12);break}case"step":{e.type="sine",e.frequency.setValueAtTime(80,this.ctx.currentTime),n.gain.setValueAtTime(.04,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.06),e.start(),e.stop(this.ctx.currentTime+.06);break}case"heal":{e.type="sine",e.frequency.setValueAtTime(400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.3),n.gain.setValueAtTime(.25,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.4),e.start(),e.stop(this.ctx.currentTime+.4);break}case"death":{e.type="sawtooth",e.frequency.setValueAtTime(400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.5),n.gain.setValueAtTime(.3,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.6),e.start(),e.stop(this.ctx.currentTime+.6);break}}}_playNote(t,e,n,r=.06){const s=this.ctx.createOscillator(),o=this.ctx.createGain();return s.type="sine",s.frequency.value=t,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(r,e+.04),o.gain.setValueAtTime(r,e+n-.08),o.gain.linearRampToValueAtTime(0,e+n),s.connect(o),o.connect(this.musicGain),s.start(e),s.stop(e+n+.01),{osc:s,gain:o}}startMusic(t){if(!this._ensure())return;this.stopMusic();const e={grassland:[262,294,330,392,440,524,588],forest:[220,247,277,330,370,440,494],desert:[185,208,233,277,311,370,416],snow:[294,330,392,440,524,588,660],ruins:[175,196,220,262,294,349,392]},n=e[t]||e.grassland,r=6+Math.floor(Math.random()*4),s=[];let o=-1;for(let c=0;c<r;c++){let h;do h=Math.floor(Math.random()*n.length);while(h===o);o=h;const u=.3+Math.random()*.4;s.push({idx:h,dur:u})}const a=.7+Math.random()*.3;let l=0;for(const c of s)l+=a;this.currentMusic={melody:s,scale:n,tempo:a,noteCount:r,totalDur:l},this.musicPlaying=!0,this._scheduleMelody()}_scheduleMelody(){if(!this.currentMusic||!this.musicPlaying)return;const{melody:t,scale:e,tempo:n}=this.currentMusic,r=this.ctx.currentTime;for(let o=0;o<t.length;o++){const a=r+o*n,l=t[o];this._playNote(e[l.idx],a,l.dur,.05)}const s=t.length*n;this._melodyTimer=setTimeout(()=>{const o=6+Math.floor(Math.random()*4),a=[];let l=-1;for(let c=0;c<o;c++){let h;do h=Math.floor(Math.random()*e.length);while(h===l);l=h;const u=.3+Math.random()*.4;a.push({idx:h,dur:u})}this.currentMusic&&(this.currentMusic.melody=a,this.currentMusic.noteCount=o),this._scheduleMelody()},s*1e3)}stopMusic(){this._melodyTimer&&(clearTimeout(this._melodyTimer),this._melodyTimer=null),this.currentMusic=null,this.musicPlaying=!1}}const Oe=new Zm,$m=40;let Yl="high",_n=null;function Jm(i){_n=i}let er=[],Qm=0;function t0(){for(let i=0;i<5;i++){const t=Qm++%$m;if(t>=er.length){const n=new re(.03,4,4),r=new Be({color:16777215,transparent:!0,opacity:0}),s=new q(n,r);s.visible=!1,er.push(s)}const e=er[t];if(!e.parent||!e.visible)return e}return null}function jl(i,t,e=6,n=2){if(_n)for(let r=0;r<e;r++){const s=t0();if(!s)break;s.position.copy(i),s.material.color.copy(t),s.material.opacity=.8,s.scale.setScalar(.5+Math.random()*.8),s.userData.vel=new L((Math.random()-.5)*n,Math.random()*n*.8,(Math.random()-.5)*n),s.userData.life=.3+Math.random()*.3,s.userData.age=0,s.visible=!0,_n.add(s)}}function Kl(i,t,e=.3){if(!_n||Yl==="low")return;const n=new q(new So(e*.6,e,12),new Be({color:t,transparent:!0,opacity:.6,side:on,depthWrite:!1}));n.position.copy(i),n.position.y+=.05,n.rotation.x=-Math.PI/2,n.userData={life:.3,age:0,scale:1},_n.add(n)}function Ai(i,t){if(!_n||Yl==="low")return;const e=new re(.015,4,4),n=new Be({color:t,transparent:!0,opacity:.9}),r=new q(e,n);r.position.copy(i),r.position.y+=.1,r.userData={life:.4,age:0,vel:new L((Math.random()-.5)*.5,.5+Math.random()*.5,(Math.random()-.5)*.5)},_n.add(r)}function e0(i){for(const e of er){if(!e.visible||!e.parent)continue;e.userData.age+=i;const n=e.userData.age/e.userData.life;if(n>=1){e.visible=!1,e.parent&&_n.remove(e);continue}e.position.add(e.userData.vel.clone().multiplyScalar(i)),e.material.opacity=.8*(1-n),e.scale.setScalar((.5+Math.random()*.8)*(1-n*.5)),e.userData.vel.y-=i*1.5}const t=[];_n.traverse(e=>{if(e.isMesh&&e.userData.life&&!er.includes(e)){e.userData.age+=i;const n=e.userData.age/e.userData.life;if(n>=1){t.push(e);return}if(e.userData.vel&&e.position.add(e.userData.vel.clone().multiplyScalar(i)),e.geometry.type==="RingGeometry"){const r=1+n*2;e.scale.setScalar(r),e.material.opacity=.6*(1-n)}else e.material.opacity=.9*(1-n)}});for(const e of t)_n.remove(e),e.geometry&&e.geometry.type!=="SphereGeometry"&&e.geometry.dispose(),e.material&&e.material.dispose()}const Ws={red:13382451,orange:14513971,yellow:14531379,green:4500036,teal:3381657,blue:3368652,purple:8930474,pink:14509721,white:15658734,black:3355443,gray:10066329},Xs={red:"#cc3333",orange:"#dd7733",yellow:"#ddbb33",green:"#44aa44",teal:"#339999",blue:"#3366cc",purple:"#8844aa",pink:"#dd6699",white:"#eeeeee",black:"#333333",gray:"#999999"};class n0{constructor(){this.hpBar=document.getElementById("hp-bar"),this.hpText=document.getElementById("hp-text"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaText=document.getElementById("stamina-text"),this.weaponHud=document.getElementById("weapon-hud"),this.damageNumbers=document.getElementById("damage-numbers"),this.bossHp=document.getElementById("boss-hp"),this.bossBar=document.getElementById("boss-bar"),this.interactHint=document.getElementById("interact-hint"),this.inventoryPanel=document.getElementById("inventory-panel"),this.loadBar=document.getElementById("load-bar"),this.loading=document.getElementById("loading"),this.coinText=document.getElementById("coin-text"),this.invGrid=document.getElementById("inv-grid"),this.dragGhost=document.getElementById("drag-ghost"),this.weaponSlots=[],this.activeWeaponIndex=0,this._inventory=new Array(20).fill(null),this._draggedSlot=-1,this._draggedEquip=null,this._equipped={headwear:null,dress:null,legwear:null,armwear:null},this._onEquip=null,this._bindDragDrop(),this._renderGrid(),this._renderEquip();const t=document.getElementById("inv-sort-btn"),e=document.getElementById("inv-drop-btn");t&&t.addEventListener("click",()=>{this.sort(),this._renderGrid()}),e&&e.addEventListener("click",()=>{this.dropSelected(),this._renderGrid()})}set onEquip(t){this._onEquip=t}getEquipped(t){return this._equipped[t]||null}equip(t,e){if(!t||!e)return;const n=hn(e);!n||n.slot!==t||(this._equipped[t]=e,this._renderEquip(),this._onEquip&&this._onEquip(t,e))}unequip(t){const e=this._equipped[t];return this._equipped[t]=null,this._renderEquip(),this._onEquip&&e&&this._onEquip(t,null),e}get inventory(){return this._inventory}setInventory(t){for(this._inventory=t.slice(0,20);this._inventory.length<20;)this._inventory.push(null);this._renderGrid()}addItem(t){const e=this._inventory.indexOf(null);return e===-1?!1:(this._inventory[e]={...t},this._renderGrid(),!0)}removeItem(t){if(t<0||t>=this._inventory.length)return null;const e=this._inventory[t];return this._inventory[t]=null,this._renderGrid(),e}hasItem(t){return this._inventory.some(e=>e&&e.id===t)}sort(){for(this._inventory=this._inventory.filter(Boolean).sort((t,e)=>(t.label||"").localeCompare(e.label||""));this._inventory.length<20;)this._inventory.push(null)}dropSelected(){for(let t=0;t<this._inventory.length;t++)if(this._inventory[t]){this._inventory[t]=null;break}}serialize(){return JSON.stringify(this._inventory.filter(Boolean))}deserialize(t){try{const e=JSON.parse(t);this._inventory=new Array(20).fill(null);for(let n=0;n<Math.min(e.length,20);n++)this._inventory[n]=e[n];this._renderGrid()}catch{}}_renderGrid(){if(this.invGrid){this.invGrid.innerHTML="";for(let t=0;t<this._inventory.length;t++){const e=document.createElement("div");e.className="inv-slot",e.dataset.index=t;const n=this._inventory[t];if(n){if(e.classList.add("has-item"),n.type==="clothing"){const r=document.createElement("span");r.style.display="inline-block",r.style.width="16px",r.style.height="16px",r.style.borderRadius="50%";const s=Yr.find(o=>o.id===n.id);r.style.background=s?Xs[Object.keys(Xs).find(o=>Ws[o]===s.color)||"white"]:"#888",r.title=n.label||n.id,e.appendChild(r)}else e.textContent=n.icon||"📦";if(n.qty&&n.qty>1){const r=document.createElement("span");r.className="qty",r.textContent=n.qty,e.appendChild(r)}}this.invGrid.appendChild(e)}}}_renderEquip(){const t=["headwear","dress","legwear","armwear"];for(const e of t){const n=document.getElementById("equip-"+e);if(!n)continue;const r=n.closest(".equip-slot"),s=this._equipped[e];if(s){const o=hn(s);if(o){const a=Object.keys(Ws).find(l=>Ws[l]===o.color)||"white";n.innerHTML=`<span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${Xs[a]};vertical-align:middle;margin-right:4px;"></span>${o.name}`,r&&r.classList.add("has-item");continue}}n.textContent="—",r&&r.classList.remove("has-item")}}_bindDragDrop(){let t=-1,e=null;const n=this.dragGhost,r=a=>{const l=a.target.closest(".inv-slot");if(l){t=parseInt(l.dataset.index);const h=this._inventory[t];if(!h){t=-1;return}e=null,l.classList.add("dragging");const u=h.type==="clothing"?hn(h.id):null;n.textContent=u?u.name:h.icon||"📦",n.style.display="block",n.style.left=a.clientX+"px",n.style.top=a.clientY+"px";return}const c=a.target.closest(".equip-slot");if(c){const h=c.dataset.equip,u=this._equipped[h];if(!u){e=null;return}e=h,t=-1,c.classList.add("dragging");const f=hn(u);n.textContent=f?f.name:u,n.style.display="block",n.style.left=a.clientX+"px",n.style.top=a.clientY+"px"}},s=a=>{if(t===-1&&!e)return;n.style.left=a.clientX+"px",n.style.top=a.clientY+"px",document.querySelectorAll(".drag-over").forEach(h=>h.classList.remove("drag-over"));const l=a.target.closest(".inv-slot");l&&parseInt(l.dataset.index)!==t&&l.classList.add("drag-over");const c=a.target.closest(".equip-slot");c&&c.dataset.equip!==e&&c.classList.add("drag-over")},o=a=>{if(t===-1&&!e)return;document.querySelectorAll(".dragging, .drag-over").forEach(h=>h.classList.remove("dragging","drag-over")),n.style.display="none";const l=a.target.closest(".equip-slot"),c=a.target.closest(".inv-slot");if(t!==-1){const h=this._inventory[t];if(l){const u=l.dataset.equip;if(h&&h.type==="clothing"){const f=hn(h.id);if(f&&f.slot===u){const m=this._equipped[u];this._equipped[u]=h.id,this._inventory[t]=m?{type:"clothing",id:m,label:(hn(m)||{}).name||m}:null,this._renderGrid(),this._renderEquip(),this._onEquip&&(this._onEquip(u,h.id),m&&this._onEquip(u,m)),this._onEquip&&this._onEquip(u,h.id)}}}else if(c){const u=parseInt(c.dataset.index);if(u!==t){const f=this._inventory[t];this._inventory[t]=this._inventory[u],this._inventory[u]=f,this._renderGrid()}}}else if(e){const h=this._equipped[e];if(!h){e=null;return}if(c){const u=parseInt(c.dataset.index),f=this._inventory[u];if(f&&f.type==="clothing"){const g=hn(f.id);if(g&&g.slot===e){this._equipped[e]=f.id,this._inventory[u]={type:"clothing",id:h,label:(hn(h)||{}).name||h},this._renderGrid(),this._renderEquip(),this._onEquip&&this._onEquip(e,f.id),e=null;return}}const m=this._inventory.indexOf(null);m!==-1&&(this._inventory[m]={type:"clothing",id:h,label:(hn(h)||{}).name||h},this._equipped[e]=null,this._renderGrid(),this._renderEquip(),this._onEquip&&this._onEquip(e,null))}else if(l){const u=l.dataset.equip;if(u!==e){const f=this._equipped[u];this._equipped[u]=h,this._equipped[e]=f,this._renderEquip(),this._onEquip&&(this._onEquip(u,h),f?this._onEquip(e,f):this._onEquip(e,null))}}}t=-1,e=null};document.addEventListener("pointerdown",r),document.addEventListener("pointermove",s),document.addEventListener("pointerup",o)}setLoadProgress(t){this.loadBar.style.width=t+"%",t>=100&&setTimeout(()=>this.loading.classList.add("hidden"),500)}updateHP(t,e){this.hpBar.style.width=t/e*100+"%",this.hpText.textContent=t}updateStamina(t,e){this.staminaBar.style.width=t/e*100+"%",this.staminaText.textContent=Math.round(t)}updateCoins(t){this.coinText.textContent=t}initWeaponSlots(t){this.weaponHud.innerHTML="",this.weaponSlots=[],t.forEach((e,n)=>{const r=document.createElement("div");r.className="weapon-slot"+(n===0?" active":""),r.dataset.index=n,r.style.position="relative";const s={sword:"🗡️",greatsword:"⚔️",polearm:"🔱",bow:"🏹",catalyst:"🔮",dagger:"🗡"};r.textContent=s[e]||"⚔";const o=document.createElement("span");o.className="key",o.textContent=n+1,r.appendChild(o),this.weaponHud.appendChild(r),this.weaponSlots.push(r)})}setActiveWeapon(t){this.weaponSlots.forEach((e,n)=>e.className="weapon-slot"+(n===t?" active":"")),this.activeWeaponIndex=t}setWeaponLevel(t,e){const n=this.weaponSlots[t];if(!n)return;let r=n.querySelector(".weapon-level");e>0?(r||(r=document.createElement("span"),r.className="weapon-level",n.appendChild(r)),r.textContent="+"+e):r&&r.remove()}showDamage(t,e,n,r=!1,s=!1){const o=document.createElement("div");o.className="dmg-num",o.textContent=n,o.style.left=t+"px",o.style.top=e+"px",o.style.color=s?"#44ff88":r?"#ffaa44":"#ffddbb",o.style.fontSize=r?"1.8rem":"1.4rem",this.damageNumbers.appendChild(o),setTimeout(()=>o.remove(),800)}showBossHP(t,e,n){this.bossHp.style.display="flex",this.bossHp.querySelector(".name").textContent="✦ "+t.toUpperCase(),this.bossBar.style.width=e/n*100+"%"}hideBossHP(){this.bossHp.style.display="none"}showInteract(t){this.interactHint.textContent=t,this.interactHint.classList.add("show")}hideInteract(){this.interactHint.classList.remove("show")}toggleInventory(){this.inventoryPanel.classList.toggle("open"),this._renderGrid(),this._renderEquip()}updateInventory(t,e){}setInventoryOpen(t){t?this.inventoryPanel.classList.add("open"):this.inventoryPanel.classList.remove("open"),this._renderGrid(),this._renderEquip()}updateMinimap(t,e,n,r){const s=document.getElementById("minimap-canvas");if(!s)return;const o=s.getContext("2d"),a=s.width,l=a/2,c=80,h=Math.cos(r),u=Math.sin(r);o.clearRect(0,0,a,a);for(const m of n){if(!m.userData.alive)continue;const g=m.position.x-t.x,_=m.position.z-t.z,p=g*h-_*u,d=g*u+_*h,x=l+p/c*l,v=l+d/c*l;x<0||x>a||v<0||v>a||(o.beginPath(),o.arc(x,v,2.5,0,Math.PI*2),o.fillStyle="#ff4444",o.fill())}for(const m of e){const g=m.position.x-t.x,_=m.position.z-t.z,p=g*h-_*u,d=g*u+_*h,x=l+p/c*l,v=l+d/c*l;x<0||x>a||v<0||v>a||(o.beginPath(),o.arc(x,v,2,0,Math.PI*2),m.userData.type==="chest"?o.fillStyle="#ffdd44":m.userData.type==="mushroom"?o.fillStyle="#dd88ff":o.fillStyle="#44dd88",o.fill())}o.beginPath(),o.arc(l,l,3,0,Math.PI*2),o.fillStyle="#ffffff",o.fill(),o.strokeStyle="rgba(0,0,0,0.5)",o.lineWidth=1,o.stroke(),o.beginPath(),o.moveTo(l,l-6),o.lineTo(l-3,l+2),o.lineTo(l+3,l+2),o.closePath(),o.fillStyle="#ffffff",o.fill()}}const Wt=new n0,ue=new gm;Jm(ue);ue.background=new $(6982842);ue.fog=new xo(6982842,40,100);const tn=new $e(50,window.innerWidth/window.innerHeight,.1,150);tn.position.set(0,6,8);tn.lookAt(0,0,0);const Un=new Wl({antialias:!0});Un.setSize(window.innerWidth,window.innerHeight);Un.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Un.shadowMap.enabled=!0;Un.shadowMap.type=dl;Un.toneMapping=pl;Un.toneMappingExposure=1.2;document.body.prepend(Un.domElement);Wt.setLoadProgress(10);const i0=new ym(4482696,.4);ue.add(i0);const cn=new yo(16772829,1.4);cn.position.set(30,50,20);cn.castShadow=!0;cn.shadow.mapSize.width=2048;cn.shadow.mapSize.height=2048;cn.shadow.camera.near=1;cn.shadow.camera.far=60;cn.shadow.camera.left=-40;cn.shadow.camera.right=40;cn.shadow.camera.top=40;cn.shadow.camera.bottom=-40;ue.add(cn);const Zl=new yo(8952268,.3);Zl.position.set(-20,10,-30);ue.add(Zl);const $l=new yo(13426175,.2);$l.position.set(-10,20,-30);ue.add($l);Wt.setLoadProgress(20);const Ee=Math.floor(Math.random()*1e4),is=ui(),Hi=new Map,vn=[],pn=[];function Jl(i,t){return`${i},${t}`}function r0(i,t,e){const n=is,r=i*n,s=t*n,o=Wi(e+i*1e3+t*100+54e3),a=1+Math.floor(o()*4),l=[];for(let c=0;c<a;c++){const h=r+(o()-.5)*n*.7,u=s+(o()-.5)*n*.7,f=We(h,u,e);if(f<-.5||f>10)continue;const m=o(),g=m<.5?0:m<.75?1:m<.9?2:3,_=jm(g);_.position.set(h,f,u),_.userData.alive=!0,_.userData.homePos=new L(h,f,u),_.userData.patrolAngle=o()*Math.PI*2,_.userData.patrolTimer=0,_.userData.aggroRange=6+g*3,_.userData.aggroCooldown=2+o()*3,_.userData.attackTimer=0,_.userData.posture=0,_.userData.maxPosture=30+g*20,_.userData.staggerTimer=0,_.userData.staggerDmgMult=1,_.userData.aiState="patrol",_.userData.retreatTimer=0,_.userData.investigateTimer=0,_.userData.wasInRange=!1,_.userData.attackTelegraph=0,ue.add(_),l.push(_)}return l}const sl=new ce({color:13404228,roughness:.6,metalness:.3,flatShading:!0}),s0=new ce({color:16768358,roughness:.2,metalness:.6}),o0=new Be({color:16768392,transparent:!0,opacity:.15});function a0(i,t,e){const n=is,r=i*n,s=t*n,o=Wi(e+i*1e3+t*100+55e3),a=1+Math.floor(o()*2),l=[],c=[];for(let h=0;h<a;h++){let u=0,f,m,g;do f=r+(o()-.5)*n*.6,m=s+(o()-.5)*n*.6,g=We(f,m,e),u++;while((g<-.5||g>12||c.some(T=>Math.hypot(T.x-f,T.z-m)<10))&&u<10);if(g<-.5||g>12)continue;c.push({x:f,z:m});const _=new pe;_.position.set(f,g,m);const p=new q(new Mt(.5,.2,.4),sl);p.position.y=.1,p.castShadow=!0,_.add(p);const d=new q(new Mt(.48,.08,.38),sl);d.position.y=.22,d.castShadow=!0,_.add(d);const x=new q(new Mt(.44,.03,.02),s0);x.position.set(0,.15,.2),_.add(x);const v=new q(new Mt(.7,.35,.6),o0);v.position.y=.12,_.add(v);const S=Math.abs(e*12.9898+f*78.233+m*435.123)%1;let R;if(S<.15){const T=Math.abs(e*7.3+f*13.7+m*29.1)%In.length,A=In[Math.floor(T)];R={type:"weapon",id:A.id,label:"✦ "+A.name.toUpperCase()}}else if(S<.35){const T=Math.floor(Math.abs(e*3.1+f*17.3+m*53.7)%Yr.length),A=Yr[T];R={type:"clothing",id:A.id,label:A.name}}else if(S<.5){const T=5+Math.floor(Math.abs(e*3.7+f*91.5+m*62.3)%21);R={type:"coins",amount:T,label:"+"+T+"🪙"}}else R={type:"heal",amount:30,label:"+30 HP"};_.userData.type="chest",_.userData.loot=R,ue.add(_),l.push(_)}return l}function l0(i,t){const e=Jl(i,t);if(Hi.has(e))return;const n=Tm(Ee,i,t),r=Am(n,Ee,i,t);ue.add(r);const s=Cm(Ee,ue,i,t),o=r0(i,t,Ee),a=a0(i,t,Ee),l=s.filter(u=>u.userData.type==="appleTree"&&u.userData.appleCount>0),c=s.filter(u=>u.userData.type==="mushroom"),h=s.filter(u=>u.userData.type==="chest");Hi.set(e,{mesh:r,objects:s,monsters:o,chests:a,appleTrees:l}),pn.push(...s),vn.push(...o),Ue.push(...a,...l,...h,...c)}function c0(i){const t=Hi.get(i);if(t){ue.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();for(const e of t.objects){ue.remove(e);const n=pn.indexOf(e);n!==-1&&pn.splice(n,1)}for(const e of t.monsters){ue.remove(e);const n=vn.indexOf(e);n!==-1&&vn.splice(n,1)}for(const e of t.chests){ue.remove(e);const n=Ue.indexOf(e);n!==-1&&Ue.splice(n,1)}for(const e of t.appleTrees){const n=Ue.indexOf(e);n!==-1&&Ue.splice(n,1)}for(const e of t.objects)if(e.userData.type==="chest"){const n=Ue.indexOf(e);n!==-1&&Ue.splice(n,1)}Hi.delete(i)}}function ol(i){return Math.floor(i/is+.5)}function Ql(i,t){const e=ol(i),n=ol(t),r=new Set;for(let s=-1;s<=1;s++)for(let o=-1;o<=1;o++){const a=e+o,l=n+s,c=Jl(a,l);r.add(c),Hi.has(c)||l0(a,l)}for(const s of Hi.keys())r.has(s)||c0(s)}let Ue=[],nr=null,Fr=0,al="grassland";Ql(0,0);Wt.setLoadProgress(50);const Yt=Wm(),u0=We(0,0,Ee);Yt.position.set(0,u0,0);ue.add(Yt);Wt.setLoadProgress(60);Wt.onEquip=(i,t)=>{if(t){const e=hn(t);e&&lo(Yt,i,e.color)}else Xm(Yt,i)};Wt.setLoadProgress(70);const zr=new Km(ue,tn),fn=["sword","greatsword","polearm","bow","catalyst"];let jr=fn[0];function tc(){const i=Yt.userData.weaponMesh;i&&Yt.remove(i);const t=Rm(jr,Yt);t.position.set(.22,.52,.1),t.rotation.x=.5,t.rotation.z=.2,Yt.add(t),Yt.userData.weaponMesh=t}tc();const An={};Wt.initWeaponSlots(fn);fn.forEach(i=>{An[i]=0});Wt.equip("dress","dress_gray");Wt.setLoadProgress(80);const Eo=new Ne,rs=400,Hr=new Float32Array(rs*3),ec=new Float32Array(rs),Ji=[];for(let i=0;i<rs;i++){const t=Math.random()*Math.PI*2,e=5+Math.random()*30;Hr[i*3]=Math.cos(t)*e,Hr[i*3+1]=.5+Math.random()*5,Hr[i*3+2]=Math.sin(t)*e,ec[i]=.02+Math.random()*.04,Ji.push({x:(Math.random()-.5)*.3,z:(Math.random()-.5)*.3})}Eo.setAttribute("position",new Jt(Hr,3));Eo.setAttribute("size",new Jt(ec,1));const nc=new de({uniforms:{uColor:{value:new $(11193599)},uTime:{value:0}},vertexShader:`
    attribute float size;
    uniform float uTime;
    varying float vAlpha;
    void main() {
      vec3 pos = position;
      pos.y += sin(uTime * 0.5 + position.x * 0.3 + position.z * 0.3) * 0.3;
      vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * 200.0 / (-mvPos.z);
      gl_Position = projectionMatrix * mvPos;
      vAlpha = 0.3 + 0.3 * sin(uTime + position.x + position.z);
    }
  `,fragmentShader:`
    uniform vec3 uColor;
    varying float vAlpha;
    void main() {
      float d = distance(gl_PointCoord, vec2(0.5));
      if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.0, d) * vAlpha;
      gl_FragColor = vec4(uColor, a * 0.6);
    }
  `,transparent:!0,blending:mn,depthWrite:!1}),co=new vm(Eo,nc);ue.add(co);Wt.setLoadProgress(90);const Tt={hp:100,maxHp:100,stamina:100,maxStamina:100,invulnerable:0,moving:!1,running:!1,coins:0};let Cn=0,Kr=.45,Ri=0,ti=null,ri=!1;const Ke={};let ss=!1;document.addEventListener("keydown",i=>{if(Ke[i.code]=!0,i.code>="Digit1"&&i.code<="Digit5"){const t=parseInt(i.code.charAt(5))-1;t<fn.length&&(jr=fn[t],Wt.setActiveWeapon(t),tc())}if(i.code==="KeyI"&&Wt.toggleInventory(),i.code==="KeyE"&&nr&&h0(nr),i.code==="KeyM"){const t=document.getElementById("minimap");t&&(t.style.display=t.style.display==="none"?"":"none")}i.code==="KeyQ"&&(ri=!ri,ri||(ti=null))});document.addEventListener("keyup",i=>{Ke[i.code]=!1});window.addEventListener("blur",()=>{for(const i in Ke)Ke[i]=!1});document.addEventListener("mousedown",i=>{Oe.unlock(),i.button===0&&rc(),i.button===2&&(ss=!0)});document.addEventListener("mouseup",i=>{i.button===2&&(ss=!1)});document.addEventListener("mousemove",i=>{ss&&(Cn-=i.movementX*.005,Kr=Math.max(-.3,Math.min(1.2,Kr+i.movementY*.005))),i.clientX/window.innerWidth*2-1,i.clientY/window.innerHeight*2-1});document.addEventListener("contextmenu",i=>i.preventDefault());let uo=0;document.addEventListener("touchstart",i=>{uo=i.touches[0].clientX,rc()});document.addEventListener("touchmove",i=>{const t=i.touches[0].clientX-uo;Cn-=t*.005,uo=i.touches[0].clientX});function ic(i){const e=[1,3,8,20,100][Math.min(i.userData.tier,4)]||1;Tt.coins+=e;const n=i.position.clone();n.y+=1.5;const r=n.clone().project(tn),s=(r.x*.5+.5)*window.innerWidth,o=(-r.y*.5+.5)*window.innerHeight;Wt.showDamage(s,o,"+"+e+"🪙",!1,!0)}function rc(){zr.canAttack()&&(zr._onDamage=(i,t)=>{const e=i.userData.staggerDmgMult||1,n=Math.round(t*e);i.userData.health-=n,i.userData.hitFlash=1,Oe.playSfx("hit"),jl(i.position,new $(16755268)),Kl(i.position,new $(16755268)),Ri=.12;const r=i.position.clone();r.y+=1.5;const s=r.clone().project(tn),o=(s.x*.5+.5)*window.innerWidth,a=(-s.y*.5+.5)*window.innerHeight;Wt.showDamage(o,a,n,Math.random()>.8),i.userData.health<=0&&(i.userData.alive=!1,i.userData.deathTimer=0,Oe.playSfx("death"),ic(i)),i.userData.isBoss&&(Wt.showBossHP(i.userData.name,Math.max(0,i.userData.health),i.userData.maxHealth),i.userData.health<=0&&Wt.hideBossHP())},zr.playerAttack(Yt,jr,vn,An[jr]||0),Oe.playSfx("swing"))}function h0(i){if(i.userData.type==="chest"){const t=i.userData.loot;if(t.type==="weapon"){if(fn.includes(t.id)){An[t.id]=(An[t.id]||0)+1;const n=fn.indexOf(t.id);Wt.setWeaponLevel(n,An[t.id]),Wt.showDamage(window.innerWidth/2,window.innerHeight/2,t.id.toUpperCase()+" +"+An[t.id],!1,!0)}else fn.push(t.id),An[t.id]=0,Wt.initWeaponSlots(fn),fn.forEach((n,r)=>{An[n]&&Wt.setWeaponLevel(r,An[n])}),Wt.showDamage(window.innerWidth/2,window.innerHeight/2,t.label,!1,!0);Oe.playSfx("pickup"),Ai(i.position,new $(16768324))}else t.type==="coins"?(Tt.coins+=t.amount,Wt.showDamage(window.innerWidth/2,window.innerHeight/2,t.label,!1,!0),Oe.playSfx("coin"),Ai(i.position,new $(16768324))):t.type==="clothing"?Wt.addItem({type:"clothing",id:t.id,label:t.label})&&(Wt.showDamage(window.innerWidth/2,window.innerHeight/2,t.label,!1,!0),Oe.playSfx("pickup"),Ai(i.position,new $(16746700))):t.type==="heal"&&(Tt.hp=Math.min(Tt.maxHp,Tt.hp+t.amount),Wt.showDamage(window.innerWidth/2,window.innerHeight/2,t.label,!1,!0),Oe.playSfx("heal"),Ai(i.position,new $(4521864)));ue.remove(i);const e=Ue.indexOf(i);e>=0&&Ue.splice(e,1)}else if(i.userData.type==="appleTree"){const t=i.userData.appleMeshes,e=i.userData.stalkMeshes;if(t.length>0){const n=t.pop(),r=e.pop();i.remove(n),i.remove(r),i.userData.appleCount=t.length;const s=1+Math.floor(Math.random()*3);if(Tt.hp=Math.min(Tt.maxHp,Tt.hp+s),Wt.showDamage(window.innerWidth/2,window.innerHeight/2,"+"+s+" ❤",!1,!0),Oe.playSfx("heal"),Ai(i.position,new $(4521864)),t.length===0){const o=Ue.indexOf(i);o>=0&&Ue.splice(o,1)}}}else if(i.userData.type==="mushroom"){Tt.hp=Math.min(Tt.maxHp,Tt.hp+i.userData.healAmount),Wt.showDamage(window.innerWidth/2,window.innerHeight/2,"+"+i.userData.healAmount+" ❤",!1,!0),Oe.playSfx("heal"),Ai(i.position,new $(14518527)),ue.remove(i);const t=Ue.indexOf(i);t>=0&&Ue.splice(t,1)}}let qs=new wm,$n=new L,je=new L,ll=new L,Or=new L,cl=new L,Ys=0;function d0(i){if(ri)if(ti&&ti.userData.alive)$n.copy(ti.position).sub(Yt.position),Cn=Math.atan2($n.x,$n.z),Kr=.3;else{ri=!1,ti=null;let a=null,l=1/0;for(const c of vn){if(!c.userData.alive)continue;const h=c.position.distanceTo(Yt.position);h<l&&(l=h,a=c)}ti=a,ti&&(ri=!0)}let t=ri?5:6;const e=Cn,n=Kr;Or.set(t*Math.cos(n)*Math.sin(e),t*Math.sin(n),t*Math.cos(n)*Math.cos(e)),je.copy(Yt.position).add(Or),je.y=Math.max(je.y,We(je.x,je.z,Ee)+.3),$n.copy(je).sub(Yt.position);const r=$n.length();$n.normalize(),qs.set(Yt.position.clone().add(new L(0,1,0)),$n),qs.far=r;const s=qs.intersectObjects(pn,!0);let o=t;if(s.length>0){const a=s[0];a.distance<r-.5&&(o=Math.max(1.5,a.distance-.5))}Ys+=(o-Ys)*Math.min(1,i*8),t=Ys,Or.set(t*Math.cos(n)*Math.sin(e),t*Math.sin(n),t*Math.cos(n)*Math.cos(e)),je.copy(Yt.position).add(Or),je.y=Math.max(je.y,We(je.x,je.z,Ee)+.3),tn.position.lerp(je,.08),Ri>0&&(Ri-=i,cl.set((Math.random()-.5)*Ri*.5,(Math.random()-.5)*Ri*.5,(Math.random()-.5)*Ri*.5),tn.position.add(cl)),ll.copy(Yt.position).add(new L(0,1,0)),tn.lookAt(ll)}function f0(i){if(Tt.moving=!1,Tt.hp<=0)return;const t=Tt.running?4.5:2.8;let e=0,n=0;if(Ke.KeyW&&(n-=1,Tt.moving=!0),Ke.KeyS&&(n+=1,Tt.moving=!0),Ke.KeyA&&(e-=1,Tt.moving=!0),Ke.KeyD&&(e+=1,Tt.moving=!0),Tt.running=(Ke.ShiftLeft||Ke.ShiftRight)&&Tt.stamina>0,Tt.running&&Tt.moving?Tt.stamina=Math.max(0,Tt.stamina-12*i):Tt.running||(Tt.stamina=Math.min(Tt.maxStamina,Tt.stamina+6*i)),Tt.stamina<=0&&(Tt.running=!1),Tt.moving){const o=new L(0,0,-1).applyAxisAngle(new L(0,1,0),Cn),a=new L(1,0,0).applyAxisAngle(new L(0,1,0),Cn),l=new L;if(l.add(o.clone().multiplyScalar(-n)),l.add(a.clone().multiplyScalar(e)),l.length()>.01?l.normalize().multiplyScalar(t*i):l.set(0,0,0),l.length()>.001){let m=Math.atan2(l.x,l.z)-Yt.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;Yt.rotation.y+=m*.15}const c=Yt.position.clone().add(l),h=is*10;c.x=Math.max(-h,Math.min(h,c.x)),c.z=Math.max(-h,Math.min(h,c.z));const u=We(c.x,c.z,Ee);c.y=u;for(const f of vn)f.userData.alive&&c.distanceTo(f.position)<.8&&c.add(c.clone().sub(f.position).normalize().multiplyScalar(.5));Qi(c,pn),Yt.position.copy(c),Fr-=i,Fr<=0&&(Oe.playSfx("step"),Fr=Tt.running?.3:.5)}else Fr=0;!Tt.moving&&!ss&&(Ke.KeyA&&(Cn+=2*i),Ke.KeyD&&(Cn-=2*i));const r=We(Yt.position.x,Yt.position.z,Ee),s=Math.sin(Date.now()*.003)*.005;Yt.position.y=r+s}function Qi(i,t){for(const e of t){const n=e.userData.trunkR;if(n){const g=i.x-e.position.x,_=i.z-e.position.z,p=Math.sqrt(g*g+_*_),d=n+.1;p<d&&p>.001&&(i.x+=g/p*(d-p),i.z+=_/p*(d-p));continue}if(e.userData.type!=="house"&&e.userData.type!=="cityBuilding")continue;const r=e.userData.walls;if(!r)continue;const s=e.rotation.y,o=Math.cos(s),a=Math.sin(s),l=i.x-e.position.x,c=i.z-e.position.z,h=l*o+c*a,u=-l*a+c*o;let f=h,m=u;for(const g of r){const _=f-g.cx,p=m-g.cz,d=g.hw+.15-Math.abs(_),x=g.hd+.15-Math.abs(p);d>0&&x>0&&(d<x?f+=(_>0?1:-1)*d:m+=(p>0?1:-1)*x)}i.x=e.position.x+f*o-m*a,i.z=e.position.z+f*a+m*o}return i}function p0(i,t){for(const e of vn){if(!e.userData.alive){e.userData.deathTimer=(e.userData.deathTimer||0)+i,e.position.y-=i*.5,e.rotation.x+=i*2,e.rotation.z+=i*1.5,e.userData.deathTimer>2&&ue.remove(e);continue}const n=e.userData,r=e.position.distanceTo(Yt.position),s=e.position.distanceTo(n.homePos);if(n.staggerTimer>0){n.staggerTimer-=i,e.position.y=We(e.position.x,e.position.z,Ee),$i(e,t,!1),n.staggerTimer<=0&&(n.staggerDmgMult=1);continue}const o=n.aggroRange*3;if(s>o){const u=new L().copy(n.homePos).sub(e.position);u.y=0,u.normalize(),e.position.add(u.multiplyScalar(n.speed*1.5*i));let m=Math.atan2(u.x,u.z)-e.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;e.rotation.y+=m*.1,n.aiState="return",Qi(e.position,pn),e.position.y=We(e.position.x,e.position.z,Ee),$i(e,t,!0);continue}if(n.health/n.maxHealth<.25&&r<n.aggroRange*.5&&n.aiState!=="return"){if(n.retreatTimer=(n.retreatTimer||0)+i,n.retreatTimer>1){const u=new L().copy(e.position).sub(Yt.position);u.y=0,u.normalize(),e.position.add(u.multiplyScalar(n.speed*.8*i));let m=Math.atan2(u.x,u.z)-e.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;e.rotation.y+=m*.1,n.aiState="retreat",Qi(e.position,pn),e.position.y=We(e.position.x,e.position.z,Ee),$i(e,t,!0);continue}}else n.retreatTimer=0;n.investigateTimer=n.investigateTimer||0;const l=r<n.aggroRange;if(l&&!n.wasInRange&&r>2&&(n.investigateTimer=.5),n.wasInRange=l,n.investigateTimer>0){n.investigateTimer-=i;const u=new L().copy(Yt.position).sub(e.position);if(u.y=0,u.length()>.01){let m=Math.atan2(u.x,u.z)-e.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;e.rotation.y+=m*.1}Qi(e.position,pn),e.position.y=We(e.position.x,e.position.z,Ee),$i(e,t,!1);continue}l?n.aggroCooldown=Math.max(0,n.aggroCooldown-i):n.aggroCooldown=1.5+Math.random()*2;const c=l&&n.aggroCooldown<=0;if(c){n.aiState="chase";const u=new L().copy(Yt.position).sub(e.position);u.y=0,u.normalize(),e.position.add(u.multiplyScalar(n.speed*i));let m=Math.atan2(u.x,u.z)-e.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;e.rotation.y+=m*.1,r<2.5&&n.attackTimer>.5&&n.attackTimer<1&&!n._telegraphed&&(n._telegraphed=!0,Kl(e.position,new $(16729156),.8),jl(e.position,new $(16729156),3,.5)),n.attackTimer<=.5&&(n._telegraphed=!1),r<1.5?(n.attackTimer-=i,n.attackTimer<=0&&(n.attackTimer=1.5,Tt.invulnerable<=0&&(Tt.hp-=n.attackPower,Tt.invulnerable=.5,Tt.hp<=0&&(Tt.hp=0,setTimeout(()=>{Tt.hp=Tt.maxHp;const g=We(0,0,Ee);Yt.position.set(0,g,0)},2e3))))):n.attackTimer=Math.min(n.attackTimer+i,1.5)}else if(l){n.aiState="wait";const u=new L().copy(Yt.position).sub(e.position);if(u.y=0,u.length()>.01){let m=Math.atan2(u.x,u.z)-e.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;e.rotation.y+=m*.05}}else{n.aiState="patrol",n.patrolTimer+=i,n.patrolTimer>3&&(n.patrolTimer=0,n.patrolAngle+=(Math.random()-.5)*1.5);const u=new L(Math.sin(n.patrolAngle),0,Math.cos(n.patrolAngle)),m=n.homePos.clone().add(u.multiplyScalar(2)).clone().sub(e.position);if(m.y=0,m.length()>.3){m.normalize(),e.position.add(m.multiplyScalar(n.speed*.3*i));let _=Math.atan2(m.x,m.z)-e.rotation.y;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;e.rotation.y+=_*.05}}Qi(e.position,pn);const h=We(e.position.x,e.position.z,Ee);e.position.y=h,$i(e,t,c)}}Wt.setLoadProgress(100);let ul=0;function sc(i){requestAnimationFrame(sc);const t=Math.min((i-ul)/1e3,.05);ul=i,Tt.invulnerable=Math.max(0,Tt.invulnerable-t),f0(t),d0(t),p0(t,i*.001),Ql(Yt.position.x,Yt.position.z),km(pn,i*.001);const e=zr.update(t,vn);if(e){const o=e.monster,a=o.userData.staggerDmgMult||1,l=Math.round(e.damage*a);o.userData.health-=l,o.userData.hitFlash=1;const c=In.find(g=>g.type==="ranged"||g.type==="magic");c&&(o.userData.posture=Math.min(o.userData.maxPosture||50,(o.userData.posture||0)+(c.postureDmg||5)),o.userData.posture>=(o.userData.maxPosture||50)&&(o.userData.posture=0,o.userData.staggerTimer=.8,o.userData.staggerDmgMult=1.5));const h=o.position.clone();h.y+=1.5;const u=h.clone().project(tn),f=(u.x*.5+.5)*window.innerWidth,m=(-u.y*.5+.5)*window.innerHeight;Wt.showDamage(f,m,l,!1),Oe.playSfx("hit"),o.userData.health<=0&&(o.userData.alive=!1,o.userData.deathTimer=0,Oe.playSfx("death"),ic(o)),o.userData.isBoss&&(Wt.showBossHP(o.userData.name,Math.max(0,o.userData.health),o.userData.maxHealth),o.userData.health<=0&&Wt.hideBossHP())}let n=!1;for(const o of vn)if(o.userData.isBoss&&o.userData.alive){n=!0;break}n||Wt.hideBossHP();const r=co.geometry.attributes.position.array;for(let o=0;o<rs;o++){r[o*3]+=Ji[o].x*t,r[o*3+2]+=Ji[o].z*t;const a=ui()/2;Math.abs(r[o*3])>a&&(Ji[o].x*=-1),Math.abs(r[o*3+2])>a&&(Ji[o].z*=-1)}co.geometry.attributes.position.needsUpdate=!0,nc.uniforms.uTime.value=i*.001,Wt.updateHP(Tt.hp,Tt.maxHp),Wt.updateStamina(Tt.stamina,Tt.maxStamina),Wt.updateCoins(Tt.coins),Wt.updateMinimap(Yt.position,Ue,vn,Cn);const s=Pn(Yt.position.x,Yt.position.z,Ee);s!==al&&(al=s,Oe.startMusic(s)),e0(t),nr=null;for(const o of Ue)if(Yt.position.distanceTo(o.position)<2){nr=o;const l=o.userData.type==="appleTree"?"Press E to pick":o.userData.type==="mushroom"?"Press E to collect":"Press E to open";Wt.showInteract(l);break}nr||Wt.hideInteract(),Un.render(ue,tn)}requestAnimationFrame(sc);window.addEventListener("resize",()=>{tn.aspect=window.innerWidth/window.innerHeight,tn.updateProjectionMatrix(),Un.setSize(window.innerWidth,window.innerHeight)});
