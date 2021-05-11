(function(g){var window=this;'use strict';var t4=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Yf=!1;this.player=a;this.N(a,"minimized",this.Ig);this.N(a,"onStateChange",this.kC)},u4=function(a){g.fM.call(this,a);
this.i=new t4(this.player);this.i.hide();g.TL(this.player,this.i.element,4);a.De()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(t4,g.V);g.k=t4.prototype;
g.k.JA=function(){this.tooltip=new g.zP(this.player,this);g.G(this,this.tooltip);g.TL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.jc=new g.WM(this.player);g.G(this,this.jc);this.jg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.G(this,this.jg);this.jg.Aa(this.element);this.N(this.jg.element,"click",this.Nw);var a=new g.V({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.iK()]});g.G(this,a);a.Aa(this.jg.element);this.N(a.element,"click",this.Lh);
a=new g.W_(this.player,this);g.G(this,a);a.Aa(this.jg.element);this.Mn=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.G(this,this.Mn);this.Mn.Aa(this.jg.element);this.N(this.Mn.element,"click",this.Nw);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,b);b.Aa(this.Mn.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.G(this,a);a.Aa(this.Mn.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,c);c.Aa(this.Mn.element);this.oI=new g.wO(this.player,
this,!1);g.G(this,this.oI);this.oI.Aa(b.element);b=new g.tO(this.player,this);g.G(this,b);b.Aa(a.element);this.nextButton=new g.wO(this.player,this,!0);g.G(this,this.nextButton);this.nextButton.Aa(c.element);this.pg=new g.mP(this.player,this);g.G(this,this.pg);this.pg.Aa(this.jg.element);this.Dc=new g.BO(this.player,this);g.G(this,this.Dc);g.TL(this.player,this.Dc.element,4);this.Aw=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.G(this,this.Aw);g.TL(this.player,this.Aw.element,4);a=new g.V({D:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.iK()]});g.G(this,a);a.Aa(this.Aw.element);this.N(a.element,"click",this.Lh);a=new g.V({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.nK()]});g.G(this,a);a.Aa(this.Aw.element);this.N(a.element,"click",this.OQ);this.N(this.player,"presentingplayerstatechange",this.Cc);this.N(this.player,"appresize",this.ob);this.N(this.player,"fullscreentoggled",this.ob);this.ob()};
g.k.show=function(){this.kd=new g.gn(this.Go,null,this);this.kd.start();this.Yf||(this.JA(),this.Yf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Dc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.kd&&(this.kd.dispose(),this.kd=void 0);g.V.prototype.hide.call(this);this.player.De()||(this.Yf&&this.Dc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.kd&&(this.kd.dispose(),this.kd=void 0);g.V.prototype.va.call(this)};
g.k.Lh=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.OQ=function(){this.player.playVideo()};
g.k.Nw=function(a){if(a.target===this.jg.element||a.target===this.Mn.element)g.R(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.lJ(this.player.rb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.Ig=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.De())};
g.k.Td=function(){this.Dc.Tb();this.pg.Tb()};
g.k.Go=function(){this.Td();this.kd&&this.kd.start()};
g.k.Cc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.ob=function(){g.MO(this.Dc,0,this.player.Wa().getPlayerSize().width,!1);g.DO(this.Dc)};
g.k.kC=function(a){this.player.De()&&(0===a?this.hide():this.show())};
g.k.ac=function(){return this.tooltip};
g.k.pe=function(){return!1};
g.k.Fe=function(){return!1};
g.k.Hh=function(){return!1};
g.k.mx=function(){};
g.k.Ol=function(){};
g.k.Vp=function(){};
g.k.em=function(){return null};
g.k.zi=function(){return new g.ag(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Oo=function(a,b,c,d,e){var f=0,h=d=0,l=g.Bg(a);if(b){c=g.sn(b,"ytp-prev-button")||g.sn(b,"ytp-next-button");var m=g.sn(b,"ytp-play-button"),n=g.sn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.zg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.sn(b,"ytp-miniplayer-button-top-left"),f=g.zg(b,this.element),b=g.Bg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Wa().getPlayerSize().width;e=f+(e||0);l=g.de(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.dk=function(){};
g.k.Dj=function(){return!1};g.v(u4,g.fM);u4.prototype.create=function(){};
u4.prototype.Uh=function(){return!1};
u4.prototype.load=function(){this.player.hideControls();this.i.show()};
u4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.lM.miniplayer=u4;})(_yt_player);
'use strict';var ba,da,taa,ia,ka,la,pa,qa,ra,ta,ua,va,wa,xa,uaa,vaa,ya,za,Baa,Aa,Ba,Ca,Ea,Fa,Ja,Ka,Daa,Eaa,Ta,Va,Wa,Faa,Gaa,Xa,Haa,Ya,Za,Iaa,Jaa,ab,ib,Kaa,pb,qb,Laa,vb,sb,Maa,tb,Naa,Oaa,Paa,Db,Fb,Gb,Hb,Lb,Nb,Ob,Rb,Yb,$b,cc,dc,gc,kc,lc,Saa,mc,nc,oc,wc,xc,zc,Fc,Lc,Oc,Sc,Qc,Waa,Zaa,$aa,aba,Wc,Xc,Zc,Yc,ad,dd,bba,cba,cd,dba,kd,ld,id,md,od,pd,td,ud,vd,wd,gba,xd,yd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Ld,Nd,Pd,Qd,Sd,Td,Ud,iba,Vd,Wd,Xd,Yd,Zd,$d,ge,ie,le,pe,qe,ve,we,ze,xe,Be,Ee,De,Ce,nba,ne,Ue,Se,Te,We,Ve,me,Xe,pba,af,cf,
$e,ef,ff,gf,hf,jf,kf,lf,mf,qf,rf,qba,wf,sf,yf,Bf,Cf,rba,Ef,If,Hf,Jf,Kf,Lf,Mf,Nf,Of,Pf,Qf,Rf,Uf,Tf,Vf,Wf,uba,wba,xba,zba,Yf,Zf,$f,bg,cg,eg,Aba,fg,gg,ig,kg,qg,rg,ug,Bba,xg,wg,yg,Cba,Jg,Kg,Lg,Dba,Mg,Ng,Og,Pg,Qg,Rg,Sg,Eba,Tg,Ug,Vg,Fba,Gba,Wg,Yg,Xg,$g,ah,dh,bh,Iba,ch,eh,fh,hh,gh,Kba,Jba,ih,Mba,Lba,Nba,lh,Oba,nh,oh,ph,mh,qh,Pba,rh,Qba,Rba,th,Vba,uh,vh,yh,Wba,Ah,Ch,Fh,Ih,Kh,Hh,Gh,Lh,Xba,Mh,Nh,Oh,Ph,Zba,Uh,Vh,Wh,Xh,aca,Yh,Zh,$h,ai,bi,bca,di,ei,fi,gi,hi,ii,ki,li,mi,ni,oi,ji,pi,qi,ri,cca,si,ti,dca,ui,vi,eca,
xi,fca,yi,Di,Ei,gca,Ii,Ji,Li,Ni,Oi,Pi,Qi,Ri,Ki,Mi,ica,Si,Ti,Vi,Ui,jca,kca,lca,Wi,Xi,Yi,Zi,pca,qca,rca,sca,tca,aj,bj,uca,cj,vca,wca,dj,ej,fj,gj,xca,hj,jj,kj,lj,mj,nj,oj,pj,qj,rj,yca,zca,sj,Aca,uj,tj,xj,yj,wj,Bca,Fca,Eca,Aj,Gca,Hca,Ica,Kca,Jca,Lca,Bj,Dj,Fj,Gj,Hj,Nca,Jj,Kj,Oca,Pca,Pj,Qj,Rj,Sj,Qca,Tj,Uj,Sca,Vj,Tca,Wj,Yj,Xj,Zj,ak,ck,Vca,dk,Uca,ek,Wca,fk,Xca,Yca,hk,jk,kk,lk,mk,ik,pk,qk,nk,Zca,ada,bda,sk,tk,uk,vk,cda,wk,xk,yk,zk,Ak,Bk,Ck,Dk,Gk,Fk,eda,fda,Hk,Jk,Ek,Ik,dda,Kk,Lk,hda,ida,jda,kda,Pk,Qk,Rk,Mk,
Sk,Tk,gda,lda,mda,nda,Wk,Uk,Xk,Zk,sda,oda,cl,dl,el,fl,gl,hl,ij,tda,il,jl,uda,vda,wda,xda,yda,ll,ml,nl,ol,pl,ql,Bda,rl,Cda,sl,tl,ul,vl,wl,Cl,Dl,Eda,El,Gl,Il,Kl,Gda,Ll,Ml,Nl,Ol,Ql,Sl,Hda,Pl,Xl,Yl,Vl,Jda,Tl,Rl,bm,cm,dm,fm,Kda,gm,hm,im,Lda,nm,pm,rm,sm,um,vm,wm,ym,Mda,Nda,Am,Dm,zm,Bm,qm,xm,Pda,Gm,Em,Fm,Im,Oda,Hm,Mm,Pm,Om,Um,Vm,Xm,Sda,Wm,Zm,an,$m,Qda,dn,fn,Vda,jn,kn,nn,on,pn,qn,wn,Wda,yn,zn,Yda,An,Bn,cea,Zda,hea,Hn,En,Fn,Gn,Nn,iea,On,Pn,Qn,kea,Tn,Un,Vn,Wn,lea,Zn,$n,ao,bo,mo,no,oo,po,ro,so,to,uo,vo,wo,nea,
xo,oea,zo,Bo,Co,rea,sea,tea,Io,Jo,Ko,Mo,No,Oo,Ro,So,Po,To,uea,Wo,Xo,Zo,$o,ap,bp,fp,dp,gp,hp,ip,Yo,lp,kp,zea,np,qp,Aea,up,tp,Cea,Dea,Eea,yp,Fea,Gea,vp,Ap,zp,Hea,Cp,Dp,Ep,Gp,Fp,Iea,Jp,Kp,Lp,Mp,Op,Pp,Qp,Rp,Kea,Lea,Yp,Zp,$p,Mea,eq,fq,gq,iq,kq,lq,hq,oq,rq,qq,pq,tq,uq,vq,xq,yq,Aq,Bq,Cq,Eq,Fq,Gq,Iq,Kq,Lq,wq,Oq,Mq,Nea,Yq,Xq,Pea,Qea,cr,er,fr,Tea,Sea,$q,qr,rr,sr,xr,yr,vr,zr,Br,Dr,Er,Uea,as,bs,cs,es,Vea,js,is,ds,ks,ls,ms,os,ps,Wea,xs,ys,As,zs,Ds,Es,Gs,Hs,$ea,afa,bfa,Js,Ls,Ms,Ks,Ns,Os,Ps,Qs,Rs,Ss,Ts,Vs,cfa,Ws,
$s,at,Us,efa,ffa,Xs,bt,gfa,Zs,dfa,Ys,dt,hfa,et,ft,ct,ifa,gt,ht,it,kt,lt,jfa,kfa,lfa,ot,pt,qt,mfa,nfa,ofa,pfa,qfa,rfa,rt,tt,ut,vt,xt,Bt,sfa,tfa,ufa,Ct,zt,At,Ft,Gt,Ht,It,wfa,vfa,Kt,Jt,Mt,Lt,Tt,Ut,Vt,Xt,Qt,yfa,Nt,Rt,Pt,Ot,St,Bfa,zfa,cu,du,bu,fu,iu,ju,Dfa,gu,hu,ku,lu,nu,ou,ru,pu,uu,tu,vu,Efa,xu,yu,Au,Gfa,Cu,Du,Eu,Gu,Hfa,Iu,Ku,Ifa,Jfa,Nu,Mu,Lfa,Ou,Ru,Pu,Qu,ts,Qfa,Yu,bv,cv,Rfa,Zu,Sfa,kv,pv,Vfa,Wfa,uv,yv,xv,Av,wv,zv,Bv,Yfa,Zfa,Gv,Hv,P,Iv,Jv,Kv,Lv,Nv,Pv,Qv,Sv,gga,Tv,Uv,Vv,Yv,kga,bw,cw,dw,ew,fw,iw,jw,lga,
lw,ow,pw,nw,qw,rw,tw,vw,ww,kw,xw,uw,zw,nga,Aw,Cw,Dw,Bw,Ew,Fw,Hw,Iw,Kw,Nw,Jw,Ow,Qw,Rw,Vw,Tw,Yw,Xw,Zw,$w,ax,bx,Uw,dx,cx,Sw,rga,sga,fx,gx,hx,ix,jx,lx,mx,ox,px,qx,ux,vx,tx,vga,xga,qy,py,uga,tga,oy,sy,ty,vy,wy,yy,Ay,By,Cy,Dy,zy,yga,Ey,Fy,Gy,Hy,Jy,Ky,Ly,My,Ny,Oy,Py,Qy,Ry,Sy,Ty,zga,Uy,Wy,Yy,Zy,Vy,Bga,$y,az,cz,ez,Cga,fz,jz,hz,dz,kz,gz,iz,lz,mz,nz,Dga,pz,qz,wz,Ega,sz,yz,Az,Dz,Cz,uz,zz,xz,Fga,Ez,Gga,Fz,Gz,rz,tz,vz,Bz,Hz,Iz,Hga,Kz,Iga,Jga,Lz,Mz,Kga,Oz,Lga,Nz,Pz,Rz,Sz,Tz,Uz,Vz,Wz,Zz,Xz,Mga,$z,aA,bA,cA,Nga,Yz,
dA,eA,fA,gA,hA,iA,kA,lA,mA,Oga,nA,oA,pA,qA,rA,Pga,Qga,Uga,Vga,Rga,Sga,Tga,sA,uA,tA,vA,wA,xA,Wga,yA,zA,AA,BA,CA,DA,EA,FA,GA,HA,IA,JA,KA,LA,MA,NA,PA,RA,QA,SA,TA,UA,WA,XA,YA,ZA,Xga,aB,$A,eB,fB,gB,hB,iB,jB,cB,kB,lB,mB,nB,Yga,oB,qB,rB,sB,tB,uB,vB,wB,Zga,xB,yB,zB,AB,BB,EB,GB,HB,IB,JB,$ga,LB,MB,KB,OB,NB,PB,QB,aha,RB,UB,wga,my,cha,VB,WB,XB,dha,eha,rx,YB,aC,hha,gha,ZB,fha,dC,$B,gC,iha,jha,iC,kha,jC,hC,lha,lC,kC,mC,nC,mha,nha,oha,oC,eC,pha,qC,qha,rC,sC,tC,uC,vC,rha,wC,sha,ry,ny,zC,BC,DC,EC,FC,GC,HC,CC,KC,tha,
MC,vha,NC,OC,wha,uha,xha,yha,zha,PC,sx,QC,RC,wx,Aha,TC,Bha,UC,Cha,VC,XC,WC,YC,Eha,$C,aD,bD,cD,dD,eD,gD,hD,Fha,jD,lD,kD,iD,T,nD,oD,pD,qD,rD,SD,MD,UD,XD,YD,CD,JD,ZD,sD,OD,ND,QD,bE,cE,fE,Nha,zD,jE,yD,kE,LD,mE,nE,oE,pE,qE,Pha,Qha,rE,sE,Rha,Vha,tE,Sha,Uha,Tha,uE,Wha,vE,Xha,Yha,wE,xE,yE,zE,CE,EE,Zha,$ha,FE,aia,bia,HE,IE,JE,KE,cia,LE,dia,eia,PE,eF,gia,hF,hia,iia,jia,NE,fF,gF,kia,nF,pF,qF,tF,sF,uF,vF,wF,xF,mia,nia,oia,zF,BF,CF,FF,HF,GF,uia,IF,KF,LF,DF,MF,NF,via,wia,OF,WF,QF,VF,bG,fG,Hia,Jia,Cia,aG,jG,Gia,
Iia,kG,Kia,Lia,lG,Aia,Nia,Mia,TF,iG,eG,Tia,Pia,Uia,Qia,Ria,Sia,Via,mG,Wia,Xia,oG,pG,Yia,rG,SF,hG,Dia,UF,Fia,Eia,tG,Oia,$ia,AG,BG,CG,DG,cja,cG,EG,dja,Bia,FG,Zia,dG,eja,ZF,$F,YF,yF,IG,fja,JG,LG,gja,hja,jja,ija,MG,NG,kja,OG,lja,PG,QG,RG,SG,TG,UG,VG,mja,WG,nja,XG,ZG,qja,YG,rja,oja,sja,pja,tja,uja,vja,$G,aH,bH,cH,dH,xja,eH,fH,gH,yja,zja,Aja,Dja,lH,iH,Cja,oH,Bja,pH,kH,qH,nH,mH,jH,hH,Eja,tH,sH,uH,Fja,wH,yH,zH,Hja,Gja,AH,BH,CH,DH,EH,FH,GH,Ija,HH,Jja,IH,Lja,Mja,KH,Nja,Oja,Pja,Sja,Qja,Rja,Tja,Uja,LH,Vja,Wja,
Xja,Yja,Zja,$ja,MH,NH,OH,PH,QH,RH,SH,TH,UH,VH,WH,XH,YH,ZH,$H,aI,bI,cI,dI,eI,fI,gI,hI,iI,jI,kI,lI,mI,nI,oI,pI,qI,rI,sI,tI,uI,vI,wI,xI,yI,zI,AI,BI,CI,DI,EI,FI,bka,aka,dka,eka,cka,GI,fka,HI,II,JI,KI,gka,LI,hka,jka,ika,lka,mka,nka,OI,oka,pka,PI,qka,SI,TI,rka,UI,vka,wka,xka,VI,yka,WI,zka,Aka,XI,Bka,Cka,Eka,Fka,Gka,ZI,YI,Dka,$I,Hka,Ika,Kka,Jka,Lka,Mka,aJ,bJ,Pka,Qka,cJ,Rka,Ska,dJ,eJ,gJ,hJ,iJ,jJ,mJ,Tka,oJ,pJ,Uka,Vka,Wka,qJ,Yka,Zka,rJ,$ka,tJ,ala,bla,uJ,vJ,dla,ela,wJ,gla,fla,xJ,jla,yJ,lla,kla,zJ,AJ,mla,nla,
ola,pla,qla,rla,CJ,EJ,vla,yla,sla,FJ,Ila,Hla,GJ,Kla,Jla,Mla,Nla,Pla,Ola,Qla,Rla,Sla,Tla,Ula,Vla,Wla,Xla,HJ,IJ,Yla,Zla,$la,bma,cma,dma,ema,fma,PJ,hma,ima,NJ,OJ,gma,jma,QJ,mma,kma,oma,nma,RJ,tma,qma,rma,sma,uma,SJ,vma,xma,yma,wma,TJ,zma,sJ,Bma,Cma,Xka,Ama,VJ,WJ,XJ,Dma,Ema,Fma,YJ,$J,Hma,aK,dK,Ima,eK,Jma,Kma,fK,Mma,Nma,Oma,Pma,Qma,Rma,Sma,Tma,kK,Uma,lK,Vma,Wma,Xma,Yma,Zma,pK,qK,rK,$ma,sK,ana,uK,cna,bna,vK,wK,xK,yK,dna,zK,AK,ena,BK,CK,ina,fna,hna,gna,jna,DK,EK,kna,lna,mna,nna,FK,ona,qna,pna,GK,HK,IK,JK,
KK,MK,NK,OK,PK,QK,rna,RK,SK,tna,sna,TK,UK,VK,WK,XK,YK,aL,bL,cL,dL,eL,fL,gL,hL,vna,iL,wna,zna,Ana,kL,lL,mL,nL,oL,Ena,Fna,Dna,Hna,Gna,Cna,pL,qL,rL,sL,tL,uL,vL,Jna,Kna,Mna,Lna,rs,Ona,Nna,zL,Qna,Pna,Sna,Rna,Tna,Una,Vna,Xna,Yna,$na,CL,aoa,FL,DL,GL,EL,pma,boa,coa,doa,eoa,LL,KL,NL,joa,koa,WL,loa,ZL,moa,noa,$L,aM,bM,ooa,dM,woa,zoa,xoa,Aoa,Boa,Doa,hM,Hoa,kM,Joa,Goa,Koa,Loa,jM,Ioa,nM,oM,pM,qM,IL,sM,Moa,mM,tM,wM,Noa,vM,yM,Ooa,BM,CM,DM,HM,Roa,Soa,JM,IM,KM,Toa,Uoa,LM,Voa,Woa,NM,OM,Xoa,RM,Zoa,TM,PM,$oa,apa,Yoa,
UM,VM,YM,bpa,XM,$M,ZM,bN,dpa,epa,fN,fpa,iN,gpa,jpa,hpa,mN,nN,kpa,qN,rN,sN,tN,vN,lpa,mpa,xN,opa,npa,ppa,qpa,rpa,spa,DN,EN,FN,tpa,GN,HN,upa,vpa,KN,xpa,wpa,LN,MN,NN,ypa,ON,PN,QN,RN,zpa,SN,TN,Apa,UN,Bpa,Dpa,Cpa,ZN,XN,YN,Epa,Fpa,Gpa,$N,aO,bO,cO,dO,Hpa,gO,Ipa,iO,jO,kO,mO,nO,oO,pO,Jpa,Mpa,qO,Kpa,Lpa,Qpa,Rpa,sO,Tpa,Spa,Upa,Vpa,Wpa,vO,Xpa,Ypa,aqa,Zpa,$pa,bqa,xO,yO,zO,AO,cqa,dqa,eqa,fqa,gqa,jqa,iqa,hqa,lqa,EO,IO,nqa,oqa,GO,CO,FO,KO,rqa,LO,HO,kqa,qqa,JO,mqa,pqa,sqa,tqa,NO,OO,PO,QO,vqa,TO,UO,VO,WO,XO,YO,wqa,
ZO,aP,$O,bP,cP,xqa,dP,yqa,Aqa,zqa,eP,fP,Bqa,gP,hP,Cqa,iP,Dqa,jP,Eqa,kP,pP,oP,Fqa,nP,sP,Gqa,Hqa,tP,uP,vP,wP,yP,Iqa,gN,Mqa,BN,Jqa,rP,Lqa,CN,Kqa,Nqa,Rqa,Qqa,Sqa,Tqa,CP,Uqa,DP,Vqa,FP,GP,HP,IP,JP,KP,LP,Xqa,MP,NP,OP,PP,RP,Yqa,Zqa,SP,TP,bra,UP,cra,VP,WP,XP,YP,ZP,era,dra,$P,aQ,bQ,cQ,hra,ira,dQ,eQ,gra,gQ,mra,lra,nra,hQ,iQ,jQ,kQ,qra,sra,pra,lQ,ora,tra,ura,mQ,nQ,oQ,xra,yra,vra,wra,pQ,qQ,Bra,Cra,Ara,Era,rQ,Hra,Ira,Jra,Fra,Kra,Gra,sQ,tQ,Mra,Nra,Ora,Pra,Qra,vQ,Rra,Sra,Tra,wQ,Vra,xQ,Wra,Xra,Ura,Zra,$ra,Yra,yQ,asa,
csa,bsa,dsa,zQ,esa,fsa,gsa,AQ,hsa,BQ,ksa,jsa,isa,psa,qsa,rsa,ssa,EQ,tsa,CQ,lsa,nsa,osa,vsa,usa,wsa,xsa,ysa,Asa,Bsa,Csa,zsa,Dsa,Fsa,oR,Hsa,Isa,pR,Ksa,Msa,Lsa,Nsa,Psa,Osa,rR,Qsa,Rsa,Ssa,Tsa,uR,vR,Ysa,ata,Zsa,Vsa,yR,Usa,$sa,BR,cta,bta,CR,eta,gta,hta,fta,FR,ita,IR,mta,nta,ota,LR,MR,GR,NR,PR,pta,JR,qta,QR,rta,RR,sta,tta,kta,HR,TR,zta,UR,Ata,Bta,xta,WR,Cta,YR,vta,aS,yta,Dta,ZR,VR,Eta,bS,Fta,Hta,eS,cS,fS,dS,gS,Ita,hS,iS,jS,kS,Jta,lS,Kta,nS,Mta,Nta,Ota,qS,pS,oS,Pta,Qta,Rta,Sta,tS,uS,vS,Tta,Uta,Vta,Wta,Xta,
Yta,aua,wS,cua,yS,AS,xS,BS,Zta,CS,bua,$ta,zS,DS,ES,dua,GS,HS,IS,eua,gua,kua,hua,iua,jua,NS,OS,PS,QS,uta,RS,mua,SR,nua,oua,SS,pua,uua,vua,wua,XS,YS,xua,ZS,tua,yua,zua,TS,qua,Aua,US,VS,rua,sua,Bua,WS,Cua,Dua,Eua,Fua,cT,Hua,Gua,$S,aT,bT,Iua,Jua,Kua,Lua,dT,Mua,eT,Nua,fT,gT,Oua,iT,Pua,jT,Tua,lT,Vua,oT,Rua,Sua,Qua,mT,kT,Uua,Zua,Xua,qT,$ua,rT,ava,sT,bva,cva,dva,eva,fva,tT,gva,hva,iva,jva,kva,uT,lva,mva,vT,wT,xT,yT,zT,nva,ova,KS,MS,rva,CT,DT,LS,lua,GT,BT,sva,AT,pva,qva,tva,HT,IT,uva,FT,JS,ET,vva,wva,xva,
JT,zva,yva,KT,Cva,Bva,Dva,Eva,NT,Hva,LT,Pva,MT,Qva,OT,Lva,Iva,Mva,Fva,PT,Rva,Sva,Vva,Uva,Tva,QT,RT,Yva,Zva,VT,WT,$va,ZT,$T,bU,cwa,dwa,ewa,cU,fwa,TT,eU,gwa,hwa,jwa,Yua,dU,iwa,Xva,hT,aU,awa,kwa,lwa,mwa,Wva,UT,ST,nT,XT,nwa,Wua,fU,gU,hU,owa,pwa,qwa,swa,rwa,iU,twa,vwa,uwa,xwa,kU,Cwa,ywa,Dwa,Ewa,Awa,Fwa,Bwa,lU,Jwa,Hwa,Iwa,Owa,Lwa,Pwa,Qwa,Rwa,jU,Kwa,Nwa,Gwa,Swa,mU,Twa,zwa,Uwa,nU,oU,Vwa,Xwa,Ywa,pU,Wwa,qU,rU,sU,tU,vU,$wa,bxa,dxa,cxa,wU,axa,yU,xU,exa,uU,fxa,zU,CU,gxa,ixa,hxa,BU,jxa,kxa,mxa,lxa,nxa,DU,AU,oxa,
EU,qxa,rxa,sxa,pxa,txa,uxa,wxa,yxa,zxa,vxa,Bxa,Cxa,xxa,HU,Dxa,Exa,Fxa,Gxa,IU,JU,MU,NU,Jxa,OU,Kxa,Lxa,Mxa,PU,Hxa,Nxa,Oxa,SU,Pxa,Rxa,Qxa,Sxa,TU,UU,Txa,VU,WU,XU,Wxa,ZU,YU,Xxa,aV,Vxa,Zxa,$xa,Yxa,$U,aya,bV,bya,Ixa,RU,dya,eya,fya,gya,hya,iya,jya,lya,mya,nya,kya,oya,pya,dV,qya,rya,sya,eV,fV,tya,uya,vya,hV,xya,kV,jV,yya,zya,iV,gV,wya,nV,mV,oV,lV,Aya,qV,Eya,tV,vV,wV,Gya,Cya,rV,uV,xV,Dya,Hya,yV,Jya,pV,Kya,Lya,Iya,Mya,sV,Fya,Nya,Bya,zV,AV,BV,Oya,Pya,Qya,Rya,Tya,Uya,Vya,Wya,Xya,Yya,$ya,CV,aza,bza,DV,EV,FV,GV,
cza,HV,IV,dza,JV,eza,fza,gza,hza,jza,lza,nza,KV,oza,rza,LV,sza,pza,qza,Aza,vza,yza,Bza,zza,wza,Cza,xza,Eza,MV,Gza,Hza,Iza,VV,rH,WV,DQ,Lza,jta,Oza,XV,UV,Pza,cW,ZV,ER,Mza,eW,Rza,xR,fW,gW,msa,bW,hW,OV,Qza,Jza,SV,kW,lW,Yza,zR,Zza,RV,dta,jW,OR,$R,YV,Sza,aAa,$za,bAa,mW,Xsa,cAa,dAa,Wza,NV,eAa,nW,$V,PV,TV,AR,aW,fAa,Kza,oW,KR,gAa,hAa,iAa,Wsa,iW,Xza,Nza,wAa,rAa,qAa,zAa,AAa,sW,vW,DAa,BAa,uW,CAa,pW,xW,yW,FAa,zW,AW,uAa,vAa,GW,IAa,FW,rW,JAa,xAa,JW,KAa,LAa,CW,DW,BW,MW,QAa,wW,RAa,SAa,NW,IW,OW,PW,TAa,EW,EAa,LW,MAa,
UAa,VAa,HL,XAa,HW,QW,ZAa,tW,RW,$Aa,bBa,cBa,tAa,KW,dBa,sAa,SW,TW,Lta,eBa,UW,VW,WW,fBa,XW,YW,ZW,$W,aX,bX,hBa,gBa,cX,iBa,dX,X,eX,kBa,gX,mBa,fX,nBa,iX,oBa,jX,hX,kX,lX,tka,uka,Kja,nX,qBa,vX,wX,QI,uX,xX,tBa,uBa,vBa,wBa,pBa,xBa,mX,yBa,zBa,AX,rX,zX,FX,BX,pX,ABa,oX,yX,CX,GX,sX,tX,EX,DX,CBa,HX,IX,DBa,JX,Y,EBa,FBa,IBa,JBa,NBa,KX,OBa,KBa,PBa,LX,MX,NX,QBa,TBa,RBa,WBa,ZBa,YBa,$Ba,cCa,bCa,fCa,hCa,jCa,kCa,lCa,mCa,qCa,ZX,nCa,sCa,rCa,vCa,$X,Fv,wCa,bY,Cv,dY,eY,Xfa,fY,yCa,gY,hY,QX,iY,zCa,YX,RX,ACa,jY,kY,UX,BCa,VBa,SX,
TX,XX,CCa,DCa,lY,mY,ECa,aY,WX,VX,OX,iCa,uCa,oCa,aCa,dCa,nY,oY,pY,FCa,qY,rY,sY,tY,uY,vY,wY,xY,GBa,yY,HBa,HCa,GCa,PX,tCa,ICa,gCa,UBa,SBa,MBa,LBa,XBa,pCa,eCa,zY,JCa,AY,RI,qX,rBa,cY,BY,CY,DY,KCa,EY,FY,GY,HY,UJ,LCa,IY,MCa,NCa,KY,PCa,QCa,MY,NY,OY,OCa,LY,RCa,SCa,PY,Ev,VCa,UCa,QY,JY,WCa,XCa,YCa,RY,SY,ZCa,$Ca,aDa,bDa,TY,UY,VY,WY,XY,YY,ZY,cDa,$Y,aZ,bZ,cZ,dZ,eZ,dDa,eDa,fDa,fZ,gZ,hZ,iZ,gDa,jZ,hDa,kZ,iDa,lZ,jDa,mZ,nZ,oZ,pZ,lDa,kDa,rZ,sZ,mDa,nDa,oDa,uZ,tZ,vZ,wZ,pDa,xZ,yZ,qDa,zZ,sDa,rDa,AZ,BZ,tDa,CZ,vDa,wDa,uDa,
xDa,DZ,yDa,zDa,EZ,FZ,GZ,HZ,IZ,JZ,ADa,KZ,LZ,BDa,MZ,qZ,NZ,OZ,ska,PZ,CDa,QZ,DDa,RZ,SZ,TZ,UZ,EDa,FDa,HDa,JDa,GDa,VZ,KDa,MDa,LDa,NDa,ODa,WZ,XZ,YZ,xCa,PDa,ZZ,QDa,$Z,IDa,RDa,SDa,a_,b_,TDa,c_,UDa,VDa,d_,WDa,XDa,e_,f_,h_,YDa,i_,j_,k_,ZDa,l_,$Da,m_,n_,aEa,o_,p_,q_,bEa,r_,cEa,dEa,eEa,fEa,gEa,t_,hEa,iEa,jEa,kEa,lEa,u_,mEa,v_,w_,x_,y_,nEa,z_,oEa,A_,pEa,qEa,rEa,D_,sEa,tEa,uEa,vEa,E_,C_,wEa,G_,xEa,H_,I_,J_,K_,L_,yEa,AEa,zEa,BEa,M_,CEa,DEa,N_,EEa,O_,P_,Q_,FEa,GEa,R_,HEa,S_,T_,IEa,JEa,KEa,Dv,LEa,MEa,OEa,aa,fa,ea,
Na,Caa;ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.ca=function(a,b){return aa[a]=b};
da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
taa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
ia=function(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&fa(c,a,{configurable:!0,writable:!0,value:b})}};
ka=function(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a};
g.q=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}};
la=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.ma=function(a){return a instanceof Array?a:la(g.q(a))};
g.v=function(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Id=b.prototype};
pa=function(){this.J=!1;this.B=null;this.l=void 0;this.i=1;this.C=this.G=0;this.V=this.u=null};
qa=function(a){if(a.J)throw new TypeError("Generator is already running");a.J=!0};
ra=function(a,b){a.u={zF:b,zG:!0};a.i=a.G||a.C};
g.w=function(a,b,c){a.i=c;return{value:b}};
g.sa=function(a){a.i=0};
ta=function(a,b,c){a.G=b;void 0!=c&&(a.C=c)};
ua=function(a,b){a.i=b;a.G=0};
va=function(a){a.G=0;var b=a.u.zF;a.u=null;return b};
wa=function(a){a.V=[a.u];a.G=0;a.C=0};
xa=function(a,b){var c=a.V.splice(0)[0];(c=a.u=a.u||c)?c.zG?a.i=a.G||a.C:void 0!=c.sb&&a.C<c.sb?(a.i=c.sb,a.u=null):a.i=a.C:a.i=b};
uaa=function(a){this.i=new pa;this.l=a};
vaa=function(a,b){qa(a.i);var c=a.i.B;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return za(a)};
ya=function(a,b,c,d){try{var e=b.call(a.i.B,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.J=!1,e;var f=e.value}catch(h){return a.i.B=null,ra(a.i,h),za(a)}a.i.B=null;d.call(a.i,f);return za(a)};
za=function(a){for(;a.i.i;)try{var b=a.l(a.i);if(b)return a.i.J=!1,{value:b.value,done:!1}}catch(c){a.i.l=void 0,ra(a.i,c)}a.i.J=!1;if(a.i.u){b=a.i.u;a.i.u=null;if(b.zG)throw b.zF;return{value:b.return,done:!0}}return{value:void 0,done:!0}};
Baa=function(a){this.next=function(b){qa(a.i);a.i.B?b=ya(a,a.i.B.next,b,a.i.L):(a.i.L(b),b=za(a));return b};
this.throw=function(b){qa(a.i);a.i.B?b=ya(a,a.i.B["throw"],b,a.i.L):(ra(a.i,b),b=za(a));return b};
this.return=function(b){return vaa(a,b)};
this[Symbol.iterator]=function(){return this}};
g.z=function(a,b){b=new Baa(new uaa(b));oa&&a.prototype&&oa(b,a.prototype);return b};
Aa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
Ba=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
Ca=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{kG:e,JJ:f}}return{kG:-1,JJ:void 0}};
Ea=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e};
Fa=function(a){return a?a:Array.prototype.fill};
g.Ga=function(a,b,c){a=a.split(".");c=c||g.A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.Ha=function(a,b){a=a.split(".");b=b||g.A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b};
g.Ia=function(){};
Ja=function(a){a.Gf=void 0;a.getInstance=function(){return a.Gf?a.Gf:a.Gf=new a}};
Ka=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};
g.La=function(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ma=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Oa=function(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Caa)};
Daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
Eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.C=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.C=Daa:g.C=Eaa;return g.C.apply(null,arguments)};
g.Pa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.Qa=function(a,b){for(var c in b)a[c]=b[c]};
g.Ra=function(){return Date.now()};
g.Sa=function(a,b){function c(){}
c.prototype=b.prototype;a.Id=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vg=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)}};
Ta=function(a){return a};
Va=function(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Va);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.FM=b)};
Wa=function(a,b){var c=Va.call;a=a.split("%s");for(var d="",e=a.length-1,f=0;f<e;f++)d+=a[f]+(f<b.length?b[f]:"%s");c.call(Va,this,d+a[e])};
Faa=function(){};
Gaa=function(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.u=!b&&/[?&]ae=1(&|$)/.test(a);this.B=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.l=c}};
Xa=function(a){return function(){return a}};
Haa=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
Ya=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
Za=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};
Iaa=function(a,b){var c=0;return function(d){g.A.clearTimeout(c);var e=arguments;c=g.A.setTimeout(function(){a.apply(b,e)},50)}};
g.$a=function(a){return a[a.length-1]};
Jaa=function(a,b){var c=a.length,d="string"===typeof a?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)};
g.bb=function(a,b,c){b=ab(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
ab=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.cb=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};
g.fb=function(a,b){return 0<=eb(a,b)};
g.gb=function(a){return 0==a.length};
ib=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.kb=function(a,b){b=eb(a,b);var c;(c=0<=b)&&g.jb(a,b);return c};
g.jb=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.lb=function(a,b){b=ab(a,b,void 0);0<=b&&g.jb(a,b)};
Kaa=function(a,b){var c=0;Jaa(a,function(d,e){b.call(void 0,d,e,a)&&g.jb(a,e)&&c++})};
g.nb=function(a){return Array.prototype.concat.apply([],arguments)};
g.ob=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
pb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}};
g.rb=function(a,b,c,d){Array.prototype.splice.apply(a,qb(arguments,1))};
qb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
Laa=function(a){for(var b=0,c=0,d={};c<a.length;){var e=a[c++],f=g.Ma(e)?"o"+g.Oa(e):(typeof e).charAt(0)+e;Object.prototype.hasOwnProperty.call(d,f)||(d[f]=!0,a[b++]=e)}a.length=b};
g.ub=function(a,b,c){return sb(a,c||tb,!1,b)};
vb=function(a,b){return sb(a,b,!0,void 0,void 0)};
sb=function(a,b,c,d,e){for(var f=0,h=a.length,l;f<h;){var m=f+(h-f>>>1),n=void 0;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(h=m,l=!n)}return l?f:-f-1};
g.wb=function(a,b){a.sort(b||tb)};
Maa=function(a,b){var c=tb;g.wb(a,function(d,e){return c(b(d),b(e))})};
g.xb=function(a,b){if(!g.La(a)||!g.La(b)||a.length!=b.length)return!1;for(var c=a.length,d=Naa,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
tb=function(a,b){return a>b?1:a<b?-1:0};
Naa=function(a,b){return a===b};
g.yb=function(a,b,c){c=g.ub(a,b,c);0>c&&g.rb(a,-(c+1),0,b)};
g.Ab=function(a,b,c){var d={};(0,g.zb)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
Oaa=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};
Paa=function(a,b){b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,0,0,b[0])};
g.Bb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Cb=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Db=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c};
g.Eb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
Fb=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
Gb=function(a){for(var b in a)return b};
Hb=function(a){for(var b in a)return a[b]};
g.Ib=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Kb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
Lb=function(a,b){return null!==a&&b in a};
g.Mb=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
Nb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
Ob=function(a,b){return(b=Nb(a,b,void 0))&&a[b]};
g.Pb=function(a){for(var b in a)return!1;return!0};
g.Qb=function(a){for(var b in a)delete a[b]};
Rb=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.Sb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.Tb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.Ub=function(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=g.Ub(a[c]);return b};
g.Vb=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};
g.Xb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Wb.length;f++)c=Wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
Yb=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};
$b=function(){if(void 0===Zb){var a=null,b=g.A.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(c){g.A.console&&g.A.console.error(c.message)}Zb=a}else Zb=a}return Zb};
cc=function(a,b){this.i=a===ac&&b||"";this.l=bc};
dc=function(a){return a instanceof cc&&a.constructor===cc&&a.l===bc?a.i:"type_error:Const"};
g.ec=function(a){return new cc(ac,a)};
gc=function(a){this.i=fc===fc?a:"";this.Ij=!0};
kc=function(a,b){this.i=b===jc?a:""};
lc=function(a){return a instanceof kc&&a.constructor===kc?a.i:"type_error:TrustedResourceUrl"};
Saa=function(a,b){var c=dc(a);if(!Qaa.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(Raa,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof cc?dc(d):encodeURIComponent(String(d))});
return mc(a)};
mc=function(a){var b=$b();a=b?b.createScriptURL(a):a;return new kc(a,jc)};
nc=function(a,b){return 0==a.lastIndexOf(b,0)};
oc=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.pc=function(a){return/^[\s\xa0]*$/.test(a)};
wc=function(a,b){if(b)a=a.replace(qc,"&amp;").replace(rc,"&lt;").replace(sc,"&gt;").replace(tc,"&quot;").replace(uc,"&#39;").replace(vc,"&#0;");else{if(!Taa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qc,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(rc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(uc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(vc,"&#0;"))}return a};
xc=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Ac=function(a,b){var c=0;a=yc(String(a)).split(".");b=yc(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=zc(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||zc(0==f[2].length,0==h[2].length)||zc(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c};
zc=function(a,b){return a<b?-1:a>b?1:0};
g.Cc=function(a,b){this.i=b===Bc?a:""};
g.Ec=function(a){return a instanceof g.Cc&&a.constructor===g.Cc?a.i:"type_error:SafeUrl"};
Fc=function(a){a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Uaa);return b&&Vaa.test(b[1])?new g.Cc(a,Bc):null};
g.Ic=function(a){a instanceof g.Cc||(a="object"==typeof a&&a.Ij?a.dh():String(a),a=Gc.test(a)?new g.Cc(a,Bc):Fc(a));return a||Hc};
g.Jc=function(a,b){if(a instanceof g.Cc)return a;a="object"==typeof a&&a.Ij?a.dh():String(a);if(b&&/^data:/i.test(a)&&(b=Fc(a)||Hc,b.dh()==a))return b;Gc.test(a)||(a="about:invalid#zClosurez");return new g.Cc(a,Bc)};
Lc=function(a,b){this.i=b===Kc?a:""};
Oc=function(a){return a instanceof Lc&&a.constructor===Lc?a.i:"type_error:SafeStyle"};
Sc=function(a){var b="",c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d=Array.isArray(d)?g.Pc(d,Qc).join(" "):Qc(d),b+=c+":"+d+";")}return b?new Lc(b,Kc):Rc};
Qc=function(a){if(a instanceof g.Cc)return'url("'+g.Ec(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof cc?dc(a):Waa(String(a));if(/[{;}]/.test(a))throw new Wa("Value does not allow [{;}], got: %s.",[a]);return a};
Waa=function(a){var b=a.replace(Tc,"$1").replace(Tc,"$1").replace(Uc,"url");if(Xaa.test(b)){if(Yaa.test(a))return"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c||!Zaa(a))return"zClosurez"}else return"zClosurez";return $aa(a)};
Zaa=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};
$aa=function(a){return a.replace(Uc,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,l,m){f=l;return m});
b=g.Ic(d).dh();return c+f+b+f+e})};
aba=function(a){function b(d){Array.isArray(d)?g.zb(d,b):c+=Oc(d)}
var c="";g.zb(arguments,b);return c?new Lc(c,Kc):Rc};
Wc=function(a){return-1!=g.Vc.indexOf(a)};
Xc=function(){return Wc("Firefox")||Wc("FxiOS")};
Zc=function(){return Wc("Safari")&&!(Yc()||Wc("Coast")||Wc("Opera")||Wc("Edge")||Wc("Edg/")||Wc("OPR")||Xc()||Wc("Silk")||Wc("Android"))};
Yc=function(){return(Wc("Chrome")||Wc("CriOS"))&&!Wc("Edge")};
ad=function(a,b,c){this.i=c===$c?a:"";this.l=b};
g.bd=function(a){return a instanceof ad&&a.constructor===ad?a.i:"type_error:SafeHtml"};
dd=function(a){if(a instanceof ad)return a;var b="object"==typeof a,c=null;b&&a.GA&&(c=a.aq());return cd(wc(b&&a.Ij?a.dh():String(a)),c)};
bba=function(a){function b(f){Array.isArray(f)?g.zb(f,b):(f=dd(f),e.push(g.bd(f).toString()),f=f.aq(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=dd(ed),d=c.aq(),e=[];g.zb(a,b);return cd(e.join(g.bd(c).toString()),d)};
cba=function(a){return bba(Array.prototype.slice.call(arguments))};
cd=function(a,b){var c=$b();a=c?c.createHTML(a):a;return new ad(a,b,$c)};
g.fd=function(a,b){dc(a);dc(a);return cd(b,null)};
dba=function(a){var b=g.ec("Output of CSS sanitizer");dc(b);dc(b);return new Lc(a,Kc)};
g.gd=function(a,b){if(eba())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=g.bd(b)};
g.hd=function(a,b){b=b instanceof g.Cc?b:g.Jc(b);a.href=g.Ec(b)};
g.jd=function(a,b){a.src=lc(b);(b=id(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)};
kd=function(a,b,c,d){a=a instanceof g.Cc?a:g.Jc(a);b=b||g.A;c=c instanceof cc?dc(c):c||"";return void 0!==d?b.open(g.Ec(a),c,d,void 0):b.open(g.Ec(a),c)};
ld=function(a,b,c){return a.parseFromString(g.bd(b),c)};
id=function(a){if(a&&a!=g.A)return md(a.document);null===nd&&(nd=md(g.A.document));return nd};
md=function(a){return a.querySelector?(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&fba.test(a)?a:"":""};
od=function(a){return encodeURIComponent(String(a))};
pd=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.qd=function(a){return a=wc(a,void 0)};
g.rd=function(a){return null==a?"":String(a)};
td=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
ud=function(a){var b=Number(a);return 0==b&&g.pc(a)?NaN:b};
vd=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};
wd=function(){return"googleAvInapp".replace(/([A-Z])/g,"-$1").toLowerCase()};
gba=function(a){return a.replace(/(^|[\s]+)([a-z])/g,function(b,c,d){return c+d.toUpperCase()})};
xd=function(a,b,c,d,e,f,h){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);h&&(l+="#"+h);return l};
yd=function(a){return a?decodeURI(a):a};
g.Ad=function(a,b){return b.match(zd)[a]||null};
g.Bd=function(a){return yd(g.Ad(3,a))};
Cd=function(a){a=a.match(zd);return xd(a[1],null,a[3],a[4])};
Dd=function(a){a=a.match(zd);return xd(null,null,null,null,a[5],a[6],a[7])};
Ed=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?pd(e):"")}}};
Fd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
Gd=function(a,b){return b?a?a+"&"+b:b:a};
Hd=function(a,b){if(!b)return a;a=Fd(a);a[1]=Gd(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]};
Id=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Id(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+od(b)))};
Ld=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Id(a[b],a[b+1],c);return c.join("&")};
g.Md=function(a){var b=[],c;for(c in a)Id(c,a[c],b);return b.join("&")};
Nd=function(a,b){var c=2==arguments.length?Ld(arguments[1],0):Ld(arguments,1);return Hd(a,c)};
g.Od=function(a,b){b=g.Md(b);return Hd(a,b)};
Pd=function(a,b,c){c=null!=c?"="+od(c):"";return Hd(a,b+c)};
Qd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
Sd=function(a,b){var c=a.search(Rd),d=Qd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return pd(a.substr(d,e-d))};
Td=function(a,b){for(var c=a.search(Rd),d=0,e,f=[];0<=(e=Qd(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(hba,"$1")};
Ud=function(a,b,c){return Pd(Td(a,b),b,c)};
iba=function(a,b){a=Fd(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});
a[1]=Gd(d.join("&"),g.Md(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};
Vd=function(){return Wc("iPhone")&&!Wc("iPod")&&!Wc("iPad")};
Wd=function(){return Vd()||Wc("iPad")||Wc("iPod")};
Xd=function(a){Xd[" "](a);return a};
Yd=function(a,b){try{return Xd(a[b]),!0}catch(c){}return!1};
Zd=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};
$d=function(){var a=g.A.document;return a?a.documentMode:void 0};
g.be=function(a){return Zd(jba,a,function(){return 0<=g.Ac(ae,a)})};
g.ce=function(a){return Number(kba)>=a};
g.de=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.ee=function(a,b){a%=b;return 0>a*b?a+b:a};
g.fe=function(a,b,c){return a+c*(b-a)};
ge=function(a,b){return 1E-6>=Math.abs(a-b)};
g.he=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
ie=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.je=function(a,b){this.width=a;this.height=b};
g.ke=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
le=function(a){return a.width*a.height};
pe=function(a){return a?new me(ne(a)):oe||(oe=new me)};
qe=function(a){var b=document;return"string"===typeof a?b.getElementById(a):a};
g.se=function(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.re(document,"*",a,b)};
g.te=function(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):g.re(c,"*",a,b)[0]||null}return a||null};
g.re=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&g.fb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a};
ve=function(a,b){g.Bb(b,function(c,d){c&&"object"==typeof c&&c.Ij&&(c=c.dh());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ue.hasOwnProperty(d)?a.setAttribute(ue[d],c):nc(d,"aria-")||nc(d,"data-")?a.setAttribute(d,c):a[d]=c})};
we=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new g.je(a.clientWidth,a.clientHeight)};
ze=function(a){var b=xe(a);a=a.parentWindow||a.defaultView;return g.ye&&g.be("10")&&a.pageYOffset!=b.scrollTop?new g.he(b.scrollLeft,b.scrollTop):new g.he(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
xe=function(a){return a.scrollingElement?a.scrollingElement:g.Ae||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement};
Be=function(a){return a?a.parentWindow||a.defaultView:window};
Ee=function(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!lba&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',g.qd(h.name),'"');if(h.type){f.push(' type="',g.qd(h.type),'"');var l={};g.Xb(l,h);delete l.type;h=l}f.push(">");f=f.join("")}f=Ce(e,f);h&&("string"===typeof h?f.className=h:Array.isArray(h)?f.className=h.join(" "):ve(f,h));2<d.length&&De(e,f,d,2);return f};
De=function(a,b,c,d){function e(l){l&&b.appendChild("string"===typeof l?a.createTextNode(l):l)}
for(;d<c.length;d++){var f=c[d];if(!g.La(f)||g.Ma(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(g.Ma(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){h="function"==typeof f.item;break a}}h=!1}g.zb(h?g.ob(f):f,e)}}};
g.Fe=function(a){return Ce(document,a)};
Ce=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.Ge=function(a){return document.createTextNode(String(a))};
g.He=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.Ie=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.Je=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
nba=function(a){return mba&&void 0!=a.children?a.children:g.Ke(a.childNodes,function(b){return 1==b.nodeType})};
g.Le=function(a){var b;if(oba&&!(g.ye&&g.be("9")&&!g.be("10")&&g.A.SVGElement&&a instanceof g.A.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Ma(b)&&1==b.nodeType?b:null};
g.Me=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
ne=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.Re=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.He(a);var c=ne(a);a.appendChild(c.createTextNode(String(b)))}};
Ue=function(a){var b;"A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?b=!a.disabled&&(!Se(a)||Te(a)):b=Se(a)&&Te(a);if(b&&g.ye){var c;"function"!==typeof a.getBoundingClientRect||g.ye&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Se=function(a){return g.ye&&!g.be("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
Te=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
We=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Ve(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&g.fb(f.className.split(/\s+/),c))},!0,d)};
Ve=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
me=function(a){this.i=a||g.A.document||document};
Xe=function(a,b,c,d){var e=window,f="//pagead2.googlesyndication.com/bg/"+g.qd(c)+".js";c=e.document;var h={};b&&(h._scs_=b);h._bgu_=f;h._bgp_=d;h._li_="v_h.3.0.0.0";(b=e.GoogleTyFxhY)&&"function"==typeof b.push||(b=e.GoogleTyFxhY=[]);b.push(h);e=pe(c).createElement("SCRIPT");e.type="text/javascript";e.async=!0;a=Saa(g.ec("//tpc.googlesyndication.com/sodar/%{path}"),{path:g.qd(a)+".js"});g.jd(e,a);c.getElementsByTagName("head")[0].appendChild(e)};
g.D=function(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(m){try{l(b.next(m))}catch(n){e(n)}}
function h(m){try{l(b["throw"](m))}catch(n){e(n)}}
function l(m){m.done?d(m.value):(new c(function(n){n(m.value)})).then(f,h)}
l((b=b.apply(a,void 0)).next())})};
pba=function(a){return g.Pc(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};
g.Ye=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
g.Ze=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var h=a[c++],l=a[c++];e=((e&7)<<18|(f&63)<<12|(h&63)<<6|l&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],h=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|h&63)}return b.join("")};
af=function(a,b,c){this.l=null;this.i=this.u=this.B=0;this.C=!1;a&&$e(this,a,b,c)};
cf=function(a,b,c){if(bf.length){var d=bf.pop();a&&$e(d,a,b,c);return d}return new af(a,b,c)};
$e=function(a,b,c,d){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?g.df(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.l=b;a.B=void 0!==c?c:0;a.u=void 0!==d?a.B+d:a.l.length;a.i=a.B};
ef=function(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=a.l[a.i++],c|=(b&127)<<7*e;128<=b&&(b=a.l[a.i++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=a.l[a.i++],d|=(b&127)<<7*e+3;if(128>b){a=c>>>0;b=d>>>0;if(d=b&2147483648)a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0);a=4294967296*b+(a>>>0);return d?-a:a}a.C=!0};
ff=function(a){var b=a.l;var c=b[a.i+0];var d=c&127;if(128>c)return a.i+=1,d;c=b[a.i+1];d|=(c&127)<<7;if(128>c)return a.i+=2,d;c=b[a.i+2];d|=(c&127)<<14;if(128>c)return a.i+=3,d;c=b[a.i+3];d|=(c&127)<<21;if(128>c)return a.i+=4,d;c=b[a.i+4];d|=(c&15)<<28;if(128>c)return a.i+=5,d>>>0;a.i+=5;128<=b[a.i++]&&128<=b[a.i++]&&128<=b[a.i++]&&128<=b[a.i++]&&a.i++;return d};
gf=function(a){this.i=cf(a,void 0,void 0);this.C=this.i.i;this.l=this.u=-1;this.B=!1};
hf=function(a){var b=a.i;(b=b.i==b.u)||(b=a.B)||(b=a.i,b=b.C||0>b.i||b.i>b.u);if(b)return!1;a.C=a.i.i;b=ff(a.i);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.B=!0,!1;a.u=b>>>3;a.l=c;return!0};
jf=function(a){switch(a.l){case 0:if(0!=a.l)jf(a);else{for(a=a.i;a.l[a.i]&128;)a.i++;a.i++}break;case 1:1!=a.l?jf(a):a.i.advance(8);break;case 2:if(2!=a.l)jf(a);else{var b=ff(a.i);a.i.advance(b)}break;case 5:5!=a.l?jf(a):a.i.advance(4);break;case 3:b=a.u;do{if(!hf(a)){a.B=!0;break}if(4==a.l){a.u!=b&&(a.B=!0);break}jf(a)}while(1);break;default:a.B=!0}};
kf=function(a){var b=ff(a.i);a=a.i;var c=a.l,d=a.i,e=d+b;b=[];for(var f="";d<e;){var h=c[d++];if(128>h)b.push(h);else if(192>h)continue;else if(224>h){var l=c[d++];b.push((h&31)<<6|l&63)}else if(240>h){l=c[d++];var m=c[d++];b.push((h&15)<<12|(l&63)<<6|m&63)}else if(248>h){l=c[d++];m=c[d++];var n=c[d++];h=(h&7)<<18|(l&63)<<12|(m&63)<<6|n&63;h-=65536;b.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=b.length&&(f+=String.fromCharCode.apply(null,b),b.length=0)}c=f;if(8192>=b.length)b=String.fromCharCode.apply(null,
b);else{e="";for(f=0;f<b.length;f+=8192)h=qb(b,f,f+8192),e+=String.fromCharCode.apply(null,h);b=e}a.i=d;return c+b};
lf=function(a){var b=ff(a.i);a=a.i;if(0>b||a.i+b>a.l.length)a.C=!0,b=new Uint8Array(0);else{var c=a.l.subarray(a.i,a.i+b);a.i+=b;b=c}return b};
mf=function(){this.i=[]};
qf=function(a,b){for(;127<b;)a.i.push(b&127|128),b>>>=7;a.i.push(b)};
rf=function(a,b){a.i.push(b>>>0&255);a.i.push(b>>>8&255);a.i.push(b>>>16&255);a.i.push(b>>>24&255)};
g.uf=function(a,b){void 0===b&&(b=0);sf();b=tf[b];for(var c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,h=f?a[d+1]:0,l=d+2<a.length,m=l?a[d+2]:0,n=e>>2;e=(e&3)<<4|h>>4;h=(h&15)<<2|m>>6;m&=63;l||(m=64,f||(h=64));c.push(b[n],b[e],b[h]||"",b[m]||"")}return c.join("")};
g.vf=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return g.uf(b,3)};
qba=function(a){var b=[];wf(a,function(c){b.push(c)});
return b};
g.df=function(a){!g.ye||g.be("10");var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;wf(a,function(f){d[e++]=f});
return d.subarray(0,e)};
wf=function(a,b){function c(m){for(;d<a.length;){var n=a.charAt(d++),p=xf[n];if(null!=p)return p;if(!g.pc(n))throw Error("Unknown base64 encoding at char: "+n);}return m}
sf();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=l&&b(h<<6&192|l))}};
sf=function(){if(!xf){xf={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));tf[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===xf[f]&&(xf[f]=e)}}}};
yf=function(){this.l=[];this.u=0;this.i=new mf};
Bf=function(a,b,c){if(null!=c&&null!=c){qf(a.i,8*b);a=a.i;var d=c;c=0>d;d=Math.abs(d);b=d>>>0;d=Math.floor((d-b)/4294967296);d>>>=0;c&&(d=~d>>>0,b=(~b>>>0)+1,4294967295<b&&(b=0,d++,4294967295<d&&(d=0)));zf=b;Af=d;c=zf;for(b=Af;0<b||127<c;)a.i.push(c&127|128),c=(c>>>7|b<<25)>>>0,b>>>=7;a.i.push(c)}};
Cf=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Cf(d):d)}return b}if(Df&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Cf(d):d);return b};
rba=function(a){return null==a||a instanceof Uint8Array?a:"string"===typeof a?g.df(a):null};
Ef=function(){};
If=function(a,b,c){a.l=null;Ff&&(b||(b=Ff),Ff=null);b||(b=[]);a.J=void 0;a.B=-1;a.i=b;a:{if(b=a.i.length){--b;var d=a.i[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||Df&&d instanceof Uint8Array)){a.C=b-a.B;a.u=d;break a}}a.C=Number.MAX_VALUE}a.G={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.C?(d+=a.B,a.i[d]=a.i[d]||Gf):(Hf(a),a.u[d]=a.u[d]||Gf)};
Hf=function(a){var b=a.C+a.B;a.i[b]||(a.u=a.i[b]={})};
Jf=function(a,b){if(b<a.C){b+=a.B;var c=a.i[b];return c!==Gf?c:a.i[b]=[]}if(a.u)return c=a.u[b],c===Gf?a.u[b]=[]:c};
Kf=function(a,b){a=Jf(a,b);return null==a?0:a};
Lf=function(a,b,c){b<a.C?a.i[b+a.B]=c:(Hf(a),a.u[b]=c)};
Mf=function(a,b,c){0!==c?Lf(a,b,c):b<a.C?a.i[b+a.B]=null:(Hf(a),delete a.u[b]);return a};
Nf=function(a){if(a.l)for(var b in a.l){var c=a.l[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&Nf(c[d]);else c&&Nf(c)}return a.i};
Of=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};
Pf=function(a){return a?a.passive&&sba()?a:a.capture||!1:!1};
Qf=function(a,b,c,d){return a.addEventListener?(a.addEventListener(b,c,Pf(d)),!0):!1};
Rf=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,Pf(void 0))};
Uf=function(){return!Tf()&&(Wc("iPod")||Wc("iPhone")||Wc("Android")||Wc("IEMobile"))};
Tf=function(){return Wc("iPad")||Wc("Android")&&!Wc("Mobile")||Wc("Silk")};
Vf=function(a){try{return!!a&&null!=a.location.href&&Yd(a,"foo")}catch(b){return!1}};
Wf=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
uba=function(){var a=[];Wf(tba,function(b){a.push(b)});
return a};
wba=function(a){return(a=vba.exec(a))&&a[0]||""};
xba=function(){var a=Xf;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};
zba=function(){var a=g.Fe("IFRAME"),b={};g.zb(yba(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
Yf=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
Zf=function(a){return a.right-a.left};
$f=function(a,b,c){b instanceof g.he?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,"number"===typeof c&&(a.top+=c,a.bottom+=c));return a};
g.ag=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
bg=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
cg=function(){};
eg=function(a,b){if(b!==dg)throw Error("Bad secret");this.i=a};
Aba=function(a){if(a instanceof cg)if(a instanceof eg)a=a.i;else throw Error("wrong type");else a=g.Ec(a);return a};
fg=function(a){this.isValid=a};
gg=function(a){return new fg(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})};
ig=function(a){hg();return cd(a,null)};
g.jg=function(a){hg();return mc(a)};
g.lg=function(a,b,c){if("string"===typeof b)(b=kg(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=kg(c,d);f&&(c.style[f]=e)}};
kg=function(a,b){var c=mg[b];if(!c){var d=vd(b);c=d;void 0===a.style[d]&&(d=(g.Ae?"Webkit":ng?"Moz":g.ye?"ms":g.og?"O":null)+gba(d),void 0!==a.style[d]&&(c=d));mg[b]=c}return c};
g.pg=function(a,b){var c=a.style[vd(b)];return"undefined"!==typeof c?c:a.style[kg(a,b)]||""};
qg=function(a,b){var c=ne(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""};
rg=function(a,b){return qg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.tg=function(a,b,c){if(b instanceof g.he){var d=b.x;b=b.y}else d=b,b=c;a.style.left=g.sg(d,!1);a.style.top=g.sg(b,!1)};
ug=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};
Bba=function(a){if(g.ye&&!g.ce(8))return a.offsetParent;var b=ne(a),c=rg(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=rg(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.vg=function(a){var b=ne(a),c=new g.he(0,0);var d=b?ne(b):document;d=!g.ye||g.ce(9)||"CSS1Compat"==pe(d).i.compatMode?d.documentElement:d.body;if(a==d)return c;a=ug(a);b=ze(pe(b).i);c.x=a.left+b.x;c.y=a.top+b.y;return c};
xg=function(a,b){var c=new g.he(0,0),d=Be(ne(a));if(!Yd(d,"parent"))return c;do{var e=d==b?g.vg(a):wg(a);c.x+=e.x;c.y+=e.y}while(d&&d!=b&&d!=d.parent&&(a=d.frameElement)&&(d=d.parent));return c};
g.zg=function(a,b){a=yg(a);b=yg(b);return new g.he(a.x-b.x,a.y-b.y)};
wg=function(a){a=ug(a);return new g.he(a.left,a.top)};
yg=function(a){if(1==a.nodeType)return wg(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.he(a.clientX,a.clientY)};
g.Ag=function(a,b,c){if(b instanceof g.je)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=g.sg(b,!0);a.style.height=g.sg(c,!0)};
g.sg=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Bg=function(a){var b=Cba;if("none"!=rg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
Cba=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.Ae&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=ug(a),new g.je(a.right-a.left,a.bottom-a.top)):new g.je(b,c)};
g.Fg=function(a,b){a.style.display=b?"":"none"};
Jg=function(){if(Gg&&!Vf(Hg)){var a="."+Ig.domain;try{for(;2<a.split(".").length&&!Vf(Hg);)Ig.domain=a=a.substr(a.indexOf(".")+1),Hg=window.parent}catch(b){}Vf(Hg)||(Hg=window)}return Hg};
Kg=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.je(b.innerWidth,b.innerHeight)).round():we(b||window).round()}catch(d){return new g.je(-12245933,-12245933)}};
Lg=function(a,b,c){try{a&&(b=b.top);var d=Kg(a,b,void 0===c?!1:c),e=ze(pe(b.document).i);if(-12245933==d.width){var f=d.width;var h=new Yf(f,f,f,f)}else h=new Yf(e.y,e.x+d.width,e.y+d.height,e.x);return h}catch(l){return new Yf(-12245933,-12245933,-12245933,-12245933)}};
Dba=function(a){var b={};g.zb(a,function(c){var d=c.event,e=b[d];b.hasOwnProperty(d)?null!==e&&(c.i(e)||(b[d]=null)):b[d]=c});
Kaa(a,function(c){return null===b[c.event]})};
Mg=function(){this.Oc=0;this.i=!1;this.l=-1;this.qo=!1;this.Og=0};
Ng=function(){this.l=null;this.i=!1};
Og=function(a){Ng.call(this);this.u=a};
Pg=function(){Ng.call(this)};
Qg=function(){Ng.call(this)};
Rg=function(){this.i={};this.l=!0;this.u={}};
Sg=function(a,b,c){a.i[b]||(a.i[b]=new Og(c));return a.i[b]};
Eba=function(a){a.i.queryid||(a.i.queryid=new Qg)};
Tg=function(a,b,c){(a=a.i[b])&&a.setValue(c)};
Ug=function(a,b){if(Lb(a.u,b))return a.u[b];if(a=a.i[b])return a.getValue()};
Vg=function(a){var b={},c=g.Cb(a.i,function(d){return d.i});
g.Bb(c,function(d,e){d=void 0!==a.u[e]?String(a.u[e]):d.i&&null!==d.l?String(d.l):"";0<d.length&&(b[e]=d)},a);
return b};
Fba=function(a){a=Vg(a);var b=[];g.Bb(a,function(c,d){d in Object.prototype||"undefined"!=typeof c&&b.push([d,":",c].join(""))});
return b};
Gba=function(){this.i=this.xm=null};
Wg=function(){};
Yg=function(){if(!Xg())throw Error();};
Xg=function(){return!(!Zg||!Zg.performance)};
$g=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
ah=function(){};
dh=function(a){a=a||bh();for(var b=new ch(g.A.location.href,g.A,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&Hba.test(f.url)&&(c=f);if(f.url&&!f.LA){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new Iba(b,e,c)};
bh=function(){var a=g.A,b=[],c=null;do{var d=a;if(Vf(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new ch(e||"",d));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=g.A;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.LA=!0);return b};
Iba=function(a,b,c){this.i=a;this.l=b;this.u=c};
ch=function(a,b,c){this.url=a;this.Rf=b;this.LA=!!c;this.depth=null};
eh=function(){this.u="&";this.l={};this.B=0;this.i=[]};
fh=function(a,b){var c={};c[a]=b;return[c]};
hh=function(a,b,c,d,e){var f=[];Wf(a,function(h,l){(h=gh(h,b,c,d,e))&&f.push(l+"="+h)});
return f.join(b)};
gh=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(gh(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(hh(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};
Kba=function(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Jba(a)-c.length;if(0>d)return"";a.i.sort(function(p,r){return p-r});
c=null;for(var e="",f=0;f<a.i.length;f++)for(var h=a.i[f],l=a.l[h],m=0;m<l.length;m++){if(!d){c=null==c?h:c;break}var n=hh(l[m],a.u,",$");if(n){n=e+n;if(d>=n.length){d-=n.length;b+=n;e=a.u;break}c=null==c?h:c}}a="";null!=c&&(a=e+"trn="+c);return b+a+""};
Jba=function(a){var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return 3997-b-a.u.length-1};
ih=function(a,b){this.i=a;this.depth=b};
Mba=function(){function a(l,m){return null==l?m:l}
var b=bh(),c=Math.max(b.length-1,0),d=dh(b);b=d.i;var e=d.l,f=d.u,h=[];f&&h.push(new ih([f.url,f.LA?2:0],a(f.depth,1)));e&&e!=f&&h.push(new ih([e.url,2],0));b.url&&b!=f&&h.push(new ih([b.url,0],a(b.depth,c)));d=g.Pc(h,function(l,m){return h.slice(0,h.length-m)});
!b.url||(f||e)&&b!=f||(e=wba(b.url))&&d.push([new ih([e,1],a(b.depth,c))]);d.push([]);return g.Pc(d,function(l){return Lba(c,l)})};
Lba=function(a,b){g.jh(b,function(e){return 0<=e.depth});
var c=kh(b,function(e,f){return Math.max(e,f.depth)},-1),d=Oaa(c+2);
d[0]=a;g.zb(b,function(e){return d[e.depth+1]=e.i});
return d};
Nba=function(){var a=Mba();return g.Pc(a,function(b){return gh(b)})};
lh=function(){this.l=new ah;this.i=Xg()?new Yg:new Wg};
Oba=function(){mh();var a=Zg.document;return!!(a&&a.body&&a.body.getBoundingClientRect&&"function"===typeof Zg.setInterval&&"function"===typeof Zg.clearInterval&&"function"===typeof Zg.setTimeout&&"function"===typeof Zg.clearTimeout)};
nh=function(a){mh();var b=Jg()||Zg;b.google_image_requests||(b.google_image_requests=[]);var c=b.document.createElement("img");c.src=a;b.google_image_requests.push(c)};
oh=function(){mh();return Nba()};
ph=function(){};
mh=function(){return ph.getInstance().getContext()};
qh=function(a){If(this,a,null)};
Pba=function(a){this.u=a;this.i=-1;this.l=this.B=0};
rh=function(a,b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];if(-1<a.i)return b.apply(null,g.ma(d));try{return a.i=a.u.i.now(),b.apply(null,g.ma(d))}finally{a.B+=a.u.i.now()-a.i,a.i=-1,a.l+=1}}};
Qba=function(a,b){this.l=a;this.u=b;this.i=new Pba(a)};
Rba=function(){};
th=function(){this.u=void 0;this.l=this.G=0;this.C=-1;this.featureSet=new Rg;Sg(this.featureSet,"mv",Sba).i=!0;Sg(this.featureSet,"omid",sh);Sg(this.featureSet,"epoh",sh).i=!0;Sg(this.featureSet,"epph",sh).i=!0;Sg(this.featureSet,"umt",sh).i=!0;Sg(this.featureSet,"phel",sh).i=!0;Sg(this.featureSet,"phell",sh).i=!0;Sg(this.featureSet,"oseid",Tba).i=!0;var a=this.featureSet;a.i.sloi||(a.i.sloi=new Pg);a.i.sloi.i=!0;Sg(this.featureSet,"ovms",Uba).i=!0;Sg(this.featureSet,"xdi",sh).i=!0;Sg(this.featureSet,
"amp",sh).i=!0;Sg(this.featureSet,"prf",sh).i=!0;Sg(this.featureSet,"gtx",sh).i=!0;Sg(this.featureSet,"mvp_lv",sh).i=!0;Sg(this.featureSet,"vcm",sh).i=!0;Sg(this.featureSet,"ssmol",sh).i=!0;Sg(this.featureSet,"aud",sh).i=!0;this.i=new Qba(mh(),this.featureSet);this.B=!1;this.flags=new Rba};
Vba=function(){var a="https:";Zg&&Zg.location&&"http:"===Zg.location.protocol&&(a="http:");this.l=a;this.i=.01;this.u=Math.random()};
uh=function(a,b,c,d,e){if((d?a.u:Math.random())<(e||a.i))try{if(c instanceof eh)var f=c;else f=new eh,Wf(c,function(l,m){var n=f,p=n.B++;l=fh(m,l);n.i.push(p);n.l[p]=l});
var h=Kba(f,a.l,"/pagead/gen_204?id="+b+"&");h&&nh(h)}catch(l){}};
vh=function(){var a=g.A.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):g.Ra()};
yh=function(){var a=void 0===a?g.A:a;return(a=a.performance)&&a.now?a.now():null};
Wba=function(a,b){var c=yh()||vh();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};
Ah=function(){var a=Jg();this.events=[];this.l=a||g.A;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.i=zh()||(null!=b?b:1>Math.random())};
Ch=function(a){a&&Bh&&zh()&&(Bh.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Bh.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))};
Fh=function(){var a=Dh;this.i=Eh;this.yF="jserror";this.gC=!0;this.ez=null;this.l=this.ZA;this.yb=void 0===a?null:a};
Ih=function(a,b,c,d){return rh(th.getInstance().i.i,function(){try{if(a.yb&&a.yb.i){var e=a.yb.start(b.toString(),3);var f=c();a.yb.end(e)}else f=c()}catch(m){var h=a.gC;try{Ch(e);var l=new Gh(Hh(m));h=a.l(b,l,void 0,d)}catch(n){a.ZA(217,n)}if(!h)throw m;}return f})()};
Kh=function(a,b,c){var d=Jh;return rh(th.getInstance().i.i,function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];return Ih(d,a,function(){return b.apply(void 0,f)},c)})};
Hh=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Gh=function(a){Of.call(this,Error(a),{message:a})};
Lh=function(){var a=Jg();a&&"undefined"!=typeof a.google_measure_js_timing&&(a.google_measure_js_timing||Dh.disable())};
Xba=function(a){Jh.ez=function(b){g.zb(a,function(c){c(b)})}};
Mh=function(a,b){return Ih(Jh,a,b,void 0)};
Nh=function(a,b){return Kh(a,b,void 0)};
Oh=function(a,b,c,d){Jh.ZA(a,b,c,d)};
Ph=function(){return Date.now()-Yba};
Zba=function(){var a=th.getInstance().u,b=0<=Qh?Ph()-Qh:-1,c=Rh?Ph()-Sh:-1,d=0<=Th?Ph()-Th:-1;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];Oh(637,Error(),.001);var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var h=e[b];break}void 0===h&&(h=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:h};
Uh=function(a,b,c){var d=new Yf(0,0,0,0);this.time=a;this.volume=null;this.u=b;this.i=d;this.l=c};
Vh=function(a,b,c,d,e,f,h){this.B=a;this.u=b;this.G=c;this.i=d;this.C=e;this.l=f;this.J=h};
Wh=function(a){for(var b=0,c=a,d=0;a&&a!=a.parent;)a=a.parent,d++,Vf(a)&&(c=a,b=d);return{Rf:c,level:b}};
Xh=function(a){var b=a!==a.top,c=a.top===Wh(a).Rf,d=-1,e=0;if(b&&c&&a.top.mraid){d=3;var f=a.top.mraid}else d=(f=a.mraid)?b?c?2:1:0:-1;f&&(f.IS_GMA_SDK||(e=2),Fb($ba,function(h){return"function"===typeof f[h]})||(e=1));
return{Fi:f,compatibility:e,xS:d}};
aca=function(a){return(a=a.document)&&"function"===typeof a.elementFromPoint};
Yh=function(a,b,c,d){var e=void 0===e?!1:e;c=Kh(d,c,void 0);Qf(a,b,c,{capture:e})};
Zh=function(a,b){b=Math.pow(10,b);return Math.floor(a*b)/b};
$h=function(a){return new Yf(a.top,a.right,a.bottom,a.left)};
ai=function(a){var b=a.top||0,c=a.left||0;return new Yf(b,c+(a.width||0),b+(a.height||0),c)};
bi=function(a){return null!=a&&0<=a&&1>=a};
bca=function(){var a=g.Vc;return a?ci("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"),function(b){return xc(a,b)})||xc(a,"OMI/")&&!xc(a,"XiaoMi/")?!0:xc(a,"Presto")&&xc(a,"Linux")&&!xc(a,"X11")&&!xc(a,"Android")&&!xc(a,"Mobi"):!1};
di=function(){this.u=!Vf(Zg.top);this.isMobileDevice=Tf()||Uf();var a=bh();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.Bd(a[a.length-1].url)||"":"";this.i=new Yf(0,0,0,0);this.B=new g.je(0,0);this.C=new g.je(0,0);this.J=new Yf(0,0,0,0);this.G=0;this.L=!1;this.l=!(!Zg||!Xh(Zg).Fi);this.update(Zg)};
ei=function(a,b){b&&b.screen&&(a.B=new g.je(b.screen.width,b.screen.height))};
fi=function(a,b){var c=a.i?new g.je(Zf(a.i),a.i.getHeight()):new g.je(0,0);b=void 0===b?Zg:b;null!==b&&b!=b.top&&(b=b.top);var d=0,e=0;try{var f=b.document,h=f.body,l=f.documentElement;if("CSS1Compat"==f.compatMode&&l.scrollHeight)d=l.scrollHeight!=c.height?l.scrollHeight:l.offsetHeight,e=l.scrollWidth!=c.width?l.scrollWidth:l.offsetWidth;else{var m=l.scrollHeight,n=l.scrollWidth,p=l.offsetHeight,r=l.offsetWidth;l.clientHeight!=p&&(m=h.scrollHeight,n=h.scrollWidth,p=h.offsetHeight,r=h.offsetWidth);
m>c.height?m>p?(d=m,e=n):(d=p,e=r):m<p?(d=m,e=n):(d=p,e=r)}var t=new g.je(e,d)}catch(u){t=new g.je(-12245933,-12245933)}a.C=t};
gi=function(){var a=di.getInstance();if(0<a.G||a.L)return!0;a=mh().l.isVisible();var b=0===$g(Ig);return a||b};
hi=function(a){this.u=a;this.l=0;this.i=null};
ii=function(a,b,c){this.Rf=a;this.Ea=void 0===c?"na":c;this.B=[];this.Md=!1;this.u=new Uh(-1,!0,this);this.i=this;this.J=b;this.V=this.L=!1;this.ra="uk";this.ma=!1;this.C=!0};
ki=function(a,b,c){if(!a.V||(void 0===c?0:c))a.V=!0,a.ra=b,a.J=0,a.i!=a||ji(a)};
li=function(a,b){g.fb(a.B,b)||(a.B.push(b),b.jq(a.i),b.lm(a.u),b.Zj()&&(a.L=!0))};
mi=function(a){a=a.i;a.eD();a.dD();var b=di.getInstance();b.J=Lg(!1,a.Rf,b.isMobileDevice);fi(di.getInstance(),a.Rf);a.u.i=a.aG()};
ni=function(a){a.L=a.B.length?ci(a.B,function(b){return b.Zj()}):!1};
oi=function(a){var b=g.ob(a.B);g.zb(b,function(c){c.lm(a.u)})};
ji=function(a){var b=g.ob(a.B);g.zb(b,function(c){c.jq(a.i)});
a.i!=a||oi(a)};
pi=function(a,b,c,d){this.element=a;this.i=new Yf(0,0,0,0);this.Y=null;this.B=new Yf(0,0,0,0);this.l=b;this.featureSet=c;this.ma=d;this.X=!1;this.timestamp=-1;this.J=new Vh(b.u,this.i,new Yf(0,0,0,0),0,0,Ph(),0)};
qi=function(a){this.C=!1;this.i=a;this.B=g.Ia};
ri=function(a,b,c){this.u=void 0===c?0:c;this.l=a;this.i=null==b?"":b};
cca=function(a){switch(Math.trunc(a.u)){case -16:return-16;case -8:return-8;case 0:return 0;case 8:return 8;case 16:return 16;default:return 16}};
si=function(a,b){return a.u<b.u?!0:a.u>b.u?!1:a.l<b.l?!0:a.l>b.l?!1:typeof a.i<typeof b.i?!0:typeof a.i>typeof b.i?!1:a.i<b.i};
ti=function(){this.u=0;this.i=[];this.l=!1};
dca=function(a,b){(0,g.zb)(b.i,function(c){a.add(c.l,c.i,cca(c))})};
ui=function(a,b){var c=void 0===c?0:c;var d=void 0===d?!0:d;Wf(b,function(e,f){d&&void 0===e||a.add(f,e,c)});
return a};
vi=function(a){var b=eca;a.l&&(g.wb(a.i,function(c,d){return si(d,c)?1:si(c,d)?-1:0}),a.l=!1);
return kh(a.i,function(c,d){d=b(d);return""+c+(""!=c&&""!=d?"&":"")+d},"")};
eca=function(a){var b=a.l;a=a.i;return""===a?b:"boolean"===typeof a?a?b:"":Array.isArray(a)?0===a.length?b:b+"="+a.join():b+"="+(g.fb(["mtos","tos","p"],b)?a:encodeURIComponent(a))};
xi=function(a){var b=void 0===b?!0:b;this.i=new ti;void 0!==a&&dca(this.i,a);b&&this.i.add("v",wi,-16)};
fca=function(a){var b=[],c=[];g.Bb(a,function(d,e){if(!(e in Object.prototype)&&"undefined"!=typeof d)switch(Array.isArray(d)&&(d=d.join(",")),d=[e,"=",d].join(""),e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}});
return b.concat(c)};
yi=function(){if(wi&&"unreleased"!==wi)return wi};
Di=function(a){var b=void 0===b?4E3:b;a=a.toString();if(!/&v=[^&]+/.test(a)){var c=yi();a=c?a+"&v="+encodeURIComponent(c):a}a=a.substring(0,b);nh(a)};
Ei=function(){this.i=0};
g.Fi=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Gi=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.La(d)?g.Gi.apply(null,d):g.Fi(d)}};
g.F=function(){this.rh=this.rh;this.Tg=this.Tg};
g.G=function(a,b){g.Hi(a,g.Pa(g.Fi,b))};
g.Hi=function(a,b){a.rh?b():(a.Tg||(a.Tg=[]),a.Tg.push(b))};
gca=function(a,b,c){(0,g.zb)(a.u,function(d){var e=a.i;if(!d.i&&(d.u(b,c),d.B())){d.i=!0;var f=d.l(),h=new ti;h.add("id","av-js");h.add("type","verif");h.add("vtype",d.C);d=Ei.getInstance();h.add("i",d.i++);h.add("adk",e);ui(h,f);e=new xi(h);Di(e)}})};
Ii=function(){this.l=this.u=this.B=this.i=0};
Ji=function(a){this.l=a=void 0===a?hca:a;this.i=g.Pc(this.l,function(){return new Ii})};
Li=function(a,b){return Ki(a,function(c){return c.i},void 0===b?!0:b)};
Ni=function(a,b){return Mi(a,b,function(c){return c.i})};
Oi=function(a,b){return Ki(a,function(c){return c.u},void 0===b?!0:b)};
Pi=function(a,b){return Mi(a,b,function(c){return c.u})};
Qi=function(a,b){return Mi(a,b,function(c){return c.l})};
Ri=function(a){g.zb(a.i,function(b){b.l=0})};
Ki=function(a,b,c){a=g.Pc(a.i,function(d){return b(d)});
return c?a:ica(a)};
Mi=function(a,b,c){var d=g.cb(a.l,function(e){return b<=e});
return-1==d?0:c(a.i[d])};
ica=function(a){return g.Pc(a,function(b,c,d){return 0<c?d[c]-d[c-1]:d[c]})};
Si=function(){this.l=new Ji;this.Da=new Ii;this.Y=this.J=-1;this.Na=1E3;this.Ua=new Ji([1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0]);this.xa=this.ma=-1};
Ti=function(a,b){return Oi(a.l,void 0===b?!0:b)};
Vi=function(a,b){b=Ui(b);return 0===b?0:Ui(a)/b};
Ui=function(a){return Math.max(a.bottom-a.top,0)*Math.max(a.right-a.left,0)};
jca=function(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=g.Le(a)||a){var d=ne(a),e=d&&Be(d),f=e&&e.frameElement;f&&(a=f)}}catch(h){break}}return!1};
kca=function(a,b,c){if(!a||!b)return!1;b=$f(a.clone(),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;var d=Jg();Vf(d.top)&&d.top&&d.top.document&&(d=d.top);if(!aca(d))return!1;a=d.document.elementFromPoint(a,b);if(!a)return!1;b=(b=(b=ne(c))&&b.defaultView&&b.defaultView.frameElement)&&jca(b,a);d=a===c;a=!d&&a&&Ve(a,function(e){return e===c});
return!(b||d||a)};
lca=function(a,b,c,d){return di.getInstance().u?!1:0>=Zf(a)||0>=a.getHeight()?!0:c&&d?Mh(208,function(){return kca(a,b,c)}):!1};
Wi=function(a,b,c){g.F.call(this);this.position=mca.clone();this.ww=this.Fv();this.XA=-2;this.KS=Date.now();this.oJ=-1;this.lastUpdateTime=b;this.ew=null;this.bv=!1;this.Gw=null;this.opacity=-1;this.requestSource=c;this.yJ=this.bB=g.Ia;this.xg=new Gba;this.xg.xm=a;this.xg.i=a;this.qq=!1;this.Ln={iB:null,gB:null};this.YI=!0;this.Rt=null;this.kq=this.hO=!1;th.getInstance().G++;this.Re=this.kA();this.jJ=-1;this.cd=null;this.eO=!1;a=this.featureSet=new Rg;Sg(a,"od",nca);Sg(a,"opac",sh).i=!0;Sg(a,"sbeos",
sh).i=!0;Sg(a,"prf",sh).i=!0;Sg(a,"mwt",sh).i=!0;Sg(a,"iogeo",sh);(a=this.xg.xm)&&a.getAttribute&&!/-[a-z]/.test("googleAvInapp")&&(oca&&a.dataset?"googleAvInapp"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+wd()):a.getAttribute("data-"+wd()))&&(di.getInstance().l=!0);1==this.requestSource?Tg(this.featureSet,"od",1):Tg(this.featureSet,"od",0)};
Xi=function(a,b){b!=a.kq&&(a.kq=b,a=di.getInstance(),b?a.G++:0<a.G&&a.G--)};
Yi=function(a,b){if(a.cd){if(b.getName()===a.cd.getName())return;a.cd.dispose();a.cd=null}b=b.create(a.xg.i,a.featureSet,a.Zj());if(b=null!=b&&b.iy()?b:null)a.cd=b};
Zi=function(a,b,c){if(!a.ew||-1==a.lastUpdateTime||-1===b.l||-1===a.ew.l)return 0;a=b.l-a.ew.l;return a>c?0:a};
pca=function(a,b,c){if(a.cd){a.cd.Gl();var d=a.cd.J,e=d.B,f=e.i;if(null!=d.G){var h=d.u;a.Gw=new g.he(h.left-f.left,h.top-f.top)}f=a.vx()?Math.max(d.i,d.C):d.i;h={};null!==e.volume&&(h.volume=e.volume);e=a.WF(d);a.ew=d;a.Ka(f,b,c,!1,h,e,d.J)}};
qca=function(a){if(a.bv&&a.Rt){var b=1==Ug(a.featureSet,"od"),c=di.getInstance().i,d=a.Rt,e=a.cd?a.cd.getName():"ns",f=new g.je(Zf(c),c.getHeight());c=a.vx();a={zS:e,Gw:a.Gw,hT:f,vx:c,Oc:a.Re.Oc,fT:b};if(b=d.l){b.Gl();e=b.J;f=e.B.i;var h=null,l=null;null!=e.G&&f&&(h=e.u,h=new g.he(h.left-f.left,h.top-f.top),l=new g.je(f.right-f.left,f.bottom-f.top));e=c?Math.max(e.i,e.C):e.i;c={zS:b.getName(),Gw:h,hT:l,vx:c,fT:!1,Oc:e}}else c=null;c&&gca(d,a,c)}};
rca=function(a,b,c){b&&(a.bB=b);c&&(a.yJ=c)};
g.$i=function(){};
sca=function(){this.B=this.i=this.u=this.l=this.C=0};
tca=function(a){var b={};b=(b.ptlt=g.Ra()-a.C,b);var c=a.l;c&&(b.pnk=c);(c=a.u)&&(b.pnc=c);(c=a.B)&&(b.pnmm=c);(a=a.i)&&(b.pns=a);return b};
aj=function(){Mg.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.mediaTime=-1};
bj=function(a){return Ug(th.getInstance().featureSet,"aud")?bi(a.volume)&&0<a.volume:bi(a.volume)&&.1<=a.volume};
uca=function(){var a={};this.l=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.avs=[64,0],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a);this.i={};for(var b in this.l)0<this.l[b][1]&&(this.i[b]=0);this.u=0};
cj=function(a,b){var c=a.l[b],d=c[1];a.u+=c[0];0<d&&0==a.i[b]&&(a.i[b]=1)};
vca=function(a){var b=g.Kb(a.l),c=0,d;for(d in a.i)g.fb(b,d)&&1==a.i[d]&&(c+=a.l[d][1],a.i[d]=2);return c};
wca=function(a){var b=0,c;for(c in a.i){var d=a.i[c];if(1==d||2==d)b+=a.l[c][1]}return b};
dj=function(){this.i=this.l=0};
ej=function(){Si.call(this);this.u=new Ii;this.Ea=this.V=this.ra=0;this.L=-1;this.Ta=new Ii;this.C=new Ii;this.i=new Ji;this.G=this.B=-1;this.X=new Ii;this.Na=2E3;this.ya=new dj;this.La=new dj;this.Fa=new dj};
fj=function(a,b,c){var d=a.Ea;Rh||c||-1==a.L||(d+=b-a.L);return d};
gj=function(a){return Ug(th.getInstance().featureSet,"aud")?0<a.B:.1<=a.B};
xca=function(){this.i=!1};
hj=function(a,b){this.i=!1;this.l=a;this.L=b;this.u=0};
jj=function(a,b){return a.B(b)?(b=ij(a.L,a.l,b),a.u|=b,0==b):!1};
kj=function(a,b,c,d){pi.call(this,a,b,c,d)};
lj=function(a,b,c){pi.call(this,null,a,b,c);this.G=a.isActive();this.C=0};
mj=function(a){return[a.top,a.left,a.bottom,a.right]};
nj=function(a,b,c,d,e,f){e=void 0===e?null:e;f=void 0===f?[]:f;Wi.call(this,b,c,d);this.Kz=0;this.Ve={};this.Je=new uca;this.KJ={};this.tf="";this.zq=null;this.Ta=!1;this.i=[];this.Do=e;this.G=f;this.B=null;this.u=-1;this.Ea=this.V=void 0;this.Y=this.X=0;this.xa=-1;this.Na=this.La=!1;this.ra=this.J=this.l=this.Tq=this.Ua=0;new Ji;this.ya=this.Da=0;this.Fa=-1;this.cg=0;this.L=g.Ia;this.ma=[this.Fv()];this.Xa=2;this.gp={};this.gp.pause="p";this.gp.resume="r";this.gp.skip="s";this.gp.mute="m";this.gp.unmute=
"um";this.gp.exitfullscreen="ef";this.C=null};
oj=function(a){0!=a.cg&&(a.cg=3)};
pj=function(a){return void 0===a?a:Number(a)?Zh(a,3):0};
qj=function(a,b){return a.ma[null!=b&&b<a.ma.length?b:a.ma.length-1]};
rj=function(a){var b=!!Ug(th.getInstance().featureSet,"umt");return a.V||!b&&!a.Ea?0:1};
yca=function(a,b){a.Sk()?b=0:-1==a.lastUpdateTime?b=0:(b-=a.lastUpdateTime,b=b>Math.max(1E4,a.u/3)?0:b);var c=a.L(a)||{};c=void 0!==c.currentTime?c.currentTime:a.X;var d=c-a.X,e=0;0<=d?(a.Y+=b,a.ya+=Math.max(b-d,0),e=Math.min(d,a.Y)):a.Da+=Math.abs(d);0!=d&&(a.Y=0);-1==a.Fa&&0<d&&(a.Fa=0<=Th?Ph()-Th:-1);a.X=c;return e};
zca=function(a,b){ci(a.G,function(c){return c.l==b.l})||a.G.push(b)};
sj=function(a,b,c){return 15E3<=b?!0:a.La?(void 0===c?0:c)?!0:0<a.u?b>=a.u/2:0<a.xa?b>=a.xa:!1:!1};
Aca=function(a){var b=Zh(a.Re.Oc,2),c=a.Je.u,d=a.Re,e=qj(a),f=pj(e.B),h=pj(e.G),l=pj(d.volume),m=Zh(e.J,2),n=Zh(e.Y,2),p=Zh(d.Oc,2),r=Zh(e.ma,2),t=Zh(e.xa,2);d=Zh(d.Og,2);a=a.cm().clone();a.round();e=Ti(e,!1);return{gT:b,Ms:c,xw:f,pw:h,Hr:l,yw:m,qw:n,Oc:p,zw:r,uw:t,Og:d,position:a,Ew:e}};
uj=function(a,b){tj(a.i,b,function(){return{gT:0,Ms:void 0,xw:-1,pw:-1,Hr:-1,yw:-1,qw:-1,Oc:-1,zw:-1,uw:-1,Og:-1,position:void 0,Ew:[]}});
a.i[b]=Aca(a)};
tj=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
xj=function(a,b,c){var d=a.KJ[b];if(null!=d)return d;d=Bca(a,b);var e=Nb(vj,function(f){return f==b});
a=wj(a,d,d,c,Cca[vj[e]]);"fully_viewable_audible_half_duration_impression"==b&&(a.std="csm");return a};
yj=function(a,b,c){var d=[b];if(a!=b||c!=b)d.unshift(a),d.push(c);return d};
wj=function(a,b,c,d,e){if(a.qq)return{"if":0};var f=a.cm().clone();f.round();var h=di.getInstance(),l=th.getInstance(),m=a.Bg(),n=a.cd?a.cd.getName():"ns",p={};p["if"]=h.u?1:void 0;p.sdk=a.B?a.B:void 0;p.t=a.KS;p.p=[f.top,f.left,f.bottom,f.right];if(f=a.cd?a.cd.Y:null)f=f.clone(),f.round(),p.cp=mj(f);p.tos=Li(m.l,!1);p.mtos=Ti(m);p.mcvt=m.Da.u;p.ps=void 0;f=fj(m,Ph(),a.Sk());p.vht=f;p.mut=m.Ta.u;p.a=pj(a.Re.volume);p.mv=pj(m.G);p.fs=a.kq?1:0;p.ft=m.X.i;p.at=m.C.i;p.as=gj(m)?1:0;p.atos=Li(m.i);p.ssb=
Li(m.Ua,!1);p.amtos=Oi(m.i,!1);p.uac=a.Ua;p.vpt=m.u.i;"nio"==n&&(p.nio=1,p.avms="nio");p.gmm="4";p.gdr=sj(a,m.u.i,!0)?1:0;p.efpf=a.Xa;if("gsv"==n||"nis"==n)n=a.cd,0<n.C&&(p.nnut=n.C);p.tcm=rj(a);p.nmt=a.Da;p.bt=a.ya;p.pst=a.Fa;p.vpaid=a.V;p.dur=a.u;p.vmtime=a.X;p.is=a.Je.u;1<=a.i.length&&(p.i0=a.i[0].Ms,p.a0=[a.i[0].Hr],p.c0=[a.i[0].Oc],p.ss0=[a.i[0].Og],n=a.i[0].position,p.p0=n?mj(n):void 0);2<=a.i.length&&(p.i1=a.i[1].Ms,p.a1=yj(a.i[1].xw,a.i[1].Hr,a.i[1].pw),p.c1=yj(a.i[1].yw,a.i[1].Oc,a.i[1].qw),
p.ss1=yj(a.i[1].zw,a.i[1].Og,a.i[1].uw),n=a.i[1].position,p.p1=n?mj(n):void 0,p.mtos1=a.i[1].Ew);3<=a.i.length&&(p.i2=a.i[2].Ms,p.a2=yj(a.i[2].xw,a.i[2].Hr,a.i[2].pw),p.c2=yj(a.i[2].yw,a.i[2].Oc,a.i[2].qw),p.ss2=yj(a.i[2].zw,a.i[2].Og,a.i[2].uw),n=a.i[2].position,p.p2=n?mj(n):void 0,p.mtos2=a.i[2].Ew);4<=a.i.length&&(p.i3=a.i[3].Ms,p.a3=yj(a.i[3].xw,a.i[3].Hr,a.i[3].pw),p.c3=yj(a.i[3].yw,a.i[3].Oc,a.i[3].qw),p.ss3=yj(a.i[3].zw,a.i[3].Og,a.i[3].uw),n=a.i[3].position,p.p3=n?mj(n):void 0,p.mtos3=a.i[3].Ew);
p.cs=wca(a.Je);b&&(p.ic=vca(a.Je),p.dvpt=m.u.l,p.dvs=Qi(m.l,.5),p.dfvs=Qi(m.l,1),p.davs=Qi(m.i,.5),p.dafvs=Qi(m.i,1),c&&(m.u.l=0,Ri(m.l),Ri(m.i)),a.xo()&&(p.dtos=m.ra,p.dav=m.V,p.dtoss=a.Kz+1,c&&(m.ra=0,m.V=0,a.Kz++)),p.dat=m.C.l,p.dft=m.X.l,c&&(m.C.l=0,m.X.l=0));p.ps=[h.C.width,h.C.height];p.bs=[Zf(h.i),h.i.getHeight()];p.scs=[h.B.width,h.B.height];p.dom=h.domain;a.Tq&&(p.vds=a.Tq);if(0<a.G.length||a.Do)b=g.ob(a.G),a.Do&&b.push(a.Do),p.pings=g.Pc(b,function(r){return r.toString()});
b=g.Pc(g.Ke(a.G,function(r){return r.C()}),function(r){return r.getId()});
Laa(b);p.ces=b;a.l&&(p.vmer=a.l);a.J&&(p.vmmk=a.J);a.ra&&(p.vmiec=a.ra);p.avms=a.cd?a.cd.getName():"ns";a.cd&&g.Xb(p,a.cd.Yl());d?(p.c=Zh(a.Re.Oc,2),p.ss=Zh(a.Re.Og,2)):p.tth=Ph()-zj;p.mc=Zh(m.Y,2);p.nc=Zh(m.J,2);p.mv=pj(m.G);p.nv=pj(m.B);p.lte=Zh(a.XA,2);d=qj(a,e);Ti(m);p.qmtos=Ti(d);p.qnc=Zh(d.J,2);p.qmv=pj(d.G);p.qnv=pj(d.B);p.qas=gj(d)?1:0;p.qi=a.tf;p.avms||(p.avms="geo");p.psm=m.ya.i;p.psv=m.ya.getValue();p.psfv=m.La.getValue();p.psa=m.Fa.getValue();l=Fba(l.featureSet);l.length&&(p.veid=l);a.C&&
g.Xb(p,tca(a.C));return p};
Bca=function(a,b){if(g.fb(Dca,b))return!0;var c=a.Ve[b];return void 0!==c?(a.Ve[b]=!0,!c):!1};
Fca=function(){this.i={};var a=Be();Aj(this,a,document);var b=Eca();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)Aj(this,c,c.document);Aj(this,a.top,a.top.document)}}catch(d){}};
Eca=function(){var a=document.documentElement;try{if(!Vf(Be().top))return"2";var b=[],c=Be(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
Aj=function(a,b,c){Yh(c,"mousedown",function(){return Gca(a)},301);
Yh(b,"scroll",function(){return Hca(a)},302);
Yh(c,"touchmove",function(){return Ica(a)},303);
Yh(c,"mousemove",function(){return Jca(a)},304);
Yh(c,"keydown",function(){return Kca(a)},305)};
Gca=function(a){g.Bb(a.i,function(b){1E5<b.u||++b.u})};
Hca=function(a){g.Bb(a.i,function(b){1E5<b.i||++b.i})};
Ica=function(a){g.Bb(a.i,function(b){1E5<b.i||++b.i})};
Kca=function(a){g.Bb(a.i,function(b){1E5<b.l||++b.l})};
Jca=function(a){g.Bb(a.i,function(b){1E5<b.B||++b.B})};
g.Cj=function(a){var b=[];Bj(new Lca,a,b);return b.join("")};
Lca=function(){};
Bj=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Bj(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Dj(d,c),c.push(":"),Bj(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Dj(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Dj=function(a,b){b.push('"',a.replace(Mca,function(c){var d=Ej[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ej[c]=d);return d}),'"')};
Fj=function(){this.i=[];this.l=[]};
Gj=function(a,b){return g.bb(a.i,function(c){return c.tf==b})};
Hj=function(a,b){return b?g.bb(a.i,function(c){return c.xg.xm==b}):null};
Nca=function(a,b){return g.bb(a.l,function(c){return 2==c.Fj()&&c.tf==b})};
Jj=function(){var a=Ij;return 0==a.i.length?a.l:0==a.l.length?a.i:g.nb(a.l,a.i)};
Kj=function(a,b){a=1==b.Fj()?a.i:a.l;var c=ab(a,function(d){return d==b});
return-1!=c?(a.splice(c,1),b.cd&&b.cd.Yq(),b.dispose(),!0):!1};
Oca=function(a){var b=Ij;if(Kj(b,a)){switch(a.Fj()){case 0:var c=function(){return null};
case 2:c=function(){return Nca(b,a.tf)};
break;case 1:c=function(){return Gj(b,a.tf)}}for(var d=c();d;d=c())Kj(b,d)}};
Pca=function(a,b){var c=Ij;a=g.Ke(a,(void 0===b?0:b)?function(d){return!Gj(c,d.tf)}:function(d){return!Hj(c,d.xg.xm)});
c.i.push.apply(c.i,g.ma(a))};
Pj=function(a){var b=Ij,c=[];g.zb(a,function(d){ci(b.i,function(e){return e.xg.xm===d.xg.xm&&e.tf===d.tf})||(b.i.push(d),c.push(d))})};
Qj=function(){this.i=this.l=null};
Rj=function(a,b){function c(d,e){b(d,e)}
if(null==a.l)return!1;a.i=g.bb(a.l,function(d){return null!=d&&d.fD()});
a.i&&(a.i.init(c)?mi(a.i.i):b(a.i.i.bq(),a.i));return null!=a.i};
Sj=function(a){a=Qca(a);qi.call(this,a.length?a[a.length-1]:new ii(Zg,0));this.u=a;this.l=null};
Qca=function(a){if(!a.length)return[];a=(0,g.Ke)(a,function(c){return null!=c&&c.Xq()});
for(var b=1;b<a.length;b++)li(a[b-1],a[b]);return a};
Tj=function(a,b,c,d){pi.call(this,a,b,c,d);this.V=this.L=this.C=this.G=this.u=null};
Uj=function(a){return a.u&&a.u.takeRecords?a.u.takeRecords():[]};
Sca=function(a){if(!a.element)return!1;var b=a.element,c=a.l.i.Rf,d=th.getInstance().i.i;a.u=new c.IntersectionObserver(rh(d,function(e){return Vj(a,e)}),Rca);
d=rh(d,function(){a.u.unobserve(b);a.u.observe(b);Vj(a,Uj(a))});
c.ResizeObserver?(a.G=new c.ResizeObserver(d),a.G.observe(b)):c.MutationObserver&&(a.C=new g.A.MutationObserver(d),a.C.observe(b,{attributes:!0,childList:!0,characterData:!0,subtree:!0}));a.u.observe(b);Vj(a,Uj(a));return!0};
Vj=function(a,b){try{if(b.length){a.L||(a.L=Ph());var c=Tca(b),d=xg(a.element,a.l.i.Rf),e=d.x,f=d.y;a.i=new Yf(Math.round(f),Math.round(e)+c.boundingClientRect.width,Math.round(f)+c.boundingClientRect.height,Math.round(e));var h=$h(c.intersectionRect);a.B=$f(h,a.i.left-h.left,a.i.top-h.top)}}catch(l){a.Yq(),Oh(299,l)}};
Tca=function(a){return kh(a,function(b,c){return b.time>c.time?b:c},a[0])};
Wj=function(a){a=void 0===a?Zg:a;qi.call(this,new ii(a,2))};
Yj=function(){var a=Xj();ii.call(this,Zg.top,a,"geo")};
Xj=function(){th.getInstance();var a=di.getInstance();return a.u||a.l?0:2};
Zj=function(){};
ak=function(){this.done=!1;this.i={wM:0,GE:0,Y5:0,wF:0,IA:-1,QM:0,PM:0,RM:0};this.C=null;this.G=!1;this.u=null;this.J=0;this.l=new hi(this)};
ck=function(){var a=bk;a.G||(a.G=!0,Uca(a,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.B.apply(a,g.ma(c))}),a.B())};
Vca=function(){Zj.getInstance();var a=Qj.getInstance();null!=a.i&&a.i.i?mi(a.i.i):di.getInstance().update(Zg)};
dk=function(a,b,c){if(!a.done&&(a.l.cancel(),0!=b.length)){a.u=null;try{Vca();var d=Ph(),e=th.getInstance();e.C=d;if(null!=Qj.getInstance().i)for(e=0;e<b.length;e++)pca(b[e],d,c);else uh(Eh,"",{strategy_not_selected:1,bin:e.l},!0,void 0);for(d=0;d<b.length;d++)qca(b[d]);++a.i.wF;Wca()}finally{c?g.zb(b,function(f){f.Re.Oc=0}):a.l.schedule()}}};
Uca=function(a,b){if(!a.C){b=Kh(142,b,void 0);mh();var c;Ig.visibilityState?c="visibilitychange":Ig.mozVisibilityState?c="mozvisibilitychange":Ig.webkitVisibilityState&&(c="webkitvisibilitychange");c&&Qf(Ig,c,b,{capture:!1})&&(a.C=b)}};
ek=function(){var a=Qj.getInstance();if(null!=a.i){var b=a.i;g.zb(Jj(),function(c){return Yi(c,b)})}};
Wca=function(){var a=th.getInstance();Ug(a.featureSet,"llp")};
fk=function(a,b){a=a.J;Rh&&(a+=b-Sh);return a};
Xca=function(a){var b=bk;a=void 0===a?function(){return{}}:a;
Jh.yF="av-js";Eh.i=.01;Xba([function(c){var d=th.getInstance(),e={};e=(e.bin=d.l,e.type="error",e);d=Vg(d.featureSet);if(!b.u){var f=Zg.document,h=0<=Qh?Ph()-Qh:-1,l=Ph();-1==b.i.IA&&(h=l);var m=di.getInstance(),n=th.getInstance(),p=Vg(n.featureSet),r=Jj();try{if(0<r.length){var t=m.i;t&&(p.bs=[Zf(t),t.getHeight()]);var u=m.C;u&&(p.ps=[u.width,u.height]);Zg.screen&&(p.scs=[Zg.screen.width,Zg.screen.height])}else p.url=encodeURIComponent(Zg.location.href.substring(0,512)),f.referrer&&(p.referrer=encodeURIComponent(f.referrer.substring(0,
512)));p.tt=h;p.pt=Qh;p.bin=n.l;void 0!==Zg.google_osd_load_pub_page_exp&&(p.olpp=Zg.google_osd_load_pub_page_exp);p.deb=[1,b.i.wM,b.i.GE,b.i.wF,b.i.IA,0,b.l.l,b.i.QM,b.i.PM,b.i.RM].join("-");p.tvt=fk(b,l);m.l&&(p.inapp=1);if(null!==Zg&&Zg!=Zg.top){0<r.length&&(p.iframe_loc=encodeURIComponent(Zg.location.href.substring(0,512)));var x=m.J;p.is=[Zf(x),x.getHeight()]}}catch(B){p.error=1}b.u=p}t=g.Tb(b.u);u=th.getInstance().i;if(1==Ug(u.u,"prf")){x=new qh;f=u.i;h=0;-1<f.i&&(h=f.u.i.now()-f.i);x=Mf(x,
1,f.B+h);f=u.i;x=Mf(x,5,-1<f.i?f.l+1:f.l);x=Mf(x,2,u.l.i.u());x=Mf(x,3,u.l.i.l());f=Mf(x,4,u.l.i.i());u={};x=new yf;var y=void 0===y?0:y;h=Jf(f,1);h=null==h?h:+h;y=null==h?y:h;if(0!==y&&(h=y,null!=h)){qf(x.i,9);y=x.i;m=h;m=(h=0>m?1:0)?-m:m;if(0===m)Af=0<1/m?0:2147483648,zf=0;else if(isNaN(m))Af=2147483647,zf=4294967295;else if(1.7976931348623157E308<m)Af=(h<<31|2146435072)>>>0,zf=0;else if(2.2250738585072014E-308>m)m/=Math.pow(2,-1074),Af=(h<<31|m/4294967296)>>>0,zf=m>>>0;else{n=m;l=0;if(2<=n)for(;2<=
n&&1023>l;)l++,n/=2;else for(;1>n&&-1022<l;)n*=2,l--;m*=Math.pow(2,-l);Af=(h<<31|l+1023<<20|1048576*m&1048575)>>>0;zf=4503599627370496*m>>>0}rf(y,zf);rf(y,Af)}y=Kf(f,2);0!==y&&Bf(x,2,y);y=Kf(f,3);0!==y&&Bf(x,3,y);y=Kf(f,4);0!==y&&Bf(x,4,y);y=Kf(f,5);if(0!==y&&(f=y,null!=f&&null!=f))if(qf(x.i,40),y=x.i,0<=f)qf(y,f);else{for(h=0;9>h;h++)y.i.push(f&127|128),f>>=7;y.i.push(1)}y=new Uint8Array(x.u+x.i.length());h=x.l;l=h.length;for(m=f=0;m<l;m++)n=h[m],y.set(n,f),f+=n.length;h=x.i.end();y.set(h,f);x.l=
[y];y=(u.pf=g.uf(y),u)}else y={};g.Xb(t,y);g.Xb(c,e,d,t,a());if(e=yi())d={},g.Xb(c,(d.v=encodeURIComponent(e),d))}])};
Yca=function(){var a=gk||Zg;if(!a)return"";var b=[];if(!a.location||!a.location.href)return"";b.push("url="+encodeURIComponent(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+encodeURIComponent(a.document.referrer.substring(0,512)));return b.join("&")};
hk=function(a){return function(b){return void 0===b[a]?0:b[a]}};
jk=function(){var a=[0,2,4];return function(b){b=b.tos;if(Array.isArray(b)){for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=0<d?c[d-1]+b[d]:b[d];return void 0!==a?ik(c,a):c}}};
kk=function(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?function(){return!0}:d;
return function(e){var f=e[a];if(Array.isArray(f)&&d(e))return ik(f,b,c)}};
lk=function(a,b){return function(c){return b(c)?c[a]:void 0}};
mk=function(a){return function(b){for(var c=0;c<a.length;c++)if(a[c]===b.e||void 0===a[c]&&!b.hasOwnProperty("e"))return!0;return!1}};
ik=function(a,b,c){return void 0===c||c?g.Ke(a,function(d,e){return g.fb(b,e)}):g.Pc(b,function(d,e,f){return a.slice(0<e?f[e-1]+1:0,d+1).reduce(function(h,l){return h+l},0)})};
pk=function(a,b){var c={sv:"894",cb:"j"};c.nas=Ij.i.length;c.msg=a;void 0!==b&&(a=nk(b))&&(c.e=ok[a]);return c};
qk=function(a){return nc(a,"custom_metric_viewable")};
nk=function(a){var b=qk(a)?"custom_metric_viewable":a.toLowerCase();return Nb(vj,function(c){return c==b})};
Zca=function(){this.i=void 0;this.l=!1;this.u=0;this.B=-1;this.C="tos"};
ada=function(a){try{var b=a.split(",");return b.length>g.Kb($ca).length?null:kh(b,function(c,d){d=d.toLowerCase().split("=");if(2!=d.length||void 0===rk[d[0]]||!rk[d[0]](d[1]))throw Error("Entry ("+d[0]+", "+d[1]+") is invalid.");c[d[0]]=d[1];return c},{})}catch(c){return null}};
bda=function(a,b){if(void 0==a.i)return 0;switch(a.C){case "mtos":return a.l?Pi(b.i,a.i):Pi(b.l,a.i);case "tos":return a.l?Ni(b.i,a.i):Ni(b.l,a.i)}return 0};
sk=function(a,b,c,d){hj.call(this,b,d);this.G=a;this.J=c};
tk=function(a){hj.call(this,"fully_viewable_audible_half_duration_impression",a)};
uk=function(a,b){hj.call(this,a,b)};
vk=function(){this.l=this.B=this.G=this.C=this.u=this.i=""};
cda=function(){};
wk=function(a,b,c,d,e){var f={};if(void 0!==a)if(null!=b)for(var h in b){var l=b[h];h in Object.prototype||null!=l&&(f[h]="function"===typeof l?l(a):a[l])}else g.Xb(f,a);void 0!==c&&g.Xb(f,c);a=vi(ui(new ti,f));0<a.length&&void 0!==d&&void 0!==e&&(e=e(a),a+="&"+d+"="+e);return a};
xk=function(){};
yk=function(a,b,c){lj.call(this,a,b,c)};
zk=function(a){a=void 0===a?Zg:a;qi.call(this,new ii(a,2))};
Ak=function(a,b,c){lj.call(this,a,b,c)};
Bk=function(a){a=void 0===a?Zg:a;qi.call(this,new ii(a,2))};
Ck=function(){ii.call(this,Zg,2,"mraid");this.xa=0;this.X=this.Y=!1;this.G=null;this.l=Xh(this.Rf);this.u.i=new Yf(0,0,0,0);this.ya=!1};
Dk=function(a,b,c){a.Lm("addEventListener",b,c)};
Gk=function(a){th.getInstance().B=!!a.Lm("isViewable");Dk(a,"viewableChange",dda);"loading"===a.Lm("getState")?Dk(a,"ready",Ek):Fk(a)};
Fk=function(a){"string"===typeof a.l.Fi.AFMA_LIDAR?(a.Y=!0,eda(a)):(a.l.compatibility=3,a.G="nc",ki(a,"w"))};
eda=function(a){a.X=!1;var b=1==Ug(th.getInstance().featureSet,"rmmt"),c=!!a.Lm("isViewable");(b?!c:1)&&mh().setTimeout(Nh(524,function(){a.X||(Hk(a),Oh(540,Error()),a.G="mt",ki(a,"w"))}),500);
fda(a);Dk(a,a.l.Fi.AFMA_LIDAR,Ik)};
fda=function(a){var b=1==Ug(th.getInstance().featureSet,"sneio"),c=void 0!==a.l.Fi.AFMA_LIDAR_EXP_1,d=void 0!==a.l.Fi.AFMA_LIDAR_EXP_2;(b=b&&d)&&(a.l.Fi.AFMA_LIDAR_EXP_2=!0);c&&(a.l.Fi.AFMA_LIDAR_EXP_1=!b)};
Hk=function(a){a.Lm("removeEventListener",a.l.Fi.AFMA_LIDAR,Ik);a.Y=!1};
Jk=function(a,b){if("loading"===a.Lm("getState"))return new g.je(-1,-1);b=a.Lm(b);if(!b)return new g.je(-1,-1);a=parseInt(b.width,10);b=parseInt(b.height,10);return isNaN(a)||isNaN(b)?new g.je(-1,-1):new g.je(a,b)};
Ek=function(){try{var a=Ck.getInstance();a.Lm("removeEventListener","ready",Ek);Fk(a)}catch(b){Oh(541,b)}};
Ik=function(a,b){try{var c=Ck.getInstance();c.X=!0;var d=a?new Yf(a.y,a.x+a.width,a.y+a.height,a.x):new Yf(0,0,0,0);var e=Ph(),f=gi();var h=new Uh(e,f,c);h.i=d;h.volume=b;c.lm(h)}catch(l){Oh(542,l)}};
dda=function(a){var b=th.getInstance(),c=Ck.getInstance();a&&!b.B&&(b.B=!0,c.ya=!0,c.G&&ki(c,"w",!0))};
Kk=function(){this.Md=!1;this.i=null;this.u=new xk;this.l=null;var a={};this.L=(a.start=this.SN,a.firstquartile=this.NN,a.midpoint=this.PN,a.thirdquartile=this.TN,a.complete=this.LN,a.pause=this.BB,a.resume=this.NI,a.skip=this.RN,a.viewable_impression=this.fm,a.mute=this.Qq,a.unmute=this.Qq,a.fullscreen=this.ON,a.exitfullscreen=this.MN,a.fully_viewable_audible_half_duration_impression=this.fm,a.measurable_impression=this.fm,a.abandon=this.BB,a.engagedview=this.fm,a.impression=this.fm,a.creativeview=
this.fm,a.progress=this.Qq,a.custom_metric_viewable=this.fm,a.bufferstart=this.BB,a.bufferfinish=this.NI,a);a={};this.V=(a.overlay_resize=this.QN,a.abandon=this.CA,a.close=this.CA,a.collapse=this.CA,a.overlay_unmeasurable_impression=function(b){return xj(b,"overlay_unmeasurable_impression",gi())},a.overlay_viewable_immediate_impression=function(b){return xj(b,"overlay_viewable_immediate_impression",gi())},a.overlay_unviewable_impression=function(b){return xj(b,"overlay_unviewable_impression",gi())},
a.overlay_viewable_end_of_session_impression=function(b){return xj(b,"overlay_viewable_end_of_session_impression",gi())},a);
th.getInstance().l=3;gda(this);this.B=!1};
Lk=function(a,b,c,d){b=a.Ct(null,d,!0,b);b.B=c;Pca([b],a.B);return b};
hda=function(a,b,c){Dba(b);var d=a.l;g.zb(b,function(e){var f=g.Pc(e.l,function(h){var l=ada(h);if(null==l)h=null;else if(h=new Zca,null!=l.visible&&(h.i=l.visible/100),null!=l.audible&&(h.l=1==l.audible),null!=l.time){var m="mtos"==l.timetype?"mtos":"tos",n=oc(l.time,"%")?"%":"ms";l=parseInt(l.time,10);"%"==n&&(l/=100);"ms"==n?(h.u=l,h.B=-1):(h.u=-1,h.B=l);h.C=void 0===m?"tos":m}return h});
ci(f,function(h){return null==h})||zca(c,new sk(e.id,e.event,f,d))})};
ida=function(a){a=a.l;return[new uk("viewable_impression",a),new tk(a)]};
jda=function(){var a=[],b=th.getInstance();a.push(Yj.getInstance());Ug(b.featureSet,"mvp_lv")&&a.push(Ck.getInstance());b=[new zk,new Bk];b.push(new Sj(a));b.push(new Wj(Zg));return b};
kda=function(a){if(!a.Md){a.Md=!0;try{var b=Ph(),c=th.getInstance(),d=di.getInstance();Qh=b;c.u=79463069;"o"!==a.i&&(gk=Wh(Zg).Rf);if(Oba()){bk.i.GE=0;bk.i.IA=Ph()-b;var e=jda(),f=Qj.getInstance();f.l=e;Rj(f,function(){Mk()})?bk.done||(ek(),li(f.i.i,a),ck()):d.u?Mk():ck()}else Nk=!0}catch(h){throw Ij.reset(),h;
}}};
Pk=function(a){bk.l.cancel();Ok=a;bk.done=!0};
Qk=function(a){if(a.i)return a.i;var b=Qj.getInstance().i;if(b)switch(b.getName()){case "nis":a.i="n";break;case "gsv":a.i="m"}a.i||(a.i="h");return a.i};
Rk=function(a,b,c){if(null==a.l)return b.Tq|=4,!1;a=ij(a.l,c,b);b.Tq|=a;return 0==a};
Mk=function(){var a=[new Wj(Zg)],b=Qj.getInstance();b.l=a;Rj(b,function(){Pk("i")})?bk.done||(ek(),ck()):Pk("i")};
Sk=function(a,b,c){if(!b.Ta){var d=xj(b,"start",gi());a=a.u.i(d).i;var e={id:"lidarv"};e.r=c;e.v="894v";Ed(a,function(f,h){return e[f]="mtos"==f||"tos"==f?h:encodeURIComponent(h)});
c=Yca();Ed(c,function(f,h){return e[f]=encodeURIComponent(h)});
c="//pagead2.googlesyndication.com/pagead/gen_204?"+vi(ui(new ti,e));Di(c);b.Ta=!0}};
Tk=function(a,b,c){dk(bk,[a],!gi());uj(a,c);4!=c&&tj(a.ma,c,a.Fv);return xj(a,b,gi())};
gda=function(a){Xca(function(){var b=Uk();null!=a.i&&(b.sdk=a.i);var c=Qj.getInstance();null!=c.i&&(b.avms=c.i.getName());return b})};
lda=function(a,b,c,d){if(a.B)var e=Gj(Ij,b);else e=Hj(Ij,c),null!==e&&e.tf!==b&&(a.Vr(e),e=null);e||(b=a.Ct(c,Ph(),!1,b),0==Ij.l.length&&(th.getInstance().u=79463069),Pj([b]),e=b,e.B=Qk(a),d&&(e.zq=d));return e};
mda=function(a,b){b.J=0;for(var c in Vk)null==a[c]&&(b.J|=Vk[c]);Wk(a,"currentTime");Wk(a,"duration")};
nda=function(a){g.zb(Ij.i,function(b){3==b.cg&&a.Vr(b)})};
Wk=function(a,b){var c=a[b];void 0!==c&&0<c&&(a[b]=Math.floor(1E3*c))};
Uk=function(){var a=di.getInstance(),b={};return b.sv="894",b["if"]=a.u?"1":"0",b.nas=String(Ij.i.length),b};
Xk=function(a){return!a||"function"!==typeof a||0>String(Function.prototype.toString).indexOf("[native code]")?!1:0<=String(a).indexOf("[native code]")&&!0||!1};
Zk=function(a){return!!(1<<a&Yk)};
sda=function(){try{oda()}catch(d){}var a="a=1&b="+Yk+"&",b=[],c=99;g.zb(pda,function(d,e){var f=!1;try{f=d(Zg)}catch(h){}b[e/32>>>0]|=f<<e%32});
g.zb(b,function(d,e){a+=String.fromCharCode(c+e)+"="+(d>>>0).toString(16)+"&"});
c=105;g.zb(qda,function(d){var e="false";try{e=d(Zg)}catch(f){}a+=String.fromCharCode(c++)+"="+e+"&"});
g.zb(rda,function(d){var e="";try{e=g.vf(d(Zg))}catch(f){}a+=String.fromCharCode(c++)+"="+e+"&"});
return a.slice(0,-1)};
oda=function(){if(!$k){var a=function(){al=!0;Zg.document.removeEventListener("webdriver-evaluate",a,!0)};
Zg.document.addEventListener("webdriver-evaluate",a,!0);var b=function(){bl=!0;Zg.document.removeEventListener("webdriver-evaluate-response",b,!0)};
Zg.document.addEventListener("webdriver-evaluate-response",b,!0);$k=!0}};
cl=function(){this.l=-1};
dl=function(){this.l=64;this.i=Array(4);this.C=Array(this.l);this.B=this.u=0;this.reset()};
el=function(a,b,c){c||(c=0);var d=Array(16);if("string"===typeof b)for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.i[0];c=a.i[1];e=a.i[2];var f=a.i[3];var h=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(h<<12&4294967295|h>>>20);h=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(h<<17&4294967295|h>>>15);
h=c+(b^e&(f^b))+d[3]+3250441966&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(h<<12&4294967295|h>>>20);h=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(h<<17&4294967295|h>>>15);h=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(h<<12&4294967295|
h>>>20);h=e+(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(h<<17&4294967295|h>>>15);h=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(h<<7&4294967295|h>>>25);h=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(h<<12&4294967295|h>>>20);h=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(h<<17&4294967295|h>>>15);h=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(h<<22&4294967295|h>>>10);h=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(h<<
5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(h<<20&4294967295|h>>>12);h=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(h<<5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=
e+(h<<20&4294967295|h>>>12);h=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(h<<5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(h<<20&4294967295|h>>>12);h=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(h<<5&4294967295|h>>>27);h=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(h<<9&4294967295|h>>>23);h=e+(b^c&(f^b))+d[7]+1735328473&4294967295;
e=f+(h<<14&4294967295|h>>>18);h=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(h<<20&4294967295|h>>>12);h=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(h<<11&4294967295|h>>>21);h=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(h<<11&4294967295|
h>>>21);h=e+(f^b^c)+d[7]+4139469664&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(h<<11&4294967295|h>>>21);h=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(h<<4&4294967295|h>>>28);h=f+(b^c^e)+d[12]+
3873151461&4294967295;f=b+(h<<11&4294967295|h>>>21);h=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(h<<16&4294967295|h>>>16);h=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(h<<23&4294967295|h>>>9);h=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(h<<21&4294967295|h>>>11);h=b+(e^(c|~f))+d[12]+1700485571&
4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(h<<21&4294967295|h>>>11);h=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[13]+1309151649&
4294967295;c=e+(h<<21&4294967295|h>>>11);h=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(h<<6&4294967295|h>>>26);h=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(h<<10&4294967295|h>>>22);h=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(h<<15&4294967295|h>>>17);h=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+(e+(h<<21&4294967295|h>>>11))&4294967295;a.i[2]=a.i[2]+e&4294967295;a.i[3]=a.i[3]+f&4294967295};
fl=function(){this.l=null};
gl=function(a){return function(b){var c=new dl;c.update(b+a);return pba(c.digest()).slice(-8)}};
hl=function(a,b){this.u=a;this.B=b};
ij=function(a,b,c){var d=a.i(c);if("function"===typeof d){var e={};e=(e.sv="894",e.cb="j",e.e=tda(b),e);var f=xj(c,b,gi());g.Xb(e,f);c.KJ[b]=f;a=2==c.Fj()?fca(e).join("&"):a.B.i(e).i;try{return d(c.tf,a,b),0}catch(h){return 2}}else return 1};
tda=function(a){var b=qk(a)?"custom_metric_viewable":a;a=Nb(vj,function(c){return c==b});
return ok[a]};
il=function(a,b,c){hl.call(this,a,b);this.l=c};
jl=function(){Kk.call(this);this.G=null;this.C=!1;this.J={};this.u=new fl};
uda=function(a,b,c){c=c.opt_configurable_tracking_events;null!=a.l&&Array.isArray(c)&&hda(a,c,b)};
vda=function(a,b,c){var d=Gj(Ij,b);d||(d=c.opt_nativeTime||-1,d=Lk(a,b,Qk(a),d),c.opt_osdId&&(d.zq=c.opt_osdId));return d};
wda=function(a,b,c){var d=Gj(Ij,b);d||(d=Lk(a,b,"n",c.opt_nativeTime||-1));return d};
xda=function(a,b){var c=Gj(Ij,b);c||(c=Lk(a,b,"h",-1));return c};
yda=function(a){th.getInstance();switch(Qk(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};
ll=function(a,b,c,d){c=void 0===c?{}:c;var e={};g.Xb(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);if(e.opt_bounds)return a.u.i(pk("ol",d));if(void 0!==d)if(void 0!==nk(d))if(Nk)b=pk("ue",d);else if(kda(a),"i"==Ok)b=pk("i",d),b["if"]=0;else if(b=a.Kv(b,e))if(a.B&&3==b.cg)b="stopped";else{b:{"i"==Ok&&(b.qq=!0,a.WB());c=e.opt_fullscreen;void 0!==c&&Xi(b,!!c);var f;if(c=!di.getInstance().l)(c=xc(g.Vc,"CrKey")||xc(g.Vc,"PlayStation")||xc(g.Vc,"Roku")||bca()||xc(g.Vc,"Xbox"))||(c=g.Vc,c=xc(c,"AppleTV")||
xc(c,"Apple TV")||xc(c,"CFNetwork")||xc(c,"tvOS")),c||(c=g.Vc,c=xc(c,"sdk_google_atv_x86")||xc(c,"Android TV")),c=!c;c&&(mh(),c=0===$g(Ig));if(f=c){switch(b.Fj()){case 1:Sk(a,b,"pv");break;case 2:a.OB(b)}Pk("pv")}c=d.toLowerCase();if(f=!f)f=Ug(th.getInstance().featureSet,"ssmol")&&"loaded"===c?!1:g.fb(zda,c);if(f&&0==b.cg){"i"!=Ok&&(bk.done=!1);f=void 0!==e?e.opt_nativeTime:void 0;Th=f="number"===typeof f?f:Ph();b.bv=!0;var h=gi();b.cg=1;b.Ve={};b.Ve.start=!1;b.Ve.firstquartile=!1;b.Ve.midpoint=!1;
b.Ve.thirdquartile=!1;b.Ve.complete=!1;b.Ve.resume=!1;b.Ve.pause=!1;b.Ve.skip=!1;b.Ve.mute=!1;b.Ve.unmute=!1;b.Ve.viewable_impression=!1;b.Ve.measurable_impression=!1;b.Ve.fully_viewable_audible_half_duration_impression=!1;b.Ve.fullscreen=!1;b.Ve.exitfullscreen=!1;b.Kz=0;h||(b.Bg().L=f);dk(bk,[b],!h)}(f=b.gp[c])&&cj(b.Je,f);g.fb(Ada,c)&&!b.qq&&b.Do&&0!=b.cg&&(f=b.Do,f.i||(f.i=jj(f,b)));switch(b.Fj()){case 1:var l=qk(c)?a.L.custom_metric_viewable:a.L[c];break;case 2:l=a.V[c]}if(l&&(d=l.call(a,b,e,
d),void 0!==d)){e=pk(void 0,c);g.Xb(e,d);d=e;break b}d=void 0}3==b.cg&&(a.B?b.cd&&b.cd.Yq():a.Vr(b));b=d}else b=pk("nf",d);else b=void 0;else Nk?b=pk("ue"):(b=a.Kv(b,e))?(d=pk(),g.Xb(d,wj(b,!0,!1,!1)),b=d):b=pk("nf");return"string"===typeof b?a.B&&"stopped"===b?kl:a.u.i(void 0):a.u.i(b)};
ml=function(a){return th.getInstance(),"h"!=Qk(a)&&Qk(a),!1};
nl=function(a){var b={};return b.viewability=a.i,b.googleViewability=a.u,b.moatInit=a.C,b.moatViewability=a.G,b.integralAdsViewability=a.B,b.doubleVerifyViewability=a.l,b};
ol=function(a,b,c){c=void 0===c?{}:c;a=ll(jl.getInstance(),b,c,a);return nl(a)};
pl=function(a,b){b=void 0===b?!1:b;var c=jl.getInstance().Kv(a,{});c?oj(c):b&&(a=jl.getInstance().Ct(null,Ph(),!1,a),a.cg=3,Pj([a]))};
ql=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a};
Bda=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=n=0}
function b(r){for(var t=h,u=0;64>u;u+=4)t[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=t[u-3]^t[u-8]^t[u-14]^t[u-16],t[u]=(r<<1|r>>>31)&4294967295;r=e[0];var x=e[1],y=e[2],B=e[3],H=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var E=B^x&(y^B);var I=1518500249}else E=x^y^B,I=1859775393;else 60>u?(E=x&y|B&(x|y),I=2400959708):(E=x^y^B,I=3395469782);E=((r<<5|r>>>27)&4294967295)+E+H+I+t[u]&4294967295;H=B;B=y;y=(x<<30|x>>>2)&4294967295;x=r;r=E}e[0]=e[0]+r&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+H&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],x=0,y=r.length;x<y;++x)u.push(r.charCodeAt(x));r=u}t||(t=r.length);u=0;if(0==n)for(;u+64<t;)b(r.slice(u,u+64)),u+=64,p+=64;for(;u<t;)if(f[n++]=r[u++],p++,64==n)for(n=0,b(f);u+64<t;)b(r.slice(u,u+64)),u+=64,p+=64}
function d(){var r=[],t=8*p;56>n?c(l,56-n):c(l,64-(n-56));for(var u=63;56<=u;u--)f[u]=t&255,t>>>=8;b(f);for(u=t=0;5>u;u++)for(var x=24;0<=x;x-=8)r[t++]=e[u]>>x&255;return r}
for(var e=[],f=[],h=[],l=[128],m=1;64>m;++m)l[m]=0;var n,p;a();return{reset:a,update:c,digest:d,YM:function(){for(var r=d(),t="",u=0;u<r.length;u++)t+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return t}}};
rl=function(a,b,c){var d=String(g.A.location.href);return d&&a&&b?[b,Cda(ql(d),a,c||null)].join(" "):null};
Cda=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],g.zb(d,function(l){e.push(l)}),sl(e.join(" "));
var f=[],h=[];g.zb(c,function(l){h.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.gb(f)?[c,b,a]:[f.join(":"),c,b,a];g.zb(d,function(l){e.push(l)});
a=sl(e.join(" "));a=[c,a];g.gb(h)||a.push(h.join(""));return a.join("_")};
sl=function(a){var b=Bda();b.update(a);return b.YM().toLowerCase()};
tl=function(a){this.i=a||{cookie:""}};
ul=function(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=yc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
vl=function(a){return!!Dda.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)};
wl=function(a){a=void 0===a?!1:a;var b=g.A.__SAPISID||g.A.__APISID||g.A.__3PSAPISID||g.A.__OVERRIDE_SID;vl(a)&&(b=b||g.A.__1PSAPISID);if(b)return!0;var c=new tl(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");vl(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b};
Cl=function(a,b,c,d){(a=g.A[a])||(a=(new tl(document)).get(b));return a?rl(a,c,d):null};
Dl=function(a){var b=void 0===b?!1:b;var c=ql(String(g.A.location.href)),d=[];if(wl(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?g.A.__SAPISID:g.A.__APISID;e||(e=new tl(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?rl(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&vl(b)&&((b=Cl("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Cl("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")};
Eda=function(a){var b=g.Ha("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.A.$googDebugFname||b}catch(h){e="Not available",c=!0}b=El(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;
if(null==c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Fl[c])c=Fl[c];else{c=String(c);if(!Fl[c]){var f=/function\s+([^\(]+)/m.exec(c);Fl[c]=f?f[1]:"[Anonymous]"}c=Fl[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}};
El=function(a,b){b||(b={});b[Gl(a)]=!0;var c=a.stack||"";(a=a.FM)&&!b[Gl(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=El(a,b));return c};
Gl=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack};
g.Hl=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.l=!1};
Il=function(a,b){g.Hl.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)};
Kl=function(a){return!(!a||!a[Jl])};
Gda=function(a,b,c,d,e){this.listener=a;this.i=null;this.src=b;this.type=c;this.capture=!!d;this.Rd=e;this.key=++Fda;this.Dt=this.Ou=!1};
Ll=function(a){a.Dt=!0;a.listener=null;a.i=null;a.src=null;a.Rd=null};
Ml=function(a){this.src=a;this.listeners={};this.i=0};
Nl=function(a,b){var c=b.type;c in a.listeners&&g.kb(a.listeners[c],b)&&(Ll(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))};
Ol=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Dt&&f.listener==b&&f.capture==!!c&&f.Rd==d)return e}return-1};
Ql=function(a,b,c,d,e){if(d&&d.once)return Pl(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Ql(a,b[f],c,d,e);return null}c=Rl(c);return Kl(a)?a.Oa(b,c,g.Ma(d)?!!d.capture:!!d,e):Sl(a,b,c,!1,d,e)};
Sl=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=g.Ma(e)?!!e.capture:!!e,l=Tl(a);l||(a[Ul]=l=new Ml(a));c=l.add(b,c,d,h,f);if(c.i)return c;d=Hda();c.i=d;d.src=a;d.listener=c;if(a.addEventListener)Ida||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Vl(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Wl++;return c};
Hda=function(){function a(c){return b.call(a.src,a.listener,c)}
var b=Jda;return a};
Pl=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Pl(a,b[f],c,d,e);return null}c=Rl(c);return Kl(a)?a.WA(b,c,g.Ma(d)?!!d.capture:!!d,e):Sl(a,b,c,!0,d,e)};
Xl=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xl(a,b[f],c,d,e);else d=g.Ma(d)?!!d.capture:!!d,c=Rl(c),Kl(a)?a.fc(b,c,d,e):a&&(a=Tl(a))&&(b=a.As(b,c,d,e))&&Yl(b)};
Yl=function(a){if("number"!==typeof a&&a&&!a.Dt){var b=a.src;if(Kl(b))Nl(b.l,a);else{var c=a.type,d=a.i;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Vl(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Wl--;(c=Tl(b))?(Nl(c,a),0==c.i&&(c.src=null,b[Ul]=null)):Ll(a)}}};
Vl=function(a){return a in Zl?Zl[a]:Zl[a]="on"+a};
Jda=function(a,b){if(a.Dt)a=!0;else{b=new Il(b,this);var c=a.listener,d=a.Rd||a.src;a.Ou&&Yl(a);a=c.call(d,b)}return a};
Tl=function(a){a=a[Ul];return a instanceof Ml?a:null};
Rl=function(a){if("function"===typeof a)return a;a[$l]||(a[$l]=function(b){return a.handleEvent(b)});
return a[$l]};
g.am=function(){g.F.call(this);this.l=new Ml(this);this.Na=this;this.Ea=null};
bm=function(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Dt&&h.capture==c){var l=h.listener,m=h.Rd||h.src;h.Ou&&Nl(a.l,h);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
cm=function(a,b){this.u=a;this.B=b;this.l=0;this.i=null};
dm=function(a,b){a.B(b);100>a.l&&(a.l++,b.next=a.i,a.i=b)};
fm=function(a){"function"!==typeof g.A.setImmediate||g.A.Window&&g.A.Window.prototype&&!Wc("Edge")&&g.A.Window.prototype.setImmediate==g.A.setImmediate?(em||(em=Kda()),em(a)):g.A.setImmediate(a)};
Kda=function(){var a=g.A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Wc("Presto")&&(a=function(){var e=g.Fe("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var h="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.C)(function(m){if(("*"==l||m.origin==l)&&m.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,l)}}});
if("undefined"!==typeof a&&!Wc("Trident")&&!Wc("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.XE;c.XE=null;e()}};
return function(e){d.next={XE:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.A.setTimeout(e,0)}};
gm=function(a){g.A.setTimeout(function(){throw a;},0)};
hm=function(){this.l=this.i=null};
im=function(){this.next=this.scope=this.i=null};
g.mm=function(a,b){jm||Lda();km||(jm(),km=!0);lm.add(a,b)};
Lda=function(){if(g.A.Promise&&g.A.Promise.resolve){var a=g.A.Promise.resolve(void 0);jm=function(){a.then(nm)}}else jm=function(){fm(nm)}};
nm=function(){for(var a;a=lm.remove();){try{a.i.call(a.scope)}catch(b){gm(b)}dm(om,a)}km=!1};
pm=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
rm=function(a){this.eb=0;this.Km=void 0;this.Op=this.Hl=this.Lo=null;this.Nv=this.Wz=!1;if(a!=g.Ia)try{var b=this;a.call(void 0,function(c){qm(b,2,c)},function(c){qm(b,3,c)})}catch(c){qm(this,3,c)}};
sm=function(){this.next=this.context=this.onRejected=this.l=this.i=null;this.u=!1};
um=function(a,b,c){var d=tm.get();d.l=a;d.onRejected=b;d.context=c;return d};
vm=function(a){if(a instanceof rm)return a;var b=new rm(g.Ia);qm(b,2,a);return b};
wm=function(a){return new rm(function(b,c){c(a)})};
ym=function(a,b,c){xm(a,b,c,null)||g.mm(g.Pa(b,a))};
Mda=function(a){return new rm(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],ym(e,b,c)})};
Nda=function(a){return new rm(function(b,c){var d=a.length,e=[];if(d)for(var f=function(n,p){d--;e[n]=p;0==d&&b(e)},h=function(n){c(n)},l=0,m;l<a.length;l++)m=a[l],ym(m,g.Pa(f,l),h);
else b(e)})};
Am=function(a,b){b=um(b,b,void 0);b.u=!0;zm(a,b);return a};
g.Cm=function(a,b){return Bm(a,null,b,void 0)};
Dm=function(a,b){if(0==a.eb)if(a.Lo){var c=a.Lo;if(c.Hl){for(var d=0,e=null,f=null,h=c.Hl;h&&(h.u||(d++,h.i==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.eb&&1==d?Dm(c,b):(f?(d=f,d.next==c.Op&&(c.Op=d),d.next=d.next.next):Em(c),Fm(c,e,3,b)))}a.Lo=null}else qm(a,3,b)};
zm=function(a,b){a.Hl||2!=a.eb&&3!=a.eb||Gm(a);a.Op?a.Op.next=b:a.Hl=b;a.Op=b};
Bm=function(a,b,c,d){var e=um(null,null,null);e.i=new rm(function(f,h){e.l=b?function(l){try{var m=b.call(d,l);f(m)}catch(n){h(n)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof Hm?h(l):f(m)}catch(n){h(n)}}:h});
e.i.Lo=a;zm(a,e);return e.i};
qm=function(a,b,c){0==a.eb&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.eb=1,xm(c,a.WS,a.XS,a)||(a.Km=c,a.eb=b,a.Lo=null,Gm(a),3!=b||c instanceof Hm||Oda(a,c)))};
xm=function(a,b,c,d){if(a instanceof rm)return zm(a,um(b||g.Ia,c||null,d)),!0;if(pm(a))return a.then(b,c,d),!0;if(g.Ma(a))try{var e=a.then;if("function"===typeof e)return Pda(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Pda=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function h(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,h,f)}catch(m){f(m)}};
Gm=function(a){a.Wz||(a.Wz=!0,g.mm(a.iN,a))};
Em=function(a){var b=null;a.Hl&&(b=a.Hl,a.Hl=b.next,b.next=null);a.Hl||(a.Op=null);return b};
Fm=function(a,b,c,d){if(3==c&&b.onRejected&&!b.u)for(;a&&a.Nv;a=a.Lo)a.Nv=!1;if(b.i)b.i.Lo=null,Im(b,c,d);else try{b.u?b.l.call(b.context):Im(b,c,d)}catch(e){Jm.call(null,e)}dm(tm,b)};
Im=function(a,b,c){2==b?a.l.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Oda=function(a,b){a.Nv=!0;g.mm(function(){a.Nv&&Jm.call(null,b)})};
Hm=function(a){Va.call(this,a)};
g.Km=function(a,b){g.am.call(this);this.Hf=a||1;this.Yt=b||g.A;this.RE=(0,g.C)(this.JS,this);this.LG=g.Ra()};
g.Lm=function(a,b,c){if("function"===typeof a)c&&(a=(0,g.C)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.C)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.A.setTimeout(a,b||0)};
Mm=function(a,b){var c=null;return g.Cm(new rm(function(d,e){c=g.Lm(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(d){g.A.clearTimeout(c);
throw d;})};
g.Nm=function(a,b){this.l={};this.i=[];this.Sm=this.u=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof g.Nm)for(c=a.Fh(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};
Pm=function(a){if(a.u!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Om(a.l,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.u!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Om(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}};
Om=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Qm=function(a,b){this.i=this.L=this.B="";this.u=null;this.C=this.J="";this.G=!1;var c;a instanceof g.Qm?(this.G=void 0!==b?b:a.G,g.Rm(this,a.B),this.L=a.L,g.Sm(this,a.i),g.Tm(this,a.u),this.J=a.getPath(),Um(this,a.l.clone()),this.C=a.C):a&&(c=String(a).match(zd))?(this.G=!!b,g.Rm(this,c[1]||"",!0),this.L=Vm(c[2]||""),g.Sm(this,c[3]||"",!0),g.Tm(this,c[4]),this.J=Vm(c[5]||"",!0),Um(this,c[6]||"",!0),this.C=Vm(c[7]||"")):(this.G=!!b,this.l=new Wm(null,this.G))};
g.Rm=function(a,b,c){a.B=c?Vm(b,!0):b;a.B&&(a.B=a.B.replace(/:$/,""))};
g.Sm=function(a,b,c){a.i=c?Vm(b,!0):b};
g.Tm=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.u=b}else a.u=null};
Um=function(a,b,c){b instanceof Wm?(a.l=b,Qda(a.l,a.G)):(c||(b=Xm(b,Rda)),a.l=new Wm(b,a.G))};
g.Ym=function(a){return a instanceof g.Qm?a.clone():new g.Qm(a,void 0)};
Vm=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""};
Xm=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Sda),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
Sda=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
Wm=function(a,b){this.l=this.i=null;this.u=a||null;this.B=!!b};
Zm=function(a){a.i||(a.i=new g.Nm,a.l=0,a.u&&Ed(a.u,function(b,c){a.add(pd(b),c)}))};
an=function(a,b){Zm(a);b=$m(a,b);return Om(a.i.l,b)};
g.bn=function(a,b,c){a.remove(b);0<c.length&&(a.u=null,a.i.set($m(a,b),g.ob(c)),a.l=a.l+c.length)};
$m=function(a,b){b=String(b);a.B&&(b=b.toLowerCase());return b};
Qda=function(a,b){b&&!a.B&&(Zm(a),a.u=null,a.i.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),g.bn(this,e,c))},a));
a.B=b};
dn=function(a){if(g.pc(g.rd(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.Qm(a)}catch(c){return null!=g.bb(cn,function(d){return 0<a.search(d)})}return b.C.match(Tda)?!0:null!=g.bb(cn,function(c){return null!=a.match(c)})};
g.en=function(a,b){return a.replace(Uda,function(c,d){try{var e=Rb(b,d);if(null==e)return c;e=e.toString();if(""==e||!g.pc(g.rd(e)))return encodeURIComponent(e).replace(/%2C/g,",")}catch(f){}return c})};
fn=function(){this.i=[];this.l=-1};
Vda=function(a){-1==a.l&&(a.l=kh(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.l};
g.gn=function(a,b,c){g.F.call(this);this.i=null;this.B=!1;this.G=a;this.C=c;this.l=b||window;this.u=(0,g.C)(this.iD,this)};
g.hn=function(a){a.isActive()||a.start()};
jn=function(a){a=a.l;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
kn=function(a){a=a.l;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.J=function(a,b,c){g.F.call(this);this.i=a;this.Hf=b||0;this.l=c;this.u=(0,g.C)(this.jD,this)};
g.ln=function(a,b){a.isActive()||a.start(b)};
g.mn=function(a){a.isActive()&&a.zg()};
nn=function(){this.l=64;this.i=[];this.G=[];this.J=[];this.C=[];this.C[0]=128;for(var a=1;a<this.l;++a)this.C[a]=0;this.B=this.u=0;this.reset()};
on=function(a,b,c){c||(c=0);var d=a.J;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var h=a.i[2],l=a.i[3],m=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(h^l);var n=1518500249}else f=c^h^l,n=1859775393;else 60>e?(f=c&h|l&(c|h),n=2400959708):
(f=c^h^l,n=3395469782);f=(b<<5|b>>>27)+f+m+n+d[e]&4294967295;m=l;l=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+h&4294967295;a.i[3]=a.i[3]+l&4294967295;a.i[4]=a.i[4]+m&4294967295};
pn=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
qn=function(a){return a.classList?a.classList:pn(a).match(/\S+/g)||[]};
g.rn=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};
g.sn=function(a,b){return a.classList?a.classList.contains(b):g.fb(qn(a),b)};
g.K=function(a,b){if(a.classList)a.classList.add(b);else if(!g.sn(a,b)){var c=pn(a);g.rn(a,c+(0<c.length?" "+b:b))}};
g.tn=function(a,b){if(a.classList)g.zb(b,function(e){g.K(a,e)});
else{var c={};g.zb(qn(a),function(e){c[e]=!0});
g.zb(b,function(e){c[e]=!0});
b="";for(var d in c)b+=0<b.length?" "+d:d;g.rn(a,b)}};
g.un=function(a,b){a.classList?a.classList.remove(b):g.sn(a,b)&&g.rn(a,g.Ke(qn(a),function(c){return c!=b}).join(" "))};
g.vn=function(a,b){a.classList?g.zb(b,function(c){g.un(a,c)}):g.rn(a,g.Ke(qn(a),function(c){return!g.fb(b,c)}).join(" "))};
g.L=function(a,b,c){c?g.K(a,b):g.un(a,b)};
wn=function(a,b){var c=!g.sn(a,b);g.L(a,b,c)};
g.xn=function(){g.am.call(this);this.eb=0;this.endTime=this.startTime=null};
Wda=function(a,b){Array.isArray(b)||(b=[b]);b=g.Pc(b,function(c){return"string"===typeof c?c:c.property+" "+c.duration+"s "+c.timing+" "+c.delay+"s"});
g.lg(a,"transition",b.join(","))};
yn=function(a,b,c,d,e){g.xn.call(this);this.i=a;this.C=b;this.G=c;this.B=d;this.J=Array.isArray(e)?e:[e]};
zn=function(a,b,c,d){return new yn(a,b,{opacity:c},{opacity:d},{property:"opacity",duration:b,timing:"ease-in",delay:0})};
Yda=function(a){a=yc(a);if(""==a)return null;var b=String(a.substr(0,4)).toLowerCase();if(0==("url("<b?-1:"url("==b?0:1))return!a.endsWith(")")||1<(a?a.split("(").length-1:0)||a&&a.split(")"),null;if(0<a.indexOf("(")){if(/"|'/.test(a))return null;b=/([\-\w]+)\(/g;for(var c;c=b.exec(a);)if(!(c[1].toLowerCase()in Xda))return null}return a};
An=function(a){var b=g.A.CSSStyleDeclaration;return b&&b.prototype&&b.prototype[a]||null};
Bn=function(a,b,c,d){if(a)return a.apply(b,d);if(g.ye&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)};
cea=function(a){if(!a)return Rc;var b=document.createElement("div").style,c=Zda(a);g.zb(c,function(d){var e=g.Ae&&d in $da?d:d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");nc(e,"--")||nc(e,"var")||(d=Bn(aea,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[d])||"",d=Yda(d),null!=d&&Bn(bea,b,b.setProperty?"setProperty":"setAttribute",[e,d]))});
return dba(b.cssText||"")};
Zda=function(a){g.La(a)?a=g.ob(a):(a=g.Kb(a),g.kb(a,"cssText"));return a};
g.Dn=function(a){var b,c=b=0,d=!1;a=a.split(dea);for(var e=0;e<a.length;e++){var f=a[e];g.Cn.test(f)?(b++,c++):eea.test(f)?d=!0:fea.test(f)?c++:gea.test(f)&&(d=!0)}b=0==c?d?1:0:.4<b/c?-1:1;return-1==(0==b?null:b)?"rtl":"ltr"};
hea=function(a){if(a instanceof En||a instanceof Fn||a instanceof Gn)return a;if("function"==typeof a.next)return new En(function(){return Hn(a)});
if("function"==typeof a[Symbol.iterator])return new En(function(){return a[Symbol.iterator]()});
if("function"==typeof a.uh)return new En(function(){return Hn(a.uh())});
throw Error("Not an iterator or iterable.");};
Hn=function(a){if(!(a instanceof g.$i))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==g.In)throw d;b=!0}return{value:c,done:b}}}};
En=function(a){this.i=a};
Fn=function(a){this.i=a};
Gn=function(a){En.call(this,function(){return a});
this.u=a};
g.Jn=function(a,b,c,d,e,f,h,l){this.i=a;this.C=b;this.u=c;this.G=d;this.B=e;this.J=f;this.l=h;this.L=l};
g.Kn=function(a,b){if(0==b)return a.i;if(1==b)return a.l;var c=g.fe(a.i,a.u,b),d=g.fe(a.u,a.B,b);a=g.fe(a.B,a.l,b);c=g.fe(c,d,b);d=g.fe(d,a,b);return g.fe(c,d,b)};
g.Ln=function(a,b,c){this.B=a;this.C=b;this.i=this.u=a;this.G=c||0};
g.Mn=function(a){a.i=Math.min(a.C,2*a.i);a.u=Math.min(a.C,a.i+(a.G?Math.round(a.G*(Math.random()-.5)*2*a.i):0));a.l++};
Nn=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
iea=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};
On=function(a){return(a=a.exec(g.Vc))?a[1]:""};
Pn=function(a){return 0<=g.Ac(jea,a)};
Qn=function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};
g.Rn=function(a){g.F.call(this);this.C=1;this.u=[];this.B=0;this.i=[];this.l={};this.G=!!a};
kea=function(a,b,c){g.mm(function(){a.apply(b,c)})};
g.Sn=function(a){this.i=a};
Tn=function(a){this.i=a};
Un=function(a){this.data=a};
Vn=function(a){return void 0===a||a instanceof Un?a:new Un(a)};
Wn=function(a){this.i=a};
g.Xn=function(a){var b=a.creation;a=a.expiration;return!!a&&a<g.Ra()||!!b&&b>g.Ra()};
g.Yn=function(a){this.i=a};
lea=function(){};
Zn=function(){};
$n=function(a){this.i=a};
ao=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a};
bo=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.i=a};
mo=function(a,b){this.l=a;this.i=null;if(g.ye&&!g.ce(9)){co||(co=new g.Nm);this.i=co.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),co.set(a,this.i));try{this.i.load(this.l)}catch(c){this.i=null}}};
no=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return mea[b]})};
oo=function(a){try{a.i.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}};
po=function(a,b){this.l=a;this.i=b+"::"};
g.qo=function(a){var b=new ao;return b.isAvailable()?a?new po(b,a):b:null};
ro=function(a,b){this.i=a;this.l=b};
so=function(a){this.i=[];if(a)a:{if(a instanceof so){var b=a.Fh();a=a.Cg();if(0>=this.i.length){for(var c=this.i,d=0;d<b.length;d++)c.push(new ro(b[d],a[d]));break a}}else b=g.Kb(a),a=g.Ib(a);for(d=0;d<b.length;d++)to(this,b[d],a[d])}};
to=function(a,b,c){var d=a.i;d.push(new ro(b,c));b=d.length-1;a=a.i;for(c=a[b];0<b;)if(d=b-1>>1,a[d].getKey()>c.getKey())a[b]=a[d],b=d;else break;a[b]=c};
uo=function(){so.call(this)};
vo=function(){};
wo=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return 0===b.length?function(d){return d}:1===b.length?b[0]:b.reduce(function(d,e){return function(f){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];
return d(e.apply(null,g.ma(h)))}})};
nea=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return function(d){return function(e,f){function h(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");}
e=d(e,f);var l={getState:e.getState,dispatch:function(m,n){for(var p=[],r=1;r<arguments.length;++r)p[r-1]=arguments[r];return h.apply(null,[m].concat(g.ma(p)))}};
f=b.map(function(m){return m(l)});
h=wo.apply(null,g.ma(f))(e.dispatch);return Object.assign(Object.assign({},e),{dispatch:h})}}};
xo=function(){return Math.random().toString(36).substring(7).split("").join(".")};
oea=function(a){Object.keys(a).forEach(function(b){var c=a[b];if("undefined"===typeof c(void 0,{type:yo}))throw Error('Reducer "'+b+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof c(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION"+xo()}))throw Error('Reducer "'+
b+"\" returned undefined when probed with a random type. Don't try to handle "+(yo+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'));})};
zo=function(a,b,c,d){function e(){if(r)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return m}
function f(u){if("function"!==typeof u)throw Error("Expected the listener to be a function.");if(r)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");var x=!0;p===n&&(p=n.slice());p.push(u);return function(){if(x){if(r)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
x=!1;p===n&&(p=n.slice());p.splice(p.indexOf(u),1);n=null}}}
function h(u){if("object"!==typeof u||null===u)var x=!1;else{for(x=u;null!==Object.getPrototypeOf(x);)x=Object.getPrototypeOf(x);x=Object.getPrototypeOf(u)===x}if(!x)throw Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof u.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(r)throw Error("Reducers may not dispatch actions.");try{r=!0,m=l(m,u)}finally{r=!1}x=n=p;for(var y=0;y<x.length;y++)(0,x[y])();
return u}
if("function"===typeof b&&"function"===typeof c||"function"===typeof c&&"function"===typeof d)throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");"function"===typeof b&&"undefined"===typeof c&&(c=b,b=void 0);if("undefined"!==typeof c){if("function"!==typeof c)throw Error("Expected the enhancer to be a function.");return c(zo)(a,b)}if("function"!==typeof a)throw Error("Expected the reducer to be a function.");
var l=a,m=b,n=[],p=n,r=!1;h({type:yo});a={};var t=(a.dispatch=h,a.subscribe=f,a.getState=e,a.replaceReducer=function(u){if("function"!==typeof u)throw Error("Expected the nextReducer to be a function.");l=u;h({type:pea});return t},a[Ao]=function(){var u={};
return u.subscribe=function(x){function y(){x.next&&x.next(e())}
if("object"!==typeof x||null===x)throw new TypeError("Expected the observer to be an object.");y();return{unsubscribe:f(y)}},u[Ao]=function(){return this},u},a);
return t};
Bo=function(a){If(this,a,qea)};
Co=function(a){If(this,a,null)};
rea=function(a,b){for(;hf(b)&&4!=b.l;)switch(b.u){case 1:var c=lf(b);Lf(a,1,c);break;case 2:c=lf(b);Lf(a,2,c);break;case 3:c=lf(b);Lf(a,3,c);break;case 4:c=lf(b);Lf(a,4,c);break;case 5:c=ff(b.i);Lf(a,5,c);break;default:jf(b)}return a};
sea=function(a){var b=a.split(""),c=[-643296477,88756844,null,1784672030,1903104850,537047196,1073980156,-1585815897,function(d,e){d.push(e)},
1508987061,535087203,function(d){d.reverse()},
-1706490378,b,-1687265530,-1917099998,-1362068348,b,-961861339,-2060484654,-1706490378,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(0,1,d.splice(e,1,d[0])[0])},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1681728341,1404499233,-550263058,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
function(d,e){for(var f=64,h=[];++f-h.length-32;)switch(f){case 58:f=96;continue;case 91:f=44;break;case 65:f=47;continue;case 46:f=153;case 123:f-=58;default:h.push(String.fromCharCode(f))}d.forEach(function(l,m,n){this.push(n[m]=h[(h.indexOf(l)-h.indexOf(this[m])+m-32+f--)%h.length])},e.split(""))},
function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1141451276,"now",-1152701966,-1907074957,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
-1320398466,1018722909,-1005239568,function(d,e){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f},
1018722909,1033110145,-2136430367,null,1718552977,-145914812,904814961,null,b,1212688727];c[2]=c;c[41]=c;c[45]=c;try{c[28](c[13]),c[22](c[17],c[24]),c[33](c[17],c[16]),c[26](c[45],c[35]),c[23](c[47],c[39]),c[24](c[43],c[41]),c[23](c[47],c[42]),c[39](c[43],c[14]),c[13](c[4]),c[12](c[4],c[36]),c[29](c[25],c[41]),c[38](c[21]),c[9](c[28]),c[37](c[26],c[7]),c[18](c[26],c[34]),c[7](c[46],c[42]),c[9](c[22]),c[46](c[2],c[31]),c[34](c[17],c[18]),c[42](c[28],c[46]),c[8](c[30],c[41]),c[30](c[36],c[29]),c[15](c[2],
c[8]),c[30](c[36],c[13]),c[24](c[36]),c[31](c[11],c[43]),c[26](c[11],c[21]),c[38](c[9],c[5]),c[23](c[15],c[1]),c[36](c[24],c[6]),c[6](c[16],c[19]),c[48](c[36],c[0]),c[18](c[27]),c[30](c[39]),c[4](c[18],c[19]),c[42](c[18],c[25]),c[4](c[39],c[17]),c[4](c[18],c[37]),c[47](c[36],c[23]),c[42](c[36],c[1])}catch(d){return"enhanced_except_AAAAAAAAAAE_"+a}return b.join("")};
g.Fo=function(a,b,c,d,e){Do||Eo.set(""+a,b,{ow:c,path:"/",domain:void 0===d?"youtube.com":d,qS:void 0===e?!1:e})};
g.Go=function(a,b){if(!Do)return Eo.get(""+a,b)};
g.Ho=function(a,b,c){Do||Eo.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
tea=function(){if(!Eo.isEnabled())return!1;if(!Eo.isEmpty())return!0;Eo.set("TESTCOOKIESENABLED","1",{ow:60});if("1"!==Eo.get("TESTCOOKIESENABLED"))return!1;Eo.remove("TESTCOOKIESENABLED");return!0};
Io=function(){return g.Go("CONSENT","").startsWith("YES+")};
Jo=function(){return g.Ha("yt.ads.biscotti.lastId_")||""};
Ko=function(a){g.Ga("yt.ads.biscotti.lastId_",a,void 0)};
Mo=function(a){var b=arguments;1<b.length?Lo[b[0]]=b[1]:1===b.length&&Object.assign(Lo,b[0])};
g.M=function(a,b){return a in Lo?Lo[a]:b};
No=function(a){return g.M(a,void 0)};
Oo=function(a){var b=Lo.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.Qo=function(a){a=Po(a);return"string"===typeof a&&"false"===a?!1:!!a};
Ro=function(a,b){a=Po(a);return void 0===a&&void 0!==b?b:Number(a||0)};
So=function(a){a=Po(a);return Array.isArray(a)?g.Pc(a,function(b){return String(b||"")}):[String(a||"")]};
Po=function(a){var b=g.M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.M("EXPERIMENT_FLAGS",{})[a]};
To=function(){var a=[],b=g.M("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=g.M("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
uea=function(a){Uo.forEach(function(b){return b(a)})};
Wo=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Vo(b)}}:a};
g.Vo=function(a){var b=g.Ha("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=g.M("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Mo("ERRORS",b));uea(a)};
Xo=function(a){var b=g.Ha("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.M("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Mo("ERRORS",b))};
Zo=function(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var h=Yo(f[0]||""),l=Yo(f[1]||"");h in c?Array.isArray(c[h])?pb(c[h],l):c[h]=[c[h],l]:c[h]=l}catch(r){var m=r,n=f[0],p=String(Zo);m.args=[{key:n,value:f[1],query:a,method:vea==p?"unchanged":p}];wea.hasOwnProperty(n)||Xo(m)}}return c};
$o=function(a){var b=[];g.Bb(a,function(c,d){var e=od(d),f;Array.isArray(c)?f=c:f=[c];g.zb(f,function(h){""==h?b.push(e):b.push(e+"="+od(h))})});
return b.join("&")};
ap=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return Zo(a,"&")};
bp=function(a){a=a.split(",");return a=a.map(function(b){return ap(b)})};
g.cp=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ap(1<a.length?a[1]:a[0])):{}};
g.ep=function(a,b){return dp(a,b||{},!0)};
fp=function(a,b){return dp(a,b||{},!1)};
dp=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ap(e[1]||"");for(var f in b)if(c||!Lb(e,f))e[f]=b[f];return g.Od(a,e)+d};
gp=function(a){if(!b)var b=window.location.href;var c=g.Ad(1,a),d=g.Bd(a);c&&d?(a=a.match(zd),b=b.match(zd),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.Bd(b)==d&&(Number(g.Ad(4,b))||null)==(Number(g.Ad(4,a))||null):!0;return a};
hp=function(a){a||(a=document.location.href);a=g.Ad(1,a);return null!==a&&"https"==a};
ip=function(a){a=g.Bd(a);a=null!==a?a.split(".").reverse():null;return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:kids|-nocookie)?$/)?!0:!1};
Yo=function(a){return a&&a.match(xea)?a:pd(a)};
lp=function(a){var b=jp;a=void 0===a?Jo():a;var c=Object,d=c.assign,e=kp(b);var f=b.i;try{var h=f.screenX;var l=f.screenY}catch(B){}try{var m=f.outerWidth;var n=f.outerHeight}catch(B){}try{var p=f.innerWidth;var r=f.innerHeight}catch(B){}try{var t=f.screenLeft;var u=f.screenTop}catch(B){}try{p=f.innerWidth,r=f.innerHeight}catch(B){}try{var x=f.screen.availWidth;var y=f.screen.availTop}catch(B){}f=[t,u,h,l,x,y,m,n,p,r];h=Kg(!1,b.i.top);l={};m=new fn;g.A.SVGElement&&g.A.document.createElementNS&&m.set(0);
n=zba();n["allow-top-navigation-by-user-activation"]&&m.set(1);n["allow-popups-to-escape-sandbox"]&&m.set(2);g.A.crypto&&g.A.crypto.subtle&&m.set(3);g.A.TextDecoder&&g.A.TextEncoder&&m.set(4);m=Vda(m);b=(l.bc=m,l.bih=h.height,l.biw=h.width,l.brdim=f.join(),l.vis=$g(b.l),l.wgl=!!Zg.WebGLRenderingContext,l);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c};
kp=function(a){var b={};b.dt=yea;b.flash="0";a:{try{var c=a.i.top.location.href}catch(f){a=2;break a}a=c?c===a.l.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?Zg:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!Zg.navigator&&"unknown"!==typeof Zg.navigator.javaEnabled&&!!Zg.navigator.javaEnabled&&Zg.navigator.javaEnabled();Zg.screen&&(b.u_h=Zg.screen.height,b.u_w=Zg.screen.width,b.u_ah=Zg.screen.availHeight,b.u_aw=Zg.screen.availWidth,b.u_cd=
Zg.screen.colorDepth);Zg.navigator&&Zg.navigator.plugins&&(b.u_nplug=Zg.navigator.plugins.length);Zg.navigator&&Zg.navigator.mimeTypes&&(b.u_nmime=Zg.navigator.mimeTypes.length);return b};
zea=function(){if(!mp)return null;var a=mp();return"open"in a?a:null};
g.op=function(a){switch(np(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
np=function(a){return a&&"status"in a?a.status:-1};
g.pp=function(a,b){"function"===typeof a&&(a=Wo(a));return window.setTimeout(a,b)};
qp=function(a,b){"function"===typeof a&&(a=Wo(a));return window.setInterval(a,b)};
g.rp=function(a){window.clearTimeout(a)};
Aea=function(a,b){b=void 0===b?{}:b;var c=gp(a),d=g.Qo("web_ajax_ignore_global_headers_if_set"),e;for(e in sp){var f=g.M(sp[e]);!f||!c&&!tp(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||tp(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||tp(a,"X-YouTube-Time-Zone")){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(l){}h&&(b["X-YouTube-Time-Zone"]=h)}if(c||tp(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=$o(lp(void 0));return b};
up=function(a,b){var c=g.Bd(a);g.Qo("debug_handle_relative_url_for_query_forward_killswitch")||c||!gp(a)||(c=document.location.hostname);var d=yd(g.Ad(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ap(b),f={};g.zb(Bea,function(h){e[h]&&(f[h]=e[h])});
return fp(a,f)};
tp=function(a){return g.Bd(a)?!1:!0};
g.wp=function(a,b){var c=b.format||"JSON";a=Cea(a,b);var d=Dea(a,b),e=!1,f=vp(a,function(m){if(!e){e=!0;l&&g.rp(l);var n=g.op(m),p=null,r=400<=m.status&&500>m.status,t=500<=m.status&&600>m.status;if(n||r||t)p=Eea(a,c,m,b.convertToSafeHtml);if(n)a:if(m&&204==m.status)n=!0;else{switch(c){case "XML":n=0==parseInt(p&&p.return_code,10);break a;case "RAW":n=!0;break a}n=!!p}p=p||{};r=b.context||g.A;n?b.onSuccess&&b.onSuccess.call(r,m,p):b.onError&&b.onError.call(r,m,p);b.onFinish&&b.onFinish.call(r,m,p)}},
b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var h=b.onTimeout;var l=g.pp(function(){e||(e=!0,f.abort(),g.rp(l),h.call(b.context||g.A,f))},b.timeout)}return f};
Cea=function(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.M("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=g.ep(a,b);return a};
Dea=function(a,b){var c=g.M("XSRF_FIELD_NAME",void 0),d=g.M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,h=No("XSRF_FIELD_NAME"),l;b.headers&&(l=b.headers["Content-Type"]);b.excludeXsrf||g.Bd(a)&&!b.withCredentials&&g.Bd(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.postParams&&b.postParams[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ap(e),g.Xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):g.Md(e));f=e||f&&!g.Pb(f);
!xp&&f&&"POST"!=b.method&&(xp=!0,g.Vo(Error("AJAX request with postData should use POST")));return e};
Eea=function(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(h){throw d=Error("Error reading responseText"),d.params=a,Xo(d),h;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Fea(a):null)e={},g.zb(a.getElementsByTagName("*"),function(h){e[h.tagName]=Gea(h)})}d&&yp(e);
return e};
yp=function(a){if(g.Ma(a))for(var b in a)"html_content"==b||oc(b,"_html")?a[b]=g.fd(g.ec("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):yp(a[b])};
Fea=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Gea=function(a){var b="";g.zb(a.childNodes,function(c){b+=c.nodeValue});
return b};
vp=function(a,b,c,d,e,f,h){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Wo(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=zea();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.Qo("debug_forward_web_query_parameters")&&(a=up(a,window.location.search));m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Aea(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
m.send(d);return m};
Ap=function(a,b){var c=g.Tb(b),d;return g.Cm(new rm(function(e,f){c.onSuccess=function(h){g.op(h)?e(new Hea(h)):f(new zp("Request failed, status="+np(h),"net.badstatus",h))};
c.onError=function(h){f(new zp("Unknown request error","net.unknown",h))};
c.onTimeout=function(h){f(new zp("Request timed out","net.timeout",h))};
d=g.wp(a,c)}),function(e){e instanceof Hm&&d.abort();
return wm(e)})};
g.Bp=function(a,b,c,d){function e(h,l,m){return g.Cm(h,function(n){return 0>=l||403===np(n.xhr)?wm(new zp("Request retried too many times","net.retryexhausted",n.xhr,n)):f(m).then(function(){return e(Ap(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(h){return new rm(function(l){setTimeout(l,h)})}
return e(Ap(a,b),c-1,d)};
zp=function(a,b,c){Va.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"};
Hea=function(a){this.xhr=a};
Cp=function(){this.eb=0;this.i=null};
Dp=function(a){var b=new Cp;a=void 0===a?null:a;b.eb=2;b.i=void 0===a?null:a;return b};
Ep=function(a){var b=new Cp;a=void 0===a?null:a;b.eb=1;b.i=void 0===a?null:a;return b};
Gp=function(a){Va.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fp;this.isTimeout=a instanceof zp&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Hm};
Fp=function(){Va.call(this,"Biscotti ID is missing from server")};
Iea=function(){if(g.Qo("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Io())return wm(Error("User has not consented - not fetching biscotti id."));if("1"==Rb(g.M("PLAYER_VARS",{}),"privembed",!1))return wm(Error("Biscotti ID is not available in private embed mode"));Hp||(Hp=g.Cm(Ap("//googleads.g.doubleclick.net/pagead/id",Ip).then(Jp),function(a){return Kp(2,a)}));
return Hp};
Jp=function(a){a=a.xhr.responseText;if(!nc(a,")]}'"))throw new Fp;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fp;a=a.id;Ko(a);Hp=Ep(a);Lp(18E5,2);return a};
Kp=function(a,b){b=new Gp(b);Ko("");Hp=Dp(b);0<a&&Lp(12E4,a-1);throw b;};
Lp=function(a,b){g.pp(function(){g.Cm(Ap("//googleads.g.doubleclick.net/pagead/id",Ip).then(Jp,function(c){return Kp(b,c)}),g.Ia)},a)};
Mp=function(){try{var a=g.Ha("yt.ads.biscotti.getId_");return a?a():Iea()}catch(b){return wm(b)}};
Op=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Np+"VisibilityState";if(b in a)return a[b]};
Pp=function(a,b){var c;ci(a,function(d){c=b[d];return!!c});
return c};
Qp=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Jea||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.l=a.pageY}}catch(e){}};
Rp=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.l=a.clientY+b}};
Kea=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nb(Sp,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=g.Ma(e[4])&&g.Ma(d)&&g.Sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})};
g.Vp=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Kea(a,b,c,d);if(e)return e;e=++Tp.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(l){l=new Qp(l);if(!Ve(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new Qp(l);
l.currentTarget=a;return c.call(a,l)};
h=Wo(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Up()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);Sp[e]=[a,b,c,h,d];return e};
Lea=function(a,b){var c=document.body||document;return g.Vp(c,"click",function(d){var e=Ve(d.target,function(f){return f===c||b(f)},!0);
e&&e!==c&&!e.disabled&&(d.currentTarget=e,a.call(e,d))})};
g.Wp=function(a){a&&("string"==typeof a&&(a=[a]),g.zb(a,function(b){if(b in Sp){var c=Sp[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Up()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Sp[b]}}))};
g.Xp=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
Yp=function(a){a=a||window.event;var b;a.composedPath&&"function"===typeof a.composedPath?b=a.composedPath():b=a.path;return b&&b.length?b[0]:g.Xp(a)};
Zp=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
$p=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;document.body&&document.documentElement&&("number"!==typeof b&&(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft),"number"!==typeof c&&(c=a.clientY+document.body.scrollTop+document.documentElement.scrollTop));return new g.he(b,c)};
g.aq=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.bq=function(a){a=a||window.event;return!1===a.returnValue||a.xG&&a.xG()};
g.cq=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
Mea=function(a){return Lea(a,function(b){return g.sn(b,"ytp-ad-has-logging-urls")})};
g.dq=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.Vp(a,b,function(){g.Wp(e);c.apply(a,arguments)},d)};
eq=function(a){for(var b in Sp)Sp[b][0]==a&&g.Wp(b)};
fq=function(a){this.J=a;this.i=null;this.B=0;this.G=null;this.C=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.u=0;this.Y=g.Vp(window,"mousemove",(0,g.C)(this.V,this));this.L=qp((0,g.C)(this.X,this),25)};
gq=function(){};
iq=function(a,b,c){return hq(b,0,c)};
g.jq=function(a,b){return hq(a,1,b)};
kq=function(){gq.apply(this,arguments)};
lq=function(){kq.i||(kq.i=new kq);return kq.i};
g.mq=function(){return!!g.Ha("yt.scheduler.instance")};
hq=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=g.Ha("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.pp(a,c||0)};
g.nq=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=g.Ha("yt.scheduler.instance.cancelJob");b?b(a):g.rp(a)}};
oq=function(a){var b=g.Ha("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
rq=function(){var a={},b=void 0===a.ZN?!0:a.ZN;a=void 0===a.ZR?!1:a.ZR;if(null==g.Ha("_lact",window)){var c=parseInt(g.M("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;g.Ga("_lact",c,window);g.Ga("_fact",c,window);-1==c&&pq();g.Vp(document,"keydown",pq);g.Vp(document,"keyup",pq);g.Vp(document,"mousedown",pq);g.Vp(document,"mouseup",pq);b&&(a?g.Vp(window,"touchmove",function(){qq("touchmove",200)},{passive:!0}):(g.Vp(window,"resize",function(){qq("resize",200)}),g.Vp(window,"scroll",function(){qq("scroll",
200)})));
new fq(function(){qq("mouse",100)});
g.Vp(document,"touchstart",pq,{passive:!0});g.Vp(document,"touchend",pq,{passive:!0})}};
qq=function(a,b){sq[a]||(sq[a]=!0,g.jq(function(){pq();sq[a]=!1},b))};
pq=function(){null==g.Ha("_lact",window)&&(rq(),g.Ha("_lact",window));var a=Date.now();g.Ga("_lact",a,window);-1==g.Ha("_fact",window)&&g.Ga("_fact",a,window);(a=g.Ha("ytglobal.ytUtilActivityCallback_"))&&a()};
tq=function(){var a=g.Ha("_lact",window),b;null==a?b=-1:b=Math.max(Date.now()-a,0);return b};
uq=function(){var a=/Chrome\/(\d+)/.exec(g.Vc);return a?parseFloat(a[1]):NaN};
vq=function(){var a=/\sCobalt\/(\S+)\s/.exec(g.Vc);if(!a)return NaN;var b=[];a=g.q(a[1].split("."));for(var c=a.next();!c.done;c=a.next())c=parseInt(c.value,10),0<=c&&b.push(c);return parseFloat(b.join("."))};
xq=function(){return wq("android")&&wq("chrome")&&!(wq("trident/")||wq("edge/"))&&!wq("cobalt")};
yq=function(){return wq("armv7")||wq("aarch64")||wq("android")};
g.zq=function(){return wq("cobalt")};
Aq=function(){return wq("cobalt")&&wq("appletv")};
Bq=function(){return wq("(ps3; leanback shell)")||wq("ps3")&&g.zq()};
Cq=function(){return wq("(ps4; leanback shell)")||wq("ps4")&&g.zq()};
g.Dq=function(){return g.zq()&&(wq("ps4 vr")||wq("ps4 pro vr"))};
Eq=function(){var a=/WebKit\/([0-9]+)/.exec(g.Vc);return!!(a&&600<=parseInt(a[1],10))};
Fq=function(){var a=/WebKit\/([0-9]+)/.exec(g.Vc);return!!(a&&602<=parseInt(a[1],10))};
Gq=function(){return wq("iemobile")||wq("windows phone")&&wq("edge")};
Iq=function(){return Hq&&wq("applewebkit")&&!wq("version")&&(!wq("safari")||wq("gsa/"))};
Kq=function(){return g.Jq&&wq("version/")};
Lq=function(){return wq("smart-tv")&&wq("samsung")};
wq=function(a){var b=g.Vc;return b?0<=b.toLowerCase().indexOf(a):!1};
g.Nq=function(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!g.zq())a&&(a=g.Ec(g.Ic(a)),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a=g.bd(dd(a)).toString(),a=od(g.Cj(a))),g.pc(a)||(a=Ee("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),ne(a).body.appendChild(a)));else if(e)vp(a,b,"POST",e,d);else if(g.M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)vp(a,b,"GET","",d);else{b:{try{var f=new Gaa({url:a});if(f.u&&f.l||f.B){var h=yd(g.Ad(5,a));var l=!(!h||!h.endsWith("/aclk")||
"1"!==Sd(a,"ri"));break b}}catch(m){}l=!1}l?Mq(a)?(b&&b(),c=!0):c=!1:c=!1;c||Nea(a,b)}};
Oq=function(a,b,c){c=void 0===c?"":c;Mq(a,c)?b&&b():g.Nq(a,b,void 0,void 0,c)};
Mq=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
Nea=function(a,b){var c=new Image,d=""+Oea++;Pq[d]=c;c.onload=c.onerror=function(){b&&Pq[d]&&b();delete Pq[d]};
c.src=a};
g.Uq=function(a,b,c){var d=g.Qq();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var h=function(){Rq[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{g.Sq[a]?h():g.pp(h,0)}catch(l){g.Vo(l)}},c);
Rq[e]=!0;Tq[a]||(Tq[a]=[]);Tq[a].push(e);return e}return 0};
g.Vq=function(a){var b=g.Qq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),g.zb(a,function(c){b.unsubscribeByKey(c);delete Rq[c]}))};
g.Wq=function(a,b){var c=g.Qq();return c?c.publish.apply(c,arguments):!1};
Yq=function(a){var b=g.Qq();if(b)if(b.clear(a),a)Xq(a);else for(var c in Tq)Xq(c)};
g.Qq=function(){return g.A.ytPubsubPubsubInstance};
Xq=function(a){Tq[a]&&(a=Tq[a],g.zb(a,function(b){Rq[b]&&delete Rq[b]}),a.length=0)};
Pea=function(a,b){if("log_event"===a.endpoint){var c="";a.Yu?c="visitorOnlyApprovedKey":a.Be&&(Zq[a.Be.token]=$q(a.Be),c=a.Be.token);var d=ar.get(c)||[];ar.set(c,d);d.push(a.payload);b&&(br=new b);a=Ro("tvhtml5_logging_max_batch")||Ro("web_logging_max_batch")||100;b=(0,g.N)();d.length>=a?cr({writeThenSend:!0}):10<=b-dr&&(er(),dr=b)}};
Qea=function(a,b){if("log_event"===a.endpoint){var c="";a.Yu?c="visitorOnlyApprovedKey":a.Be&&(Zq[a.Be.token]=$q(a.Be),c=a.Be.token);var d=new Map;d.set(c,[a.payload]);b&&(br=new b);return new rm(function(e){br&&br.isReady()?fr(d,e,{bypassNetworkless:!0}):e()})}};
cr=function(a){a=void 0===a?{}:a;new rm(function(b){g.rp(gr);g.rp(hr);hr=0;br&&br.isReady()?(fr(ar,b,a),ar.clear()):(er(),b())})};
er=function(){g.Qo("web_gel_timeout_cap")&&!hr&&(hr=g.pp(function(){cr({writeThenSend:!0})},6E4));
g.rp(gr);var a=g.M("LOGGING_BATCH_TIMEOUT",Ro("web_gel_debounce_ms",1E4));g.Qo("shorten_initial_gel_batch_timeout")&&ir&&(a=Rea);gr=g.pp(function(){cr({writeThenSend:!0})},a)};
fr=function(a,b,c){var d=br;c=void 0===c?{}:c;var e=Math.round((0,g.N)()),f=a.size;a=g.q(a);for(var h=a.next();!h.done;h=a.next()){var l=g.q(h.value);h=l.next().value;var m=l.next().value;l=g.Ub({context:g.jr(d.i||g.kr())});l.events=m;(m=Zq[h])&&Sea(l,h,m);delete Zq[h];h="visitorOnlyApprovedKey"===h;Tea(l,e,h);g.Qo("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Oq("/generate_204");g.lr(d,"log_event",l,{retry:!0,onSuccess:function(){f--;f||b();mr=Math.round((0,g.N)()-
e)},
onError:function(){f--;f||b()},
gH:c,Yu:h});ir=!1}};
Tea=function(a,b,c){a.requestTimeMs=String(b);g.Qo("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=g.M("EVENT_ID",void 0))&&((c=g.M("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*nr/2)),c++,c>nr&&(c=1),Mo("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,or&&mr&&g.Qo("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:or,roundtripMs:String(mr)}),or=b,mr=0)};
Sea=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
$q=function(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b};
qr=function(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||(0,g.N)());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=tq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};g.Qo("log_sequence_info_on_gel_web")&&d.fl&&(a=e.context,b=d.fl,pr[b]=b in pr?pr[b]+1:0,a.sequence={index:pr[b],groupKey:b},d.eN&&delete pr[d.fl]);(d.Z5?Qea:Pea)({endpoint:"log_event",payload:e,Be:d.Be,Yu:d.Yu},c)};
rr=function(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})};
sr=function(){if(!g.A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return g.A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":g.A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":g.A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":g.A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}};
g.ur=function(){this.i=g.M("ALT_PREF_COOKIE_NAME","PREF");this.l=g.M("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=g.Go(this.i);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tr[d]=c.toString())}}};
g.wr=function(a,b){return!!((vr("f"+(Math.floor(b/31)+1))||0)&1<<b%31)};
xr=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
yr=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
vr=function(a){a=void 0!==tr[a]?tr[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null};
zr=function(){var a=g.A.navigator;return a?a.connection:void 0};
Br=function(){var a=zr();if(a){var b=Ar[a.type||"unknown"]||"CONN_UNKNOWN";a=Ar[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}};
Dr=function(){var a=zr();if(null!==a&&void 0!==a&&a.effectiveType)return Cr.hasOwnProperty(a.effectiveType)?Cr[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"};
Er=function(){return"INNERTUBE_API_KEY"in Lo&&"INNERTUBE_API_VERSION"in Lo};
g.kr=function(){return{innertubeApiKey:g.M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.M("INNERTUBE_API_VERSION",void 0),pG:g.M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),qG:g.M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),sG:g.M("INNERTUBE_CONTEXT_HL",void 0),rG:g.M("INNERTUBE_CONTEXT_GL",void 0),tG:g.M("INNERTUBE_HOST_OVERRIDE",void 0)||"",vG:!!g.M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),uG:!!g.M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:g.M("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}};
g.jr=function(a){var b={client:{hl:a.sG,gl:a.rG,clientName:a.qG,clientVersion:a.innertubeContextClientVersion,configInfo:a.pG}},c=g.A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=g.M("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=To();0<c.length&&(b.request={internalExperimentFlags:c});c=b.client.clientName;if("WEB"===c||"MWEB"===c||1===c||2===c){if(!g.Qo("web_include_display_mode_killswitch")){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=sr()}}else if(d=b.client.clientName,("WEB_REMIX"===d||76===d)&&!g.Qo("music_web_display_mode_killswitch")){var e;b.client.eH=null!=(e=b.client.eH)?e:{};b.client.eH.webDisplayMode=sr()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);g.M("DELEGATED_SESSION_ID")&&!g.Qo("pageid_as_header_web")&&(b.user={onBehalfOfUser:g.M("DELEGATED_SESSION_ID")});if(a=Br())b.client.connectionType=a;g.Qo("web_log_effective_connection_type")&&
(a=Dr())&&(b.client.effectiveConnectionType=a);a=Object;e=a.assign;d=b.client;c={};for(var f=g.q(Object.entries(ap(g.M("DEVICE","")))),h=f.next();!h.done;h=f.next()){var l=g.q(h.value);h=l.next().value;l=l.next().value;"cbrand"===h?c.deviceMake=l:"cmodel"===h?c.deviceModel=l:"cbr"===h?c.browserName=l:"cbrver"===h?c.browserVersion=l:"cos"===h?c.osName=l:"cosver"===h?c.osVersion=l:"cplatform"===h&&(c.platform=l)}b.client=e.call(a,d,c);return b};
Uea=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.LE||g.M("AUTHORIZATION"))||(a?b="Bearer "+g.Ha("gapi.auth.getToken")().u5:b=Dl([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.M("SESSION_INDEX",0),g.Qo("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.M("DELEGATED_SESSION_ID")));return d};
as=function(a){var b;(b=g.qo(a))||(a=new mo(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Wn(a):null;this.l=document.domain||window.location.hostname};
bs=function(a,b){this.version=a;this.args=b};
cs=function(a,b){this.topic=a;this.i=b};
es=function(a,b){var c=ds();c&&c.publish.call(c,a.toString(),a,b)};
Vea=function(a,b,c){var d=ds();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var l=g.Ha("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(fs[e])try{if(h&&a instanceof cs&&a!=f)try{var m=a.i,n=h;if(!n.args||!n.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Sm){var p=new m;m.Sm=p.version}var r=m.Sm}catch(t){}if(!r||n.version!=r)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(m,
g.ob(n.args))}catch(t){throw t.message="yt.pubsub2.Data.deserialize(): "+t.message,t;}}catch(t){throw t.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+t.message,t;}b.call(c||window,h)}catch(t){g.Vo(t)}},gs[a.toString()]?g.mq()?g.jq(l):g.pp(l,0):l())});
fs[e]=!0;hs[a.toString()]||(hs[a.toString()]=[]);hs[a.toString()].push(e);return e};
js=function(a,b,c){var d=Vea(a,function(e){b.apply(c,arguments);is(d)},c);
return d};
is=function(a){var b=ds();b&&("number"===typeof a&&(a=[a]),g.zb(a,function(c){b.unsubscribeByKey(c);delete fs[c]}))};
ds=function(){return g.Ha("ytPubsub2Pubsub2Instance")};
ks=function(){this.ES=!0};
ls=function(){ks.i||(ks.i=new ks);return ks.i};
ms=function(a,b,c){return vm(a.Av(b,c))};
os=function(){var a;return null===(a=ns())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)};
ps=function(a){this.i=void 0===a?!1:a;(a=os())||(a={hasSucceededOnce:this.i});this.l=a;var b,c;g.Qo("ytidb_analyze_is_supported")&&(null===(c=ns())||void 0===c?0:c.i)&&(c={hasSucceededOnce:this.l.hasSucceededOnce||this.i},null===(b=ns())||void 0===b?void 0:b.set("LAST_RESULT_ENTRY_KEY",c,2592E3,!0))};
Wea=function(){var a={};for(qs=new rs(void 0===a.handleError?ts:a.handleError,void 0===a.logEvent?g.us:a.logEvent);0<vs.length;)switch(a=vs.shift(),a.type){case "ERROR":qs.pd(a.payload);break;case "EVENT":qs.logEvent(a.eventType,a.payload)}};
xs=function(a){ws||(qs?qs.pd(a):(vs.push({type:"ERROR",payload:a}),10<vs.length&&vs.shift()))};
ys=function(a,b){ws||(qs?qs.logEvent(a,b):(vs.push({type:"EVENT",eventType:a,payload:b}),10<vs.length&&vs.shift()))};
As=function(){try{return zs(),!0}catch(a){return!1}};
zs=function(){if(void 0!==Bs)return Bs;if(void 0!==g.M("DATASYNC_ID",void 0))return g.M("DATASYNC_ID",void 0);throw Error("Datasync ID not set");};
g.Cs=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.ma(c))};
Ds=function(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");};
Es=function(a){return a.substr(0,a.indexOf(":"))||a};
Gs=function(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Fs[a]:c;d=void 0===d?Xea[a]:d;e=void 0===e?Yea[a]:e;g.Cs.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,Gs.prototype)};
Hs=function(a){Gs.call(this,"MISSING_OBJECT_STORE",{M5:a},Fs.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Hs.prototype)};
$ea=function(a,b,c){b=Es(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof Gs)return d;if("QuotaExceededError"===d.name)return new Gs("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(g.Is&&"UnknownError"===d.name)return new Gs("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Zea.some(function(e){return d.message.includes(e)}))return new Gs("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new Gs("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Rw:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d};
afa=function(a){if(!a)throw Error();throw a;};
bfa=function(a){return a};
Js=function(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=g.q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=g.q(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.l=a;this.state={status:"PENDING"};this.i=[];this.onRejected=[];try{this.l(c,b)}catch(e){b(e)}};
Ls=function(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Js?Ks(a,b,f,d,e):d(f)}catch(h){e(h)}};
Ms=function(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Js?Ks(a,b,f,d,e):d(f)}catch(h){e(h)}};
Ks=function(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Js?Ks(a,b,f,d,e):d(f)},function(f){e(f)})};
Ns=function(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(h){}}
a.addEventListener("success",e);a.addEventListener("error",d)};
Os=function(a){return new Promise(function(b,c){Ns(a,b,c)})};
Ps=function(a){return new Js(function(b,c){Ns(a,b,c)})};
Qs=function(a,b){return new Js(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(h){a=h;e()},d):c()}
e()})};
Rs=function(a,b){this.request=a;this.cursor=b};
Ss=function(a){return Ps(a).then(function(b){return null===b?null:new Rs(a,b)})};
Ts=function(a,b){this.i=a;this.options=b;this.transactionCount=0;this.u=Math.round((0,g.N)());this.l=!1};
Vs=function(a,b,c){a=a.i.createObjectStore(b,c);return new Us(a)};
cfa=function(a,b){return Ws(a,["LogsRequestsStore"],{mode:"readwrite",Wg:!0},function(c){return Xs(Ys(c,"LogsRequestsStore"),b,void 0)})};
Ws=function(a,b,c,d){return g.D(a,function f(){var h=this,l,m,n,p,r,t,u,x,y,B,H,E;return g.z(f,function(I){switch(I.i){case 1:var Q={mode:"readonly",Wg:!1};"string"===typeof c?Q.mode=c:Q=c;l=Q;h.transactionCount++;m=l.Wg?Ro("ytidb_transaction_try_count",1):1;n=0;case 2:if(p){I.sb(3);break}n++;r=Math.round((0,g.N)());ta(I,4);t=h.i.transaction(b,l.mode);Q=new Zs(t);Q=dfa(Q,d);return g.w(I,Q,6);case 6:return u=I.l,x=Math.round((0,g.N)()),$s(h,r,x,n,void 0,b.join(),l),I.return(u);case 4:y=va(I);B=Math.round((0,g.N)());
H=$ea(y,h.i.name,b.join());if((E=H instanceof Gs&&!H.i)||n>=m)$s(h,r,B,n,H,b.join(),l),p=H;I.sb(2);break;case 3:return I.return(Promise.reject(p))}})})};
$s=function(a,b,c,d,e,f,h){b=c-b;e?(e instanceof Gs&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ys("QUOTA_EXCEEDED",{dbName:Es(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:h.mode}),e instanceof Gs&&"UNKNOWN_ABORT"===e.type&&(ys("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.u}),a.l=!0),at(a,!1,d,f,b),xs(e)):at(a,!0,d,f,b)};
at=function(a,b,c,d,e){ys("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c})};
Us=function(a){this.i=a};
efa=function(a,b){return bt(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})};
ffa=function(a,b,c){var d=[];return bt(a,{query:b},function(e){if(!(void 0!==c&&d.length>=c))return d.push(e.getValue()),e.continue()}).then(function(){return d})};
Xs=function(a,b,c){return Ps(a.i.put(b,c))};
bt=function(a,b,c){a=a.i.openCursor(b.query,b.direction);return ct(a).then(function(d){return Qs(d,c)})};
gfa=function(a,b){var c={},d=c.query;c=c.direction;a="openKeyCursor"in IDBObjectStore.prototype?a.i.openKeyCursor(d,c):a.i.openCursor(d,c);return Ss(a).then(function(e){return Qs(e,b)})};
Zs=function(a){var b=this;this.i=a;this.l=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.aborted){e=Gs;for(var f=b.i.objectStoreNames,h=[],l=0;l<f.length;l++){var m=f.item(l);if(null===m)throw Error("Invariant: item in DOMStringList is null");h.push(m)}e=new e("UNKNOWN_ABORT",{objectStoreNames:h.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})};
dfa=function(a,b){var c=new Promise(function(d,e){b(a).then(function(f){a.commit();d(f)}).catch(e)});
return Promise.all([c,a.done]).then(function(d){return g.q(d).next().value})};
Ys=function(a,b){b=a.i.objectStore(b);var c=a.l.get(b);c||(c=new Us(b),a.l.set(b,c));return c};
dt=function(a){this.i=a};
hfa=function(a,b,c){var d=[];return et(a,{query:b},function(e){if(!(void 0!==c&&d.length>=c))return d.push(e.getValue()),e.continue()}).then(function(){return d})};
et=function(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ct(a).then(function(d){return Qs(d,c)})};
ft=function(a,b){this.request=a;this.cursor=b};
ct=function(a){return Ps(a).then(function(b){return null===b?null:new ft(a,b)})};
ifa=function(a,b,c){return g.D(this,function e(){var f,h,l,m,n,p,r,t,u,x;return g.z(e,function(y){if(1==y.i)return f=self.indexedDB.open(a,b),h=c,l=h.blocked,m=h.blocking,n=h.HS,p=h.upgrade,r=h.closed,u=function(){t||(t=new Ts(f.result,{closed:r}));return t},f.addEventListener("upgradeneeded",function(B){if(null===B.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");B.dataLoss&&"none"!==B.dataLoss&&ys("IDB_DATA_CORRUPTED",{reason:B.dataLossMessage||"unknown reason",dbName:Es(a)});var H=u(),E=new Zs(f.transaction);p&&p(H,B.oldVersion,B.newVersion,E)}),l&&f.addEventListener("blocked",function(){l()}),g.w(y,Os(f),2);
x=y.l;m&&x.addEventListener("versionchange",function(){m(u())});
x.addEventListener("close",function(){ys("IDB_UNEXPECTEDLY_CLOSED",{dbName:Es(a),dbVersion:x.version});n&&n()});
return y.return(u())})})};
gt=function(a,b,c){c=void 0===c?{}:c;return ifa(a,b,c)};
ht=function(a,b){b=void 0===b?{}:b;return g.D(this,function d(){var e,f,h;return g.z(d,function(l){e=self.indexedDB.deleteDatabase(a);f=b;(h=f.blocked)&&e.addEventListener("blocked",function(){h()});
return g.w(l,Os(e),0)})})};
it=function(a,b){this.name=a;this.options=b;this.u=!1};
kt=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,jt.open(),2);d=e.l;return e.return(Ws(d,["databases"],{Wg:!0,mode:"readwrite"},function(f){var h=Ys(f,"databases");return h.get(a.actualName).then(function(l){if(l?a.actualName!==l.actualName||a.publicName!==l.publicName||a.userIdentifier!==l.userIdentifier||a.clearDataOnAuthChange!==l.clearDataOnAuthChange:1)return Xs(h,a).then(function(){})})}))})})};
lt=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,jt.open(),2);d=e.l;return e.return(d.delete("databases",a))})})};
jfa=function(a){return g.D(this,function c(){var d,e;return g.z(c,function(f){return 1==f.i?(d=[],g.w(f,jt.open(),2)):3!=f.i?(e=f.l,g.w(f,Ws(e,["databases"],{Wg:!0,mode:"readonly"},function(h){d.length=0;return bt(Ys(h,"databases"),{},function(l){a(l.getValue())&&d.push(l.getValue());return l.continue()})}),3)):f.return(d)})})};
kfa=function(){return jfa(function(a){return"yt-player-local-media"===a.publicName&&void 0!==a.userIdentifier})};
lfa=function(){return g.D(this,function b(){var c,d,e;return g.z(b,function(f){switch(f.i){case 1:if(g.Qo("ytidb_is_supported_cache_success_result")&&(c=os(),null===c||void 0===c?0:c.hasSucceededOnce))return f.return(new ps(!0));if(Hq&&Eq()&&!Fq()||g.mt)return f.return(new ps(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new ps(!1))}catch(h){return f.return(new ps(!1))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new ps(!1));
ta(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return g.w(f,kt(e),4);case 4:return g.w(f,lt("yt-idb-test-do-not-use"),5);case 5:return f.return(new ps(!0));case 2:return va(f),f.return(new ps(!1))}})})};
ot=function(){if(void 0!==nt)return nt;ws=!0;return nt=lfa().then(function(a){ws=!1;return a.isSupported()})};
pt=function(a){if(!As())throw a=new Gs("AUTH_INVALID"),xs(a),a;var b=zs();return{actualName:a+":"+b,publicName:a,userIdentifier:b}};
qt=function(a,b,c,d){var e;return g.D(this,function h(){var l,m;return g.z(h,function(n){switch(n.i){case 1:return g.w(n,mfa({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return Ds(a),l=c?{actualName:a,publicName:a,userIdentifier:void 0}:pt(a),l.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,ta(n,3),g.w(n,kt(l),5);case 5:return g.w(n,gt(l.actualName,b,d),6);case 6:return n.return(n.l);case 3:return m=va(n),ta(n,7),g.w(n,lt(l.actualName),9);case 9:ua(n,8);break;
case 7:va(n);case 8:throw m;}})})};
mfa=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,ot(),2);if(!e.l)throw d=new Gs("IDB_NOT_SUPPORTED",{context:a}),xs(d),d;g.sa(e)})})};
nfa=function(a,b,c){c=void 0===c?{}:c;return qt(a,b,!1,c)};
ofa=function(a,b,c){c=void 0===c?{}:c;return qt(a,b,!0,c)};
pfa=function(a,b){b=void 0===b?{}:b;return g.D(this,function d(){var e;return g.z(d,function(f){if(1==f.i)return g.w(f,ot(),2);if(3!=f.i){if(!f.l)return f.return();Ds(a);e=pt(a);return g.w(f,ht(e.actualName,b),3)}return g.w(f,lt(e.actualName),0)})})};
qfa=function(a,b){var c=this;a=a.map(function(d){return g.D(c,function f(){return g.z(f,function(h){return 1==h.i?g.w(h,ht(d.actualName,b),2):g.w(h,lt(d.actualName),0)})})});
return Promise.all(a).then(function(){})};
rfa=function(){var a=void 0===a?{}:a;return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,ot(),2);if(3!=e.i){if(!e.l)return e.return();Ds("yt-player-local-media");return g.w(e,kfa(),3)}d=e.l;return g.w(e,qfa(d,a),0)})})};
rt=function(a,b){b=void 0===b?{}:b;return g.D(this,function d(){return g.z(d,function(e){if(1==e.i)return g.w(e,ot(),2);if(3!=e.i){if(!e.l)return e.return();Ds(a);return g.w(e,ht(a,b),3)}return g.w(e,lt(a),0)})})};
tt=function(a,b){it.call(this,a,b);this.options=b;Ds(a)};
ut=function(a,b){var c;return function(){c||(c=new tt(a,b));return c}};
vt=function(){Js.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");};
xt=function(){if(!wt){var a={};wt=ut("LogsDatabaseV2",{Fw:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),qx:!g.Qo("nwl_use_ytidb_partitioning"),upgrade:function(b,c){2>c&&(Vs(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).i.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Vs(b,"sapisid"));3>c&&Vs(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:3})}return wt().open()};
Bt=function(a){return g.D(this,function c(){var d,e,f,h,l;return g.z(c,function(m){switch(m.i){case 1:return d={startTime:(0,g.N)(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},g.w(m,zt(),2);case 2:return e=m.l,g.w(m,xt(),3);case 3:return f=m.l,h=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:g.M("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.w(m,cfa(f,h),4);case 4:return l=m.l,d.OS=(0,g.N)(),At(d),m.return(l)}})})};
sfa=function(){return g.D(this,function b(){var c,d,e,f,h,l,m,n;return g.z(b,function(p){switch(p.i){case 1:return c={startTime:(0,g.N)(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},g.w(p,zt(),2);case 2:return d=p.l,e=g.M("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=["NEW",d,e,0],h=["NEW",d,e,(0,g.N)()],l=IDBKeyRange.bound(f,h),g.w(p,xt(),3);case 3:return m=p.l,n=void 0,g.w(p,Ws(m,["LogsRequestsStore"],{mode:"readwrite",Wg:!0},function(r){return et(Ys(r,"LogsRequestsStore").index("newRequest"),{query:l,
direction:"prev"},function(t){t.getValue()&&(n=t.getValue(),n.status="QUEUED",t.update(n))})}),4);
case 4:return c.OS=(0,g.N)(),At(c),p.return(n)}})})};
tfa=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,xt(),2);d=e.l;return e.return(Ws(d,["LogsRequestsStore"],{mode:"readwrite",Wg:!0},function(f){var h=Ys(f,"LogsRequestsStore");return h.get(a).then(function(l){if(l)return l.status="QUEUED",Xs(h,l).then(function(){return l})})}))})})};
ufa=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,xt(),2);d=e.l;return e.return(Ws(d,["LogsRequestsStore"],{mode:"readwrite",Wg:!0},function(f){var h=Ys(f,"LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",l.sendCount+=1,Xs(h,l).then(function(){return l})):vt.resolve(void 0)})}))})})};
Ct=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,xt(),2);d=e.l;return e.return(d.delete("LogsRequestsStore",a))})})};
zt=function(){return g.D(this,function b(){var c;return g.z(b,function(d){if(1==d.i)return g.w(d,ms(ls(),Dt),2);c=d.l;var e=d.return,f=Object.assign({},c);delete f.Authorization;var h=Dl();if(h){var l=new nn;l.update(g.M("INNERTUBE_API_KEY",void 0));l.update(h);f.hash=g.uf(l.digest(),3)}h=new nn;h.update(JSON.stringify(f,Object.keys(f).sort()));f=h.digest();h="";for(l=0;l<f.length;l++)h+="0123456789ABCDEF".charAt(Math.floor(f[l]/16))+"0123456789ABCDEF".charAt(f[l]%16);return e.call(d,h)})})};
At=function(a){var b=Ro("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&es("nwl_transaction_latency_payload",a)};
Ft=function(){Et||(Et=new as("yt.offline"));return Et};
Gt=function(){if(g.Qo("offline_error_handling")){var a=Ft().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new g.Cs(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;g.Vo(c)}Ft().set("errors",{},2592E3,!0)}}};
Ht=function(){g.am.call(this);this.X=0;this.C=this.u=!1;this.G=0;this.B=this.L=!1;this.i=this.Mv();this.B=g.Qo("validate_network_status");vfa(this);wfa(this)};
It=function(){if(!Ht.i){var a=g.Ha("yt.networkStatusManager.instance")||new Ht;g.Ga("yt.networkStatusManager.instance",a,void 0);Ht.i=a}return Ht.i};
wfa=function(a){window.addEventListener("online",function(){return g.D(a,function c(){var d=this;return g.z(c,function(e){if(1==e.i)return d.B?g.w(e,d.Nm(),2):(d.i=!0,d.u&&d.dispatchEvent("ytnetworkstatus-online"),e.sb(2));Jt(d);d.L&&Gt();g.sa(e)})})})};
vfa=function(a){window.addEventListener("offline",function(){return g.D(a,function c(){var d=this;return g.z(c,function(e){if(1==e.i)return d.B?g.w(e,d.Nm(),2):(d.i=!1,d.u&&d.dispatchEvent("ytnetworkstatus-offline"),e.sb(2));Jt(d);g.sa(e)})})})};
Kt=function(a){a.X=iq(0,function(){return g.D(a,function c(){var d=this;return g.z(c,function(e){if(1==e.i){if(g.Qo("trigger_nsm_validation_checks_with_nwl")&&!d.i)return g.w(e,d.Nm(),3);if(d.Mv()){if(!1!==d.i)return e.sb(3);d.C=!0;d.G=(0,g.N)();return d.u?d.B?g.w(e,d.Nm(),11):(d.i=!0,d.dispatchEvent("ytnetworkstatus-online"),e.sb(11)):e.sb(11)}if(!0!==d.i)return e.sb(3);d.C=!0;d.G=(0,g.N)();return d.u?d.B?g.w(e,d.Nm(),3):(d.i=!1,d.dispatchEvent("ytnetworkstatus-offline"),e.sb(3)):e.sb(3)}if(3!=e.i)return d.L&&
Gt(),e.sb(3);Kt(d);g.sa(e)})})},xfa)};
Jt=function(a){a.C&&(Xo(new g.Cs("NetworkStatusManager state did not match poll",(0,g.N)()-a.G)),a.C=!1)};
Mt=function(a){a=void 0===a?{}:a;g.am.call(this);var b=this;this.u=this.C=0;this.i=It();var c=g.Ha("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.dN);a.qO&&(c=g.Ha("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=g.Ha("yt.networkStatusManager.instance.listen").bind(this.i))a.Ww?(this.Ww=a.Ww,c("ytnetworkstatus-online",function(){Lt(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Lt(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))};
Lt=function(a,b){a.Ww?a.u?(g.nq(a.C),a.C=g.jq(function(){a.B!==b&&(a.dispatchEvent(b),a.B=b,a.u=(0,g.N)())},a.Ww-((0,g.N)()-a.u))):(a.dispatchEvent(b),a.B=b,a.u=(0,g.N)()):a.dispatchEvent(b)};
Tt=function(a,b){function c(d){var e=Nt().Nj();if(!Ot()||!d||e&&g.Qo("vss_networkless_bypass_write"))Pt(a,b);else{var f={url:a,options:b,timestamp:(0,g.N)(),status:"NEW",sendCount:0};Bt(f).then(function(h){f.id=h;(Nt().Nj()||g.Qo("networkless_always_online"))&&Qt(f)}).catch(function(h){Qt(f);
Rt(h)})}}
b=void 0===b?{}:b;g.Qo("skip_is_supported_killswitch")?ot().then(function(d){c(d)}):c(St())};
Ut=function(a,b){function c(e){if(Ot()&&e){var f={url:a,options:b,timestamp:(0,g.N)(),status:"NEW",sendCount:0};if(Nt().Nj()){var h=b.onError?b.onError:function(){};
b.onError=function(l,m){return g.D(d,function p(){return g.z(p,function(r){if(1==r.i)return g.w(r,Bt(f).catch(function(t){Rt(t)}),2);
h(l,m);g.sa(r)})})};
Pt(a,b)}else Bt(f).catch(function(l){Rt(l)})}else Pt(a,b)}
var d=this;b=void 0===b?{}:b;g.Qo("skip_is_supported_killswitch")?ot().then(function(e){c(e)}):c(St())};
Vt=function(a,b){function c(d){if(Ot()&&d){var e={url:a,options:b,timestamp:(0,g.N)(),status:"NEW",sendCount:0},f=!1,h=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(l,m){void 0!==e.id?Ct(e.id):f=!0;h(l,m)};
Pt(e.url,e.options);Bt(e).then(function(l){e.id=l;f&&Ct(e.id)}).catch(function(l){Rt(l)})}else Pt(a,b)}
b=void 0===b?{}:b;g.Qo("skip_is_supported_killswitch")?ot().then(function(d){c(d)}):c(St())};
Xt=function(){var a=this;Wt||(Wt=g.jq(function(){return g.D(a,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,sfa(),2);if(3!=e.i)return d=e.l,d?g.w(e,Qt(d),3):(g.nq(Wt),Wt=0,e.return());Wt=0;Xt();g.sa(e)})})},100))};
Qt=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){switch(e.i){case 1:if(void 0===a.id){e.sb(2);break}return g.w(e,tfa(a.id),3);case 3:(d=e.l)?a=d:Xo(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=(0,g.N)()-f)){e.sb(4);break}Xo(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.sb(5);break}return g.w(e,Ct(a.id),5);case 5:return e.return();case 4:f=a=yfa(a);var h,l;if(null===(l=null===(h=null===
f||void 0===f?void 0:f.options)||void 0===h?void 0:h.postParams)||void 0===l?0:l.requestTimeMs)f.options.postParams.requestTimeMs=Math.round((0,g.N)());(a=f)&&Pt(a.url,a.options);g.sa(e)}})})};
yfa=function(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return g.D(b,function l(){return g.z(l,function(m){switch(m.i){case 1:if(!(g.Qo("trigger_nsm_validation_checks_with_nwl")&&(g.Ha("ytNetworklessLoggingInitializationOptions")?Yt.potentialEsfErrorCounter:Zt)<=Ro("potential_esf_error_limit",10))){m.sb(2);break}return g.w(m,Nt().Nm(),3);case 3:if(Nt().Nj())g.Ha("ytNetworklessLoggingInitializationOptions")&&Yt.potentialEsfErrorCounter++,Zt++;else return c(e,f),m.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){m.sb(4);
break}return 1>a.sendCount?g.w(m,ufa(a.id),8):g.w(m,Ct(a.id),4);case 8:g.jq(function(){Nt().Nj()&&Xt()},5E3);
case 4:c(e,f),g.sa(m)}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return g.D(b,function l(){return g.z(l,function(m){if(1==m.i)return void 0===(null===a||void 0===a?void 0:a.id)?m.sb(2):g.w(m,Ct(a.id),2);d(e,f);g.sa(m)})})};
return a};
Nt=function(){$t||($t=new Mt({qO:!0,dN:g.Qo("trigger_nsm_validation_checks_with_nwl")}));return $t};
Rt=function(a){if(Nt().Nj())g.Vo(a);else if(g.Qo("offline_error_handling")){var b=Ft().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Ft().set("errors",b,2592E3,!0)}};
Pt=function(a,b){if(g.Qo("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=g.q(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?g.wp(a,b):Oq(a,void 0,b.postBody)}else g.wp(a,b)};
Ot=function(){return g.Ha("ytNetworklessLoggingInitializationOptions")?Yt.isNwlInitialized:!1};
St=function(){return g.Ha("ytNetworklessLoggingInitializationOptions")?Yt.isIdbSupported:!1};
g.au=function(a){this.i=null;a?this.i=a:Er()&&(this.i=g.kr())};
g.lr=function(a,b,c,d){function e(m){try{(void 0===m?0:m)&&d.retry&&!d.gH.bypassNetworkless?(f.method="POST",!d.gH.writeThenSend&&g.Qo("nwl_send_fast_on_unload")?Vt(l,f):Tt(l,f)):(f.method="POST",f.postParams||(f.postParams={}),g.wp(l,f))}catch(n){if("InvalidAccessError"==n.name)Xo(Error("An extension is blocking network request."));else throw n;}}
!g.M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Xo(new g.Cs("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new g.Cs("innertube xhrclient not ready",b,c,d),g.Vo(a),a;var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(m,n){if(d.onSuccess)d.onSuccess(n)},
onFetchSuccess:function(m){if(d.onSuccess)d.onSuccess(m)},
onError:function(m,n){if(d.onError)d.onError(n)},
onFetchError:function(m){if(d.onError)d.onError(m)},
timeout:d.timeout,withCredentials:!0};c="";var h=a.i.tG;h&&(c=h);h=Uea(a.i.vG||!1,c,d);Object.assign(f.headers,h);f.headers.Authorization&&!c&&(f.headers["x-origin"]=window.location.origin);b="/youtubei/"+a.i.innertubeApiVersion+"/"+b;h={alt:"json"};a.i.uG&&f.headers.Authorization||(h.key=a.i.innertubeApiKey);var l=g.ep(""+c+b,h);Ot()?ot().then(function(m){e(m)}):e(!1)};
g.us=function(a,b,c){c=void 0===c?{}:c;var d=g.au;g.M("ytLoggingEventsDefaultDisabled",!1)&&g.au==g.au&&(d=null);qr(a,b,d,c)};
Bfa=function(){var a=void 0===a?window.location.href:a;if(g.Qo("kevlar_disable_theme_param"))return null;var b=yd(g.Ad(5,a));if(zfa(b))return"USER_INTERFACE_THEME_DARK";try{var c=g.cp(a).theme;return Afa.get(c)||null}catch(d){}return null};
zfa=function(a){var b=Cfa.map(function(c){return c.toLowerCase()});
return!g.Qo("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1};
cu=function(a,b,c){a&&(a.dataset?a.dataset[bu(b)]=String(c):a.setAttribute("data-"+b,c))};
du=function(a){return a?a.dataset?a.dataset[bu("loaded")]:a.getAttribute("data-loaded"):null};
bu=function(a){return eu[a]||(eu[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
fu=function(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()};
iu=function(a){var b;gu()?hu()==a&&(b=document):b=a;return b&&(a=Pp(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))?(b=a.call(b),b instanceof Promise?b:Promise.resolve()):Promise.resolve()};
ju=function(a){return g.bb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
Dfa=function(){var a=document;return g.bb(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
gu=function(){return!!Pp(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)};
hu=function(a){a=void 0===a?!1:a;var b=Pp(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null};
ku=function(a){g.F.call(this);this.G=[];this.Fa=a||this};
lu=function(a,b,c,d){for(var e=0;e<c.length;e++)a.N(b,c[e],d)};
g.mu=function(a){for(;a.G.length;){var b=a.G.pop();b.target.removeEventListener(b.name,b.callback)}};
g.O=function(a){a=void 0===a?!1:a;g.F.call(this);this.Ec=new g.Rn(a);g.G(this,this.Ec)};
nu=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
ou=function(a,b,c){for(var d in b)a.unsubscribe(d,b[d],c)};
g.qu=function(a,b,c,d){g.O.call(this);this.u=!!b;this.G=a;this.V=c||a;this.L=!!d;this.i=new ku(this);g.G(this,this.i);this.C=this.J=null;this.B=this.l=!1;b&&(g.Ae&&a.setAttribute("draggable","true"),a.style.touchAction="none");pu(this)};
ru=function(a,b,c){a.i.N(a.V,b,c,void 0,!a.u)};
pu=function(a){a.C=null;a.J=null;ru(a,tu("over"),a.dH);ru(a,"touchstart",a.AC);a.u&&ru(a,tu("down"),a.zO)};
uu=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.J)return d}return null};
tu=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
vu=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.Tb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.Tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
Efa=function(a){a instanceof vu||(a=new vu(a));return a};
xu=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=Date.now();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(wu)for(b=1,c=0;c<wu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^wu.charCodeAt(c),b++;return a};
yu=function(){for(var a=xu(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
g.zu=function(){return g.Pc(xu(),function(a){return(a&15).toString(16)}).join("")};
Au=function(a){this.i=a};
g.Bu=function(a){return new Au({trackingParams:a})};
Gfa=function(a){var b=Ffa++;return new Au({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0})};
Cu=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Du=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Eu=function(a){return g.M(Du(void 0===a?0:a),void 0)};
g.Fu=function(a){return(a=Eu(void 0===a?0:a))?new Au({veType:a,youtubeData:void 0}):null};
Gu=function(){var a=g.M("csn-to-ctt-auth-info");a||(a={},Mo("csn-to-ctt-auth-info",a));return a};
g.Hu=function(a){a=void 0===a?0:a;var b=g.M(Cu(a));if(!b&&!g.M("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null};
Hfa=function(a,b,c){var d=Gu();(c=g.Hu(c))&&delete d[c];b&&(d[a]=b)};
Iu=function(a){return Gu()[a]};
Ku=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.M(Cu(c))||b!==g.M(Du(c)))Hfa(a,d,c),Mo(Cu(c),a),Mo(Du(c),b),b=function(){setTimeout(function(){a&&qr("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ju,clientScreenNonce:a},g.au)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
Ifa=function(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")};
Jfa=function(){this.Il=[];this.Xk=[]};
Nu=function(){if(!Lu){var a=Lu=new Jfa;a.Xk.length=0;a.Il.length=0;Mu(a,Kfa)}return Lu};
Mu=function(a,b){b.Xk&&a.Xk.push.apply(a.Xk,b.Xk);b.Il&&a.Il.push.apply(a.Il,b.Il)};
Lfa=function(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ou(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ou(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ou(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)};
Ou=function(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity};
Ru=function(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Pu(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var h=a[e],l=b,m=c;f="string"!==typeof h||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(h=Lfa(atob(h.replace(/-/g,"+").replace(/_/g,"/"))))?Pu(f+".ve",h,l,m):0;d+=f;d+=Pu(e,a[e],b,c);if(500<d)break}}else c[b]=Qu(a),d+=c[b].length;else c[b]=Qu(a),d+=c[b].length;return d};
Pu=function(a,b,c,d){c+="."+a;a=Qu(b);d[c]=a;return c.length+a.length};
Qu=function(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)};
ts=function(a){g.Su(a)};
g.Tu=function(a){g.Su(a,"WARNING")};
g.Su=function(a,b){var c=void 0===c?{}:c;c.name=g.M("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=g.M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=c||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a){a.hasOwnProperty("level")&&a.level&&(b=a.level);if(g.Qo("console_log_js_exceptions")){var d=[];d.push("Name: "+a.name);d.push("Message: "+a.message);a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args));
d.push("File name: "+a.fileName);d.push("Stacktrace: "+a.stack);window.console.log(d.join("\n"),a)}if(!(5<=Uu)){d=Mfa;var e=Eda(a),f=e.message||"Unknown Error",h=e.name||"UnknownError",l=e.stack||a.l||"Not available";if(l.startsWith(h+": "+f)){var m=l.split("\n");m.shift();l=m.join("\n")}m=e.lineNumber||"Not available";e=e.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=Ru(a.args[p],"params."+p,c,n),500<=n);p++);else if(a.hasOwnProperty("params")&&
a.params){var r=a.params;if("object"===typeof a.params)for(p in r){if(r[p]){var t="params."+p,u=Qu(r[p]);c[t]=u;n+=t.length+u.length;if(500<n)break}}else c.params=Qu(r)}if(d.length)for(p=0;p<d.length&&!(n=Ru(d[p],"params.context."+p,c,n),500<=n);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);c={message:f,name:h,lineNumber:m,fileName:e,stack:l,params:c,sampleWeight:1};p=Number(a.columnNumber);isNaN(p)||(c.lineNumber=c.lineNumber+":"+p);if("IGNORED"===a.level)a=
0;else a:{a=Nu();p=g.q(a.Xk);for(d=p.next();!d.done;d=p.next())if(d=d.value,c.message&&c.message.match(d.Xs)){a=d.weight;break a}a=g.q(a.Il);for(p=a.next();!p.done;p=a.next())if(p=p.value,p.callback(c)){a=p.weight;break a}a=1}c.sampleWeight=a;a=g.q(Nfa);for(p=a.next();!p.done;p=a.next())if(p=p.value,p.AB[c.name])for(f=g.q(p.AB[c.name]),d=f.next();!d.done;d=f.next())if(h=d.value,d=c.message.match(h.Ph)){c.params["params.error.original"]=d[0];f=h.groups;h={};for(m=0;m<f.length;m++)h[f[m]]=d[m+1],c.params["params.error."+
f[m]]=d[m+1];c.message=p.XG(h);break}c.params||(c.params={});a=Nu();c.params["params.errorServiceSignature"]="msg="+a.Xk.length+"&cb="+a.Il.length;c.params["params.serviceWorker"]="false";g.A.document&&g.A.document.querySelectorAll&&(c.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(0!==c.sampleWeight&&!Vu.has(c.message)){"ERROR"===b?(Wu.W("handleError",c),g.Qo("record_app_crashed_web")&&
0===Xu&&1===c.sampleWeight&&(Xu++,g.us("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Ofa++):"WARNING"===b&&Wu.W("handleWarning",c);if(g.Qo("kevlar_gel_error_routing")){a=b;b:{p=g.q(Pfa);for(d=p.next();!d.done;d=p.next())if(wq(d.value.toLowerCase())){p=!0;break b}p=!1}if(p)p=void 0;else{d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);p=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==p.length&&(1!==p.length||isNaN(Number(p[0]))?2!==p.length||isNaN(Number(p[0]))||
isNaN(Number(p[1]))||(d.lineNumber=Number(p[0]),d.columnNumber=Number(p[1])):d.lineNumber=Number(p[0]));p={level:"ERROR_LEVEL_UNKNOWN",message:c.message,errorClassName:c.name,sampleWeight:c.sampleWeight};"ERROR"===a?p.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(p.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};f={pageUrl:window.location.href,kvPairs:[]};g.M("FEXP_EXPERIMENTS")&&(f.experimentIds=g.M("FEXP_EXPERIMENTS"));if(h=c.params)for(m=g.q(Object.keys(h)),e=m.next();!e.done;e=
m.next())e=e.value,f.kvPairs.push({key:"client."+e,value:String(h[e])});h=No("SERVER_NAME");m=No("SERVER_VERSION");h&&m&&(f.kvPairs.push({key:"server.name",value:h}),f.kvPairs.push({key:"server.version",value:m}));p={errorMetadata:f,stackTrace:d,logMessage:p}}p&&(g.us("clientError",p),("ERROR"===a||g.Qo("errors_flush_gel_always_killswitch"))&&cr())}if(!g.Qo("suppress_error_204_logging")){a=c.params||{};b={urlParams:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,
level:b,"client.name":a.name},postParams:{url:g.M("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){c.stack&&(b.postParams.stack=c.stack);p=g.q(Object.keys(a));for(d=p.next();!d.done;d=p.next())d=d.value,b.postParams["client."+d]=a[d];if(a=g.M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(p=g.q(Object.keys(a)),d=p.next();!d.done;d=p.next())d=d.value,b.postParams[d]=a[d];a=g.M("SERVER_NAME",void 0);p=g.M("SERVER_VERSION",
void 0);a&&p&&(b.postParams["server.name"]=a,b.postParams["server.version"]=p)}g.wp(g.M("ECATCHER_REPORT_HOST","")+"/error_204",b)}Vu.add(c.message);Uu++}}}};
Qfa=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,g.ma(c))};
Yu=function(a){bs.call(this,1,arguments);this.csn=a};
g.$u=function(a,b,c,d){var e=d;g.Qo("web_dedupe_ve_grafting")&&(e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f}));
c={csn:b,parentVe:c.getAsJson(),childVes:g.Pc(e,function(f){return f.getAsJson()})};
d=g.q(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(g.Pb(e)||!e.trackingParams&&!e.veType)&&g.Tu(Error("Child VE logged with no data"));d={Be:Iu(b),fl:b};"UNDEFINED_CSN"==b?Zu("visualElementAttached",c,d):a?qr("visualElementAttached",c,a,d):g.us("visualElementAttached",c,d)};
g.av=function(a,b,c){var d=g.Qo("use_default_events_client")?void 0:g.au;b={csn:a,ve:b.getAsJson(),eventType:1};c&&(b.clientData=c);c={Be:Iu(a),fl:a};"UNDEFINED_CSN"==a?Zu("visualElementShown",b,c):d?qr("visualElementShown",b,d,c):g.us("visualElementShown",b,c)};
bv=function(a,b,c,d,e){var f=(d=void 0===d?!1:d)?16:8;c={csn:b,ve:c.getAsJson(),eventType:f};e&&(c.clientData=e);d={Be:Iu(b),fl:b,eN:d};"UNDEFINED_CSN"==b?Zu("visualElementHidden",c,d):a?qr("visualElementHidden",c,a,d):g.us("visualElementHidden",c,d)};
cv=function(a,b,c,d){var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:e};d&&(c.clientData=d);d={Be:Iu(b),fl:b};"UNDEFINED_CSN"==b?Zu("visualElementGestured",c,d):a?qr("visualElementGestured",c,a,d):g.us("visualElementGestured",c,d)};
Rfa=function(){return g.vf(Math.random()+"")};
Zu=function(a,b,c){dv.push({payloadName:a,payload:b,options:c});ev||(ev=js(fv,Sfa))};
Sfa=function(a){if(dv){for(var b=g.q(dv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,qr(c.payloadName,c.payload,null,c.options));dv.length=0}ev=0};
g.gv=function(a,b,c){g.$u(g.Qo("use_default_events_client")?void 0:g.au,a,b,[c])};
g.hv=function(a,b){var c=g.Qo("use_default_events_client")?void 0:g.au;g.zb(b,function(d){d={csn:a,ve:d.getAsJson(),eventType:4};var e={Be:Iu(a),fl:a};"UNDEFINED_CSN"==a?Zu("visualElementShown",d,e):c?qr("visualElementShown",d,c,e):g.us("visualElementShown",d,e)})};
g.iv=function(a,b){var c=g.Qo("use_default_events_client")?void 0:g.au;g.zb(b,function(d){bv(c,a,d,void 0,void 0)})};
g.jv=function(a,b,c){cv(g.Qo("use_default_events_client")?void 0:g.au,a,b,c)};
kv=function(){this.l=new Set;this.i=new Set;this.u=new Map};
g.nv=function(a,b,c){var d=c&&0<c?c:0;c=d?g.Ra()+1E3*d:0;if((d=d?(0,g.lv)():mv())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.ov=function(a){var b=mv(),c=(0,g.lv)();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d};
pv=function(){var a=(0,g.lv)();if(a&&(a=a.l("yt-player-quality")))return a.creation};
g.qv=function(a){try{var b=mv(),c=(0,g.lv)();b&&b.remove(a);c&&c.remove(a)}catch(d){}};
g.rv=function(){return g.ov("yt-remote-session-screen-id")};
g.tv=function(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Tfa,""),c=c.replace(Ufa,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Vfa(a,b,c)};
Vfa=function(a,b,c){c=void 0===c?null:c;var d=uv(a),e=document.getElementById(d),f=e&&du(e),h=e&&!f;f?b&&b():(b&&(f=g.Uq(d,b),b=""+g.Oa(b),vv[b]=f),h||(e=Wfa(a,d,function(){du(e)||(cu(e,"loaded","true"),g.Wq(d),g.pp(g.Pa(Yq,d),0))},c)))};
Wfa=function(a,b,c,d){d=void 0===d?null:d;var e=g.Fe("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);g.jd(e,g.jg(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e};
uv=function(a){var b=document.createElement("a");g.hd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+td(a)};
yv=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!wv(a)||c.some(function(e){return!wv(e)}))throw Error("Only objects may be merged.");
c=g.q(c);for(d=c.next();!d.done;d=c.next())xv(a,d.value);return a};
xv=function(a,b){for(var c in b)if(wv(b[c])){if(c in a&&!wv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});xv(a[c],b[c])}else if(zv(b[c])){if(c in a&&!zv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Av(a[c],b[c])}else a[c]=b[c];return a};
Av=function(a,b){b=g.q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,wv(c)?a.push(xv({},c)):zv(c)?a.push(Av([],c)):a.push(c);return a};
wv=function(a){return"object"===typeof a&&!Array.isArray(a)};
zv=function(a){return"object"===typeof a&&Array.isArray(a)};
Bv=function(a,b,c,d,e,f){g.F.call(this);this.i=a;this.l=c;this.u=d;this.C=e;this.B=f};
Yfa=function(a,b,c){c.Nq?(Cv(a.i.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return[]},b.slotId),Xfa(a.C,b)):Dv(a.B,c.Ak,b.slotId)};
Zfa=function(a,b,c,d){var e=Ev(a.u.get(),1);Cv(a.i.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return Fv(a.l.get(),c,d,e.clientPlaybackNonce,e.iF,e.daiEnabled,e)},b)};
Gv=function(a,b,c){if(c&&c!==a.tb)return!1;b=g.q(b);for(c=b.next();!c.done;c=b.next())if(!a.Ga.i.has(c.value))return!1;return!0};
Hv=function(a,b){this.Rm=b;this.triggerType="TRIGGER_TYPE_BEFORE_CONTENT_VIDEO_ID_STARTED";this.triggerId=a(this.triggerType)};
P=function(a,b,c,d,e){d=void 0===d?{}:d;if(!e||5E-4>Math.random()){b=b||null;c=c||null;a=a instanceof Error?a:new g.Cs(a);if(a.args)for(var f=g.q(a.args),h=f.next();!h.done;h=f.next())h=h.value,h instanceof Object&&(d=Object.assign(Object.assign({},h),d));d.category="H5 Ads Control Flow";b&&(d.slot=b?"slot:  "+b.tb:"");c&&(d.layout=c?"layout:  "+c.layoutType:"");e&&(d.known_error_aggressively_sampled=!0);a.args=[d];g.Tu(a)}};
Iv=function(a,b,c,d,e,f,h){g.F.call(this);this.B=a;this.l=b;this.bz=c;this.Pa=d;this.C=e;this.i=f;this.u=h};
Jv=function(a,b,c,d,e,f){this.startSecs=a;this.durationSecs=b;this.context=c;this.identifier=d;this.event=e;this.i=f};
Kv=function(a,b,c,d){this.u=a;this.yd=null;this.l=b;this.i=0;this.daiEnabled=void 0===c?!1:c;this.visible=!0;this.B=void 0===d?!1:d};
Lv=function(a,b,c,d){!a&&(void 0===c?0:c)&&g.Tu(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
Nv=function(a,b,c){return b&&b.test(a)||Mv&&c&&c.test(a)?!0:!1};
Pv=function(a){return(a=Ov&&Ov.exec(a))?a[0]:""};
Qv=function(a){var b=void 0===b?!1:b;return Lv(Nv(a,$fa,aga),a,b,"Trusted Stream URL")};
g.Rv=function(a){var b=void 0===b?!1:b;return Lv(Nv(a,cga,dga),a,b,"Trusted Image URL")};
Sv=function(a){var b=void 0===b?!1:b;return Lv(Nv(a,ega,null),a,b,"Trusted Promoted Video Domain URL")};
gga=function(a){var b=void 0===b?!1:b;return Lv(Nv(a,fga,null),a,b,"Drm Licensor URL")};
Tv=function(a,b){b=void 0===b?!1:b;return Lv(Nv(a,hga,iga),a,b,"Captions URL")};
Uv=function(a){a=new g.Qm(a);g.Rm(a,document.location.protocol);g.Sm(a,document.location.hostname);document.location.port&&g.Tm(a,document.location.port);return a.toString()};
Vv=function(a){a=new g.Qm(a);g.Rm(a,document.location.protocol);return a.toString()};
g.Xv=function(a,b,c){this.start=a;this.end=b;this.active=!0;this.color="";this.B=jga++;a=c||{};this.id=a.id||"";this.priority=a.priority||7;this.visible=a.visible||!1;this.style=a.style||Wv.AD_MARKER;this.namespace=a.namespace||"";if(b=a.color)b=b.toString(16),this.color="#"+Array(7-b.length).join("0")+b;this.tooltip=a.tooltip;this.icons=a.icons?a.icons.filter(function(d){return g.jh(d.thumbnails,function(e){return g.Rv(e.url)})}):null;
this.visible=this.visible;this.style=this.style;this.start=this.start};
Yv=function(a){return-0x8000000000000===a?"BEFORE_MEDIA_START":0===a?"MEDIA_START":0x7ffffffffffff===a?"MEDIA_END":0x8000000000000===a?"AFTER_MEDIA_END":a.toString()};
kga=function(a,b){switch(a.style){case Wv.CHAPTER_MARKER:return b?8:5;case Wv.AD_MARKER:return 6;case Wv.TIME_MARKER:return Number.POSITIVE_INFINITY;default:return 0}};
g.Zv=function(a,b){return a.start-b.start||a.priority-b.priority||a.B-b.B};
g.$v=function(a){return"crn_"+a};
g.aw=function(a){return"crx_"+a};
bw=function(a,b,c,d,e){g.Xv.call(this,b.start,b.end,{id:d,namespace:"ad",priority:e,visible:c});this.i=a.kind||"AD_PLACEMENT_KIND_UNKNOWN";this.l=!1;this.u=null};
cw=function(a){return"AD_PLACEMENT_KIND_START"==a.i};
dw=function(a){return"AD_PLACEMENT_KIND_MILLISECONDS"==a.i};
ew=function(a,b,c){c=void 0===c?!1:c;switch(a.kind){case "AD_PLACEMENT_KIND_START":return new Nn(-0x8000000000000,-0x8000000000000);case "AD_PLACEMENT_KIND_END":return c?new Nn(Math.max(0,b.u-b.i),0x7ffffffffffff):new Nn(0x7ffffffffffff,0x8000000000000);case "AD_PLACEMENT_KIND_MILLISECONDS":var d=a.adTimeOffset;a=parseInt(d.offsetStartMilliseconds,10);d=parseInt(d.offsetEndMilliseconds,10);-1===d&&(d=b.u);if(c&&(d=a,a=Math.max(0,a-b.i),a==d))break;return new Nn(a,d);case "AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED":d=
b.yd;a=1E3*d.startSecs;if(c){if(a<b.l)return new Nn(a-4E3,a);c=Math.max(0,a-b.l-1E4);return new Nn(b.B?b.l:Math.floor(b.l+Math.random()*c),a)}return new Nn(a,a+(0<d.durationSecs?1E3*d.durationSecs:5E3))}return null};
fw=function(a,b,c){this.actionType=b;this.id=c;this.content=a};
g.gw=function(a){if(a.simpleText)return a.simpleText;if(a.runs){var b=[];a=g.q(a.runs);for(var c=a.next();!c.done;c=a.next())c=c.value,c.text&&b.push(c.text);return b.join("")}return""};
g.hw=function(a){if(a.simpleText)return a=document.createTextNode(a.simpleText),a;var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];if(d.text){var e=b,f=e.push,h=null;var l=d.text;d.bold&&(h=Ee("B",null,h||l));d.italics&&(h=Ee("I",null,h||l));d.strikethrough&&(h=Ee("STRIKE",null,h||l));d.navigationEndpoint&&d.navigationEndpoint.urlEndpoint&&(d=d.navigationEndpoint.urlEndpoint,h=Ee("A",null,h||l),g.hd(h,d.url),"TARGET_NEW_WINDOW"==d.target&&(h.target="_blank"));l=h||Ee("SPAN",null,
l);f.call(e,l)}}return 1==b.length?b[0]:Ee("SPAN",null,b)};
iw=function(a,b){bs.call(this,1,arguments)};
jw=function(a,b){bs.call(this,1,arguments);this.i=a};
lga=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
lw=function(a){var b=kw(a);if(b.aft)return b.aft;a=g.M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
ow=function(){var a;if(g.Qo("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===mw||void 0===mw?void 0:mw.getEntriesByType)||void 0===a?void 0:a.call(mw,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=nw(e.requestStart),e.responseEnd=nw(e.responseEnd),e.redirectStart=nw(e.redirectStart),e.redirectEnd=nw(e.redirectEnd),e.domainLookupEnd=nw(e.domainLookupEnd),e.connectStart=nw(e.connectStart),
e.connectEnd=nw(e.connectEnd),e.responseStart=nw(e.responseStart),e.secureConnectionStart=nw(e.secureConnectionStart),e.domainLookupStart=nw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=mw.timing}else a=mw.timing;return a};
pw=function(){return g.Qo("csi_use_time_origin")&&mw.timeOrigin?Math.floor(mw.timeOrigin):mw.timing.navigationStart};
nw=function(a){return Math.round(pw()+a)};
qw=function(a,b){g.Ga("ytglobal.timing"+(b||"")+"ready_",a,void 0)};
rw=function(a){return!!g.Ha("yt.timing."+(a||"")+"pingSent_")};
tw=function(a,b){g.Ga("yt.timing."+(b||"")+"pingSent_",a,void 0)};
vw=function(a){return g.Ha("ytcsi."+(a||"")+"data_")||uw(a)};
ww=function(a){a=vw(a);a.info||(a.info={});return a.info};
kw=function(a){a=vw(a);a.tick||(a.tick={});return a.tick};
xw=function(a){var b=vw(a).nonce;b||(b=yu(),vw(a).nonce=b);return b};
uw=function(a){var b={tick:{},info:{}};g.Ga("ytcsi."+(a||"")+"data_",b,void 0);return b};
zw=function(a){var b=kw(a||""),c=lw(a);c&&!yw&&(es(mga,new iw(Math.round(c-b._start),a)),yw=!0)};
nga=function(){if(mw.getEntriesByType){var a=mw.getEntriesByType("paint");if(a=g.bb(a,function(b){return"first-paint"===b.name}))return nw(a.startTime)}a=mw.timing;
return a.EO?Math.max(0,a.EO):0};
Aw=function(){var a=g.Ha("ytcsi.debug");a||(a=[],g.Ga("ytcsi.debug",a,void 0),g.Ga("ytcsi.reference",{},void 0));return a};
Cw=function(a){a=a||"";var b=Bw();if(b[a])return b[a];var c=Aw(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d};
Dw=function(a){a=a||"";var b=Bw();b[a]&&delete b[a];var c=Aw(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);b[a]=d};
Bw=function(){var a=g.Ha("ytcsi.reference");if(a)return a;Aw();return g.Ha("ytcsi.reference")};
Ew=function(){this.i=0};
Fw=function(){Ew.i||(Ew.i=new Ew);return Ew.i};
Hw=function(a,b){Gw[b]=Gw[b]||{count:0};var c=Gw[b];c.count++;c.time=(0,g.N)();a.i||(a.i=iq(0,function(){var d=(0,g.N)(),e;for(e in Gw)Gw[e]&&6E4<d-Gw[e].time&&delete Gw[e];a&&(a.i=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.Cs("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||g.Tu(c)),!0):!1};
Iw=function(a){return!!g.M("FORCE_CSI_ON_GEL",!1)||g.Qo("csi_on_gel")||!!vw(a).useGel};
Kw=function(a,b,c){var d=Jw(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.N)();return Iw(c)?(Cw(c||"").tick[a]=b||(0,g.N)(),d=xw(c),"_start"===a?(a=Fw(),Hw(a,"baseline_"+d)||g.us("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):Fw().tick(a,d,b),zw(c),!0):!1};
Nw=function(a,b,c){c=Jw(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Lw){c=Lw[a];g.fb(oga,c)&&(b=!!b);a in Mw&&"string"===typeof b&&(b=Mw[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},h=0;h<b.length-1;h++){var l=b[h];f[l]={};f=f[l]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return yv({},d)}g.fb(pga,a)||g.Tu(new g.Cs("Unknown label logged with GEL CSI",a))};
Jw=function(a){a=vw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel};
Ow=function(a){a=Jw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos};
Qw=function(a){if(Iw(a)){var b={actionType:Pw[g.M((a||"")+"TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Pw[g.M("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=g.Hu();c&&(b.clientScreenNonce=c);a=xw(a);Fw().info(b,a)}};
Rw=function(a){uw(a);qga();tw(!1,a);a||(g.M("TIMING_ACTION")&&Mo("PREVIOUS_ACTION",g.M("TIMING_ACTION")),Mo("TIMING_ACTION",""))};
Vw=function(a,b,c,d){d=d?d:a;Sw("c",d);Dw(d);Rw(d);vw(d).useGel=!0;Cw(d||"").info.actionType=a;Mo(d+"TIMING_AFT_KEYS",b);Mo(d+"TIMING_ACTION",a);Tw("c",c,d);Qw(d);qw(!0,d);Uw(d)};
Tw=function(a,b,c){g.Ww("yt_sts",a,c);Xw("_start",b,c)};
g.Ww=function(a,b,c){null!==b&&(ww(c)[a]=b,Iw(c)?(a=Nw(a,b,c))&&Yw(a,c):Cw(c||"").info[a]=b)};
Yw=function(a,b){if(Iw(b)){var c=Cw(b||"");yv(c.info,a);yv(Ow(b),a);b=xw(b);Fw().info(a,b)}};
Xw=function(a,b,c){var d=kw(c);if(!b&&"_"!==a[0]){var e=a;mw.mark&&(nc(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),mw.mark(e))}e=b||(0,g.N)();d[a]=e;Kw(a,b,c)||(Uw(c),Cw(c||"").tick[a]=b||(0,g.N)());return d[a]};
Zw=function(a,b){if(Iw(void 0)){var c=Jw(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};Cw("").span[String(a.spanName)]=a;b=Jw(void 0);b.gelSpans||(b.gelSpans={});yv(b.gelSpans,a);b=xw(void 0);Fw().span(a,b)}};
$w=function(a){var b="above_the_fold";mw&&mw.measure&&(nc(b,"measure_")||(b="measure_"+b),a?mw.measure(b,a):mw.measure(b))};
ax=function(a,b){b=kw(b);return a in b};
bx=function(a,b){ax("_start",b)&&!ax(a,b)&&Xw(a,void 0,b)};
Uw=function(a){if(!rw(a)){var b=g.M((a||"")+"TIMING_ACTION",void 0),c=kw(a);if(g.Ha("ytglobal.timing"+(a||"")+"ready_")&&b&&ax("_start")&&lw(a))if(zw(a),a)cx(a);else{b=!0;var d=g.M("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&cx(a)}}};
dx=function(){switch(Op()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
cx=function(a){if(!Iw(a)){var b=kw(a),c=ww(a),d=b._start,e=g.M("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.M((a||"")+"TIMING_ACTION",void 0)},h=c.srt;void 0!==b.srt&&delete c.srt;b.aft=lw(a);var l=kw(a),m=l.pbr,n=l.vc;l=l.pbs;m&&n&&l&&m<n&&n<l&&ww(a).yt_pvis&&"youtube"===e&&(g.Ww("yt_lt","hot_bg",a),e=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-e));for(var p in c)"_"!==p.charAt(0)&&(f[p]=c[p]);b.ps=(0,g.N)();p={};e=[];for(var r in b)"_"!==r.charAt(0)&&(m=Math.round(b[r]-d),p[r]=m,e.push(r+
"."+m));f.rt=e.join(",");b=!!c.ap;c="";for(var t in f)f.hasOwnProperty(t)&&(c+="&"+t+"="+f[t]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||g.Qo("always_send_csi_204_with_beacon"))?Oq(f):g.Nq(f);tw(!0,a);es(ex,new jw(p.aft+(Number(h)||0),a))}};
Sw=function(a,b){if(Iw(b))ax("_start",b)&&Xw("aa",void 0,b);else if(!rw(b)){var c=g.M("CSI_SERVICE_NAME","youtube");g.M((b||"")+"TIMING_ACTION",void 0)&&c&&(Xw("aa",void 0,b),g.Ww("ap",1,b),g.Ww("yt_fss",a,b),cx(b))}};
rga=function(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);id()&&a.setAttribute("nonce",id());return c?(a=mw.getEntriesByName(c))&&a[0]&&(a=a[0],c=pw(),Xw("rsf_"+b,c+Math.round(a.fetchStart)),Xw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=ww(void 0),c=Ow(void 0),"rc"in b||"rc"in c||g.Ww("rc",""),0===a.transferSize))?!0:!1:!1};
sga=function(){var a=window.location.protocol,b=mw.getEntriesByType("resource");b=g.Ke(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=kh(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Xw("wffs",nw(b.startTime)),Xw("wffe",nw(b.responseEnd)))};
fx=function(){return!("function"!==typeof window.fetch||!window.ReadableStream)};
gx=function(a){if(a.us())return!1;a=a.getResponseHeader("content-type");return"audio/mp4"===a||"video/mp4"===a||"video/webm"===a};
hx=function(a,b){this.id=a;this.Jc=b;this.captionTracks=[];this.i=this.u=this.B=null;this.l="UNKNOWN";this.captionsInitialState="CAPTIONS_INITIAL_STATE_UNKNOWN"};
ix=function(a,b,c,d){this.u=c;this.reason=d;this.l=a||0;this.i=b||0};
jx=function(a,b){return a.l===b.l&&a.i===b.i&&a.u===b.u&&a.reason===b.reason};
lx=function(a,b,c,d){return new ix(g.kx[a]||0,g.kx[b]||0,c,d)};
mx=function(a){var b=g.kx.auto;return a.l===b&&a.i===b};
ox=function(a){return nx[a.i||a.l]||"auto"};
px=function(a,b){b=g.kx[b];return a.l<=b&&(!a.i||a.i>=b)};
qx=function(a,b,c){this.videoInfos=a;this.audioTracks=[];this.i=b||null;this.l=c||null;if(this.i)for(a=new Set,b=g.q(this.i),c=b.next();!c.done;c=b.next())if(c=c.value,c.Jc&&!a.has(c.Jc.id)){var d=new hx(c.id,c.Jc);a.add(c.Jc.id);this.audioTracks.push(d)}};
ux=function(a,b,c,d){var e=[],f=new Set,h=a.Y||a.Xa,l={};if(rx(c)){for(var m in c.i)c.i.hasOwnProperty(m)&&(d=c.i[m],l[d.info.i]=[d.info]);return l}for(var n in c.i)if(c.i.hasOwnProperty(n)){m=c.i[n];var p=m.info.kc();if(""===m.info.i)e.push(p),e.push("unkn");else if("304"!==p&&"266"!==p||!a.Na)if(a.C&&m.info.video&&m.info.video.i>a.C)e.push(p),e.push("max"+a.C);else if(a.G&&m.info.video&&m.info.video.i<a.G)e.push(p),e.push("min"+a.G);else if(a.Ta&&"h"===m.info.i&&m.info.video&&1080<m.info.video.i)e.push(p),
e.push("blkhigh264");else if(a.Ua&&m.info.video&&4320<=m.info.video.i&&32<m.info.video.fps)e.push(p),e.push("blk8khfr");else{var r=b.i.get(m.info.i);r=r&&0<r.SB;h&&r?(f.add(m.info.i),e.push(p),e.push("byerr")):(r=sx(b,m.info),!0!==r?(e.push(p),e.push(r)):"(h"!==m.info.i||b.B?(r="MAC3"===m.info.i||"MEAC3"===m.info.i||"M"===m.info.i,c.isLive&&r&&!a.Ea?(e.push(p),e.push("blk51live")):(l[m.info.i]=l[m.info.i]||[],l[m.info.i].push(m.info))):(e.push(p),e.push("enchdr")))}else e.push(p),e.push("blk2khfr")}a.i&&
(d(e.join(".")),c="bfflt."+tx(l),d(c));for(var t in l)l.hasOwnProperty(t)&&(c=t,l[c]&&l[c][0].isVideo()&&(l[c]=tga(a,l[c]),l[c]=uga(b,l[c],a.ub)));if(h)for(f=g.q(f.values()),h=f.next();!h.done;h=f.next())(h=b.i.get(h.value))&&--h.SB;b=g.Cb(l,function(u){return!!u.length});
a.i&&(l="aftflt."+tx(l),d(l));return b};
vx=function(a){switch(a){case "*":return"v8e";case "(":return"v9e";case "(h":return"v9he";default:return a}};
tx=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=c;b.push(vx(d));d=g.q(a[d]);for(var e=d.next();!e.done;e=d.next())b.push(e.value.kc())}return b.join(".")};
vga=function(a,b,c){var d={};g.Bb(b,function(e,f){e=e.filter(function(h){if(!h.Bd)return!1;if("("===h.i||"(h"===h.i){if(a.l&&c&&"widevine"===c.flavor){var l=h.mimeType+"; experimental=allowed";return!!h.Bd[c.flavor]&&!!c.i[l]}if(!wx(a,ly.CRYPTOBLOCKFORMAT)&&!a.Y||a.V)return!1}return c&&h.Bd[c.flavor]&&c.i[h.mimeType]?!0:!1});
e.length&&(d[f]=e)});
return d};
xga=function(a,b,c,d,e,f){function h(H){return!!l[H]}
f=void 0===f?!1:f;var l=ux(a,b,c,e);my(c)&&(l=vga(b,l,d),a.i&&(b="enflt."+tx(l),e(b)));if(rx(c))return e=g.bb(Object.values(l),function(H){return!!H.length&&!!H[0].audio}),a=g.bb(Object.values(l),function(H){return!!H.length&&!!H[0].video}),e&&a||Dp(),Ep(new qx(a,e));
b=ny(a);b=g.bb(b,h);if(!b)return a.i&&e("noaudio"),Dp();d=l[b];l["9"]&&l.h&&c.Oj&&!a.Da&&(a.i&&e("dltvp9"),delete l["9"]);var m=l["1h"]?"1h":"1",n=l["9h"]?"9h":"9",p=l[m],r=l[n];p&&p.length&&(a.l.highestAv1Resolution=p[p.length-1].bb().i);r&&r.length&&(a.l.highestVp9Resolution=r[r.length-1].bb().i);var t=[],u=[];if(a.ma&&!a.u)for(u=wga(c)?l["1h"]||l["9h"]?["1h","9h"]:["9","h"]:["1","9","h"],a.i&&e("newhybpref."+u.join(".")),c=g.q(u),f=c.next();!f.done;f=c.next())t=t.concat(l[f.value]).filter(function(H){return H});
else if(0<a.J&&r&&p){if(!f){var x=Math.min(a.J,oy(p)),y=oy(r),B=function(H){return H<=x||H>y};
a.i&&e("lth."+x+".uth."+y);p=p.filter(function(H){return B(H.bb().i)});
r=r.filter(function(H){return!B(H.bb().i)})}u=[m,
n];t=p.concat(r).filter(function(H){return H})}if(t.length&&!a.u){py(t,d,u);
if(a.i){a=[];m=g.q(t);for(n=m.next();!n.done;n=m.next())a.push(n.value.kc());e("hbdfmt."+a.join("."))}return Ep(new qx(t,d,qy(l,"",b)))}t=ry(a);t=g.bb(t,h);if(!t){if(l[m]&&a.Za)return e=l[m],py(e,d),Ep(new qx(e,d,qy(l,m,b)));a.i&&e("novideo");return Dp()}a.zb&&("1"===t||"1h"===t)&&l[n]&&(m=oy(l[t]),oy(l[n])>m&&(t=n));"9"===t&&l.h&&(m=oy(l["9"]),oy(l.h)>1.5*m&&(t="h"));a.i&&e("vfmly."+vx(t));m=l[t];if(!m.length)return a.i&&e("novfmly."+vx(t)),Dp();py(m,d);return Ep(new qx(m,d,qy(l,t,b)))};
qy=function(a,b,c){var d=a.h;"f"===b&&(d=a[b]);var e=a.a;b=a[b]!==d;a=a[c]!==e;return d&&e&&(b||a)?(py(d,e),new qx(d,e)):null};
py=function(a,b,c){c=void 0===c?[]:c;g.wb(a,function(d,e){var f=e.bb().height*e.bb().width-d.bb().height*d.bb().width;if(!f&&c&&0<c.length){f=c.indexOf(d.i)+1;var h=c.indexOf(e.i)+1;f=0===f||0===h?h||-1:f-h}f||(f=e.Hb-d.Hb);return f});
g.wb(b,function(d,e){return e.Hb-d.Hb})};
uga=function(a,b,c){var d=kh(b,function(m,n){return 32<n.bb().fps?Math.min(m,n.bb().width):m},Infinity);
if(Infinity>d){var e=!0;if(c){for(var f=c=0,h=g.q(b),l=h.next();!l.done;l=h.next())l=l.value.bb(),32<l.fps&&l.i>f?f=l.i:!(32<l.fps)&&l.i>c&&(c=l.i);1080<c&&c>f&&(e=!1)}b=a.J&&(a.X||wx(a,ly.FRAMERATE))&&e?g.Ke(b,function(m){return 32<m.bb().fps||m.bb().width<d}):g.Ke(b,function(m){return!(32<m.bb().fps)})}Bq()&&(b=g.Ke(b,function(m){return"299"!==m.kc()}));
return b};
tga=function(a,b){return b=g.Ke(b,function(c){return c.bb().i<=a.Ya})};
oy=function(a){return kh(a,function(b,c){return Math.max(b,c.bb().i)},0)};
sy=function(a){a=void 0===a?{}:a;var b=void 0===a.Hj?!1:a.Hj,c=void 0===a.defraggedFromSubfragments?!1:a.defraggedFromSubfragments,d=void 0===a.isManifestless?!1:a.isManifestless,e=void 0===a.lC?!1:a.lC;return((void 0===a.hasSubfragmentedFmp4?0:a.hasSubfragmentedFmp4)||b)&&d?e&&fx()?3:2:c&&d?-1:1};
ty=function(a){return sy({hasSubfragmentedFmp4:a.B.yf,Hj:a.B.yf,defraggedFromSubfragments:a.Gk,isManifestless:!0,lC:a.Ea})};
vy=function(a){a=a.split("");uy.wd(a,41);uy.NY(a,3);uy.kI(a,41);uy.NY(a,2);uy.kI(a,5);uy.wd(a,62);uy.NY(a,3);uy.wd(a,69);uy.NY(a,2);return a.join("")};
wy=function(a,b){this.l=a;this.C=void 0===b?!1:b;this.B=this.path=this.u="";this.i={};this.url=""};
yy=function(a){a.url||(a.url=yga(a));return a.url};
Ay=function(a){zy(a);return a.B};
By=function(a){return a.l?nc(a.l,"local"):"local"===a.u};
Cy=function(a){zy(a);return g.Eb(a.i,function(b){return null!==b})};
Dy=function(a){zy(a);if("/videoplayback"!==a.path){var b=a.clone();b.set("playerfallback","1");return b}var c=yy(a);b=new g.Qm(c);var d=a.get("fvip");a=decodeURIComponent(a.get("mn")||"").split(",");if(d&&a&&1<a.length&&a[1])return c=b.i.replace(/^[^.]*/,""),g.Sm(b,"r"+d+"---"+a[1]+c),b=new wy(b.toString()),b.set("fallback_count","1"),b;d=b.i.match("\\.a1\\.googlevideo\\.com$");b.i.match("\\.googlevideo\\.com$")?(g.Sm(b,"redirector.googlevideo.com"),c=b.toString()):b.i.match("r[1-9].*\\.c\\.youtube\\.com$")?
(g.Sm(b,"www.youtube.com"),c=b.toString()):c=Uv(c);b=new wy(c);b.set("cmo=pf","1");d&&b.set("cmo=td","a1.googlevideo.com");return b};
zy=function(a){if(a.l){if(!Qv(a.l)&&!a.l.startsWith("local"))throw Error("Untrusted URL: "+a.l);var b=g.Ym(a.l);a.u=b.B;a.B=b.i+(null!=b.u?":"+b.u:"");var c=b.getPath();if(c.startsWith("/videoplayback"))a.path="/videoplayback",c=c.substr(14);else if(c.startsWith("/initplayback"))a.path="/initplayback",c=c.substr(13);else if(c.startsWith("/api/manifest")){var d=c.indexOf("/",12),e=c.indexOf("/",d+1);0<d&&0<e?(a.path=c.substr(0,e),c=c.substr(e+1)):(a.path=c,c="")}else a.path=c,c="";d=a.i;a.i=Ey(c);
g.Qa(a.i,Fy(b.l.toString()));g.Qa(a.i,d);"index.m3u8"===a.i.file&&(delete a.i.file,a.path+="/file/index.m3u8");a.l="";a.url="";a.C&&(b=a.get("n"))&&(b=sea(b),a.set("n",b))}};
yga=function(a){zy(a);var b=a.u+(a.u?"://":"//")+a.B+a.path;if(Cy(a)){var c=[];g.Bb(a.i,function(d,e){null!==d&&c.push(e+"="+d)});
b+="?"+c.join("&")}return b};
Ey=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&Gy(c,a[b],a[b+1]);return c};
Fy=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?Gy(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
Gy=function(a,b,c){if("cmo"===b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
Hy=function(a,b,c,d,e,f,h,l,m,n){this.Ia=a;this.startTime=b;this.duration=c;this.ingestionTime=d;this.sourceURL=e;this.i=void 0===m?null:m;this.yd=n;this.endTime=b+c;this.l=h||0;this.range=f||null;this.pending=l||!1;this.yd=n||null};
g.Iy=function(){this.segments=[]};
Jy=function(a,b){if(b>a.uc())a.segments=[];else{var c=ab(a.segments,function(d){return d.Ia>=b},a);
0<c&&a.segments.splice(0,c)}};
Ky=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
Ly=function(a){return String.fromCharCode.apply(null,a)};
My=function(a){return window.TextDecoder?(new TextDecoder).decode(a):Ly(a)};
Ny=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.i=(this.l=e)?0:8;this.dataOffset=this.offset+this.i};
Oy=function(a){var b=a.data.getUint8(a.offset+a.i);a.i+=1;return b};
Py=function(a){var b=a.data.getUint16(a.offset+a.i);a.i+=2;return b};
Qy=function(a){var b=a.data.getInt32(a.offset+a.i);a.i+=4;return b};
Ry=function(a){var b=a.data.getUint32(a.offset+a.i);a.i+=4;return b};
Sy=function(a){var b=a.data;var c=a.offset+a.i;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.i+=8;return b};
Ty=function(a,b){b=void 0===b?NaN:b;if(isNaN(b))var c=a.size;else for(c=a.i;c<a.size&&a.data.getUint8(a.offset+c)!==b;)++c;b=new Uint8Array(a.data.buffer,a.offset+a.i+a.data.byteOffset,c-a.i);a.i=Math.min(c+1,a.size);return My(b)};
zga=function(a){this.offset=0;this.data=new DataView(new ArrayBuffer(a))};
Uy=function(a,b,c,d){(new Uint8Array(a.data.buffer,a.offset,d)).set(new Uint8Array(b.buffer,c+b.byteOffset,d));a.offset+=d};
Wy=function(a,b){this.data=a;this.uri=b||"http://youtube.com/streaming/metadata/segment/102015";this.i=Vy(this,"Sequence-Number");this.G=Vy(this,"Segment-Count");this.J=this.data["Segment-Durations-Ms"]||"";this.ingestionTime=Vy(this,"Ingestion-Walltime-Us")/1E6;this.l=(Vy(this,"First-Frame-Time-Us")+Vy(this,"First-Frame-Uncertainty-Us"))/1E6;this.Wh=Vy(this,"Target-Duration-Us")/1E6;this.B="T"===this.data["Stream-Finished"];this.C="T"===this.data.Streamable;this.cryptoPeriodIndex=Vy(this,"Crypto-Period-Index");
this.u=Vy(this,"Crypto-Period-Seconds")};
Yy=function(a){var b;a.data["Cuepoint-Type"]?b=new Jv(Xy?Number(a.data["Cuepoint-Playhead-Time-Sec"])||0:-(Number(a.data["Cuepoint-Playhead-Time-Sec"])||0),Number(a.data["Cuepoint-Total-Duration-Sec"])||0,a.data["Cuepoint-Context"],a.data["Cuepoint-Identifier"]||"",Aga[a.data["Cuepoint-Event"]||""]||"unknown",1E3*(Number(a.data["Cuepoint-Playhead-Time-Sec"])||0)):b=null;return b};
Zy=function(a){return Number(a.data["Start-Media-Time-Us"])/1E6||0};
Vy=function(a,b){return Number(a.data[b])||0};
Bga=function(a,b){this.i=a;this.duration=b};
$y=function(a,b,c,d,e){this.l=e;this.i=a||0;this.pitch=b||0;this.yaw=c||0;this.roll=d||0;e.getUint32(4)};
az=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0===a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
cz=function(a,b){var c=g.bz(a,0,1952868452);a=g.bz(a,0,1953658222);if(c&&a){c.skip(1);var d=Oy(c)<<16|Py(c);c.skip(4);d&1&&c.skip(8);d&2&&c.skip(4);if(d&8){d=c.i;var e=Ry(c);c.data.setUint32(c.offset+d,1<b?Math.ceil(e*b):Math.floor(e*b))}a.skip(1);c=Oy(a)<<16|Py(a);if(c&256){d=c&1;e=c&4;var f=c&512,h=c&1024,l=c&2048;c=Ry(a);d&&a.skip(4);e&&a.skip(4);d=(f?4:0)+(h?4:0)+(l?4:0);for(e=0;e<c;e++)f=a.i,h=Ry(a),a.data.setUint32(a.offset+f,1<b?Math.ceil(h*b):Math.floor(h*b)),a.skip(d)}}};
ez=function(a){a=new DataView(a.buffer,a.byteOffset,a.byteLength);return(a=g.bz(a,0,1836476516))?dz(a):NaN};
Cga=function(a){var b=g.bz(a,0,1937011556);if(!b)return null;b=fz(a,b.dataOffset+8,1635148593);if(!b)return null;var c=fz(a,b.dataOffset+78,1936995172),d=fz(a,b.dataOffset+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),Oy(c)){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}var e=c=null,f=null;if(d=fz(a,d.dataOffset,1886547818)){var h=fz(a,d.dataOffset,1886546020),l=fz(a,d.dataOffset,2037673328);if(!l&&(l=fz(a,d.dataOffset,1836279920),!l))return null;h&&(h.skip(4),c=
Qy(h)/65536,f=Qy(h)/65536,e=Qy(h)/65536);a=new DataView(l.data.buffer,l.dataOffset,l.size-8);return new $y(b,c,f,e,a)}return null};
fz=function(a,b,c){for(;gz(a,b);){var d=hz(a,b);if(d.type===c)return d;b+=d.size}return null};
g.bz=function(a,b,c){for(;gz(a,b);){var d=hz(a,b);if(d.type===c)return d;b=iz(d.type)?b+8:b+d.size}return null};
jz=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.dataOffset+4)};
hz=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new Ny(a,b,c,d)};
dz=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
kz=function(a){a=new Ny(a.data,a.offset,a.size,a.type,a.l);var b=Oy(a);a.skip(7);var c=Ry(a);if(0===b){b=Ry(a);var d=Ry(a)}else b=Sy(a),d=Sy(a);a.skip(2);for(var e=Py(a),f=[],h=[],l=0;l<e;l++){var m=Ry(a);f.push(m);h.push(Ry(a));a.skip(4)}return{sC:c,bN:b,lN:d,eS:f,mC:h}};
gz=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593===c||1635148611===c||1937126244===c||1936995172===c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
iz=function(a){return 1701082227===a||1836019558===a||1836019574===a||1835297121===a||1835626086===a||1937007212===a||1953653094===a||1953653099===a||1836475768===a};
lz=function(a){a.skip(4);return{pS:Ty(a,0),value:Ty(a,0),sC:Ry(a),T5:Ry(a),C5:Ry(a),id:Ry(a),YG:Ty(a),offset:a.offset}};
mz=function(a,b){for(var c=fz(a,0,b);c;)c.markAsSkip(),c=fz(a,c.offset+c.size,b)};
nz=function(a,b){for(var c=0,d=[];gz(a,c);){var e=hz(a,c);e.type===b&&d.push(e);c=iz(e.type)?c+8:c+e.size}return d};
Dga=function(a,b){var c=g.bz(a,0,1937011556),d=g.bz(a,0,1953654136);if(!c||!d||2<=a.getUint32(c.offset+12))return null;var e=new DataView(b.buffer,b.byteOffset,b.length),f=g.bz(e,0,1937011556);if(!f)return null;b=e.getUint32(f.dataOffset+8);d=e.getUint32(f.dataOffset+12);if(1701733217!==d&&1701733238!==d)return null;d=new zga(a.byteLength+b);Uy(d,a,0,c.offset+12);d.data.setInt32(d.offset,2);d.offset+=4;Uy(d,a,c.offset+16,c.size-16);Uy(d,e,e.byteOffset+f.dataOffset+8,b);Uy(d,a,c.offset+c.size,a.byteLength-
(c.offset+c.size));c=g.q([1836019574,1953653099,1835297121,1835626086,1937007212,1937011556]);for(e=c.next();!e.done;e=c.next())e=g.bz(a,0,e.value),d.data.setUint32(e.offset,e.size+b);if(oz)return d.data;a=g.bz(d.data,0,1953654136);d.data.setUint32(a.offset+16,2);return d.data};
pz=function(a,b){this.l=a;this.i=0;this.start=b||0};
qz=function(a){return a.i>=a.l.byteLength};
wz=function(a,b,c){var d=new pz(c);if(!rz(d,a))return!1;d=sz(d);if(!tz(d,b))return!1;for(a=0;b;)b>>>=8,a++;b=d.start+d.i;var e=uz(d,!0);d=a+(d.start+d.i-b)+e;d=9<d?vz(d-9,8):vz(d-2,1);a=b-a;c.setUint8(a++,236);for(b=0;b<d.length;b++)c.setUint8(a++,d[b]);return!0};
Ega=function(a){var b=new pz(a);xz(b);if(rz(b,[408125543,374648427,174,224]))b=sz(b);else return null;for(var c=a=null;!qz(b);){var d=uz(b,!1);if(21432===d)switch(yz(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320===d?c=sz(b):zz(b)}if(!c)return null;for(var e,f=d=b=null;!qz(c);)switch(uz(c,!1)){case 30321:if(3!==yz(c))return null;break;case 30324:b=Az(c);break;case 30323:f=Az(c);break;case 30325:d=Az(c);break;case 30322:e=uz(c,!0);e=Bz(c,e);e=new DataView(e.buffer,
e.byteOffset,e.byteLength);break;default:zz(c)}return e?new $y(a,b,f,d,e):null};
sz=function(a){var b=uz(a,!0),c=a.l.byteOffset+a.i;c=new DataView(a.l.buffer,c,Math.min(b,a.l.buffer.byteLength-c));c=new pz(c,a.start+a.i);a.i+=b;return c};
yz=function(a){for(var b=uz(a,!0),c=Cz(a),d=1;d<b;d++)c=256*c+Cz(a);return c};
Az=function(a){var b=uz(a,!0),c=0;4===b?c=a.l.getFloat32(a.i):8===b&&(c=a.l.getFloat64(a.i));a.i+=b;return c};
Dz=function(a){var b=uz(a,!0);return My(Bz(a,b))};
Cz=function(a){return a.l.getUint8(a.i++)};
uz=function(a,b){var c=Cz(a);if(1===c){for(b=c=0;7>b;b++)c=256*c+Cz(a);return c}for(var d=128,e=0;6>e&&d>c;e++)c=256*c+Cz(a),d*=128;return b?c-d:c};
zz=function(a){var b=uz(a,!0);a.i+=b};
xz=function(a){var b=a.i;a.i=0;var c=!1;try{tz(a,440786851)&&(a.i=0,tz(a,408125543)&&(c=!0))}catch(d){if(d instanceof RangeError)a.i=0,c=!1,g.Tu(d);else throw d;}a.i=b;return c};
Fga=function(a){if(!tz(a,440786851,!0))return null;var b=a.i;uz(a,!1);var c=uz(a,!0)+a.i-b;a.i=b+c;if(!tz(a,408125543,!1))return null;uz(a,!0);if(!tz(a,357149030,!0))return null;var d=a.i;uz(a,!1);var e=uz(a,!0)+a.i-d;a.i=d+e;if(!tz(a,374648427,!0))return null;var f=a.i;uz(a,!1);var h=uz(a,!0)+a.i-f,l=new Uint8Array(c+12+e+h),m=new DataView(l.buffer);l.set(new Uint8Array(a.l.buffer,a.l.byteOffset+b,c));m.setUint32(c,408125543);m.setUint32(c+4,33554431);m.setUint32(c+8,4294967295);l.set(new Uint8Array(a.l.buffer,
a.l.byteOffset+d,e),c+12);l.set(new Uint8Array(a.l.buffer,a.l.byteOffset+f,h),c+12+e);return l};
Ez=function(a){var b=a.i;a.i=0;var c=1E6;rz(a,[408125543,357149030,2807729])&&(c=yz(a));a.i=b;return c};
Gga=function(a,b){var c=a.i;a.i=0;if(160!==a.l.getUint8(a.i)&&!Fz(a)||!tz(a,160))return a.i=c,NaN;uz(a,!0);var d=a.i;if(!tz(a,161))return a.i=c,NaN;uz(a,!0);Cz(a);var e=Cz(a)<<8|Cz(a);a.i=d;if(!tz(a,155))return a.i=c,NaN;d=yz(a);a.i=c;return(e+d)*b/1E9};
Fz=function(a){if(!Gz(a)||!tz(a,524531317))return!1;uz(a,!0);return!0};
Gz=function(a){if(xz(a)){if(!tz(a,408125543))return!1;uz(a,!0)}return!0};
rz=function(a,b){for(var c=0;c<b.length;c++){if(!tz(a,b[c]))return!1;c!==b.length-1&&uz(a,!0)}return!0};
tz=function(a,b,c){c=void 0===c?!1:c;if(qz(a))return!1;for(var d=a.i;uz(a,!1)!==b;)if(zz(a),d=a.i,qz(a))return!1;c&&(a.i=d);return!0};
vz=function(a,b){b||(b=Math.ceil(Math.log(a+2)/Math.log(2)/7));for(var c=1<<8-b,d=[];d.length<b-1;)d.unshift(a%256),a=Math.floor(a/256);d.unshift(a|c);return d};
Bz=function(a,b){var c=new Uint8Array(a.l.buffer,a.l.byteOffset+a.i,b);a.i+=b;return c};
Hz=function(a){this.Vg=a;this.i={};this.url=""};
Iz=function(a,b){var c=b.indexOf("?");if(0<c){var d=Fy(b.substr(c+1));g.Bb(d,function(e,f){this.set(f,e)},a);
b=b.substr(0,c)}b=Ey(b);g.Bb(b,function(e,f){this.set(f,e)},a)};
g.Jz=function(a){a.url||(a.url=Hga(a));return a.url};
Hga=function(a){var b=yy(a.Vg),c=[];g.Bb(a.i,function(e,f){c.push(f+"="+e)});
if(!c.length)return b;var d=c.join("&");a=Cy(a.Vg)?"&":"?";return b+a+d};
Kz=function(a,b){var c=new wy(b);(b=c.get("req_id"))&&a.set("req_id",b);g.Bb(a.i,function(d,e){c.set(e,null)});
return c};
Iga=function(){this.u=this.i=this.l=this.started=this.B=0};
Jga=function(a){a.B=(0,g.N)();a.started+=1};
Lz=function(a,b,c){var d=a.started+4*a.i;c&&(d+=a.u);return Math.pow(b.Kf,d)};
Mz=function(a,b){a[b]||(a[b]=new Iga);return a[b]};
Kga=function(a){this.u=null;this.C=this.l=0;this.i=a;this.B=a.clone()};
Oz=function(a,b){var c=Mz(b,Ay(a.i));if(1<=c.l||1<=c.i)if(a=Nz(a),b=Mz(b,Ay(a)),b.l+b.i<=c.l+c.i)return!0;return!1};
Lga=function(a,b){a=b?Nz(a):a.i;return new Hz(a)};
Nz=function(a){a.u||(a.u=Dy(a.B));return a.u};
Pz=function(a,b,c){var d=0;c&&b.dg?d=1E3*Math.pow(b.dg,a.l):a.l>b.Kd&&(d=1E3*Math.pow(b.Kf,a.l-b.Kd));return!d||a.C+d<(0,g.N)()};
g.Qz=function(a,b,c){b.Vg===a.i&&(a.i=Kz(b,c));b.Vg===a.u&&(a.u=Kz(b,c))};
Rz=function(a,b,c,d){this.initRange=c;this.indexRange=d;this.i=null;this.B=!1;this.C=null;this.L=0;this.u=null;this.V=NaN;this.G=null;this.info=b;this.l=new Kga(a)};
Sz=function(a){var b=g.q(a.info.id.split(";")),c=b.next().value;b=b.next().value;return c+";"+a.info.lastModified+";"+(void 0===b?"":b)};
Tz=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
Uz=function(a){a=a.split("-");var b=Number(a[0]),c=Number(a[1]);if(!isNaN(b)&&!isNaN(c)&&2===a.length&&(a=new Tz(b,c),!isNaN(a.start)&&!isNaN(a.end)&&!isNaN(a.length)&&0<a.length))return a};
Vz=function(a,b){return new Tz(a,a+b-1)};
Wz=function(a){return null==a.end?{start:String(a.start)}:{start:String(a.start),end:String(a.end)}};
Zz=function(a,b,c,d,e,f,h,l,m,n,p){this.type=a;this.i=b;this.range=c;this.L=[];this.G="";this.Ia=-1;this.G=void 0===d?"":d;this.Ia=0<=e?e:-1;this.startTime=f||0;this.duration=h||0;this.xb=l||0;this.l=0<=m?m:this.range?this.range.length:NaN;this.u=!!n;a=this.range?this.xb+this.l===this.range.length:void 0===p?!!this.l:p;this.Fd=a;this.range?(this.C=this.startTime+this.duration*this.xb/this.range.length,this.J=this.duration*this.l/this.range.length,this.B=this.C+this.J):Xz(this);3!==this.type||0<=this.Ia||
!this.i.Sf()||g.Tu(new g.Cs("b168859904",Yz(this)))};
Xz=function(a){a.C=a.startTime;a.J=a.duration;a.B=a.C+a.J};
Mga=function(a,b,c){var d=!(!b||b.i!==a.i||b.type!==a.type||b.Ia!==a.Ia);return c?d&&!!b&&(a.range&&b.range?b.range.end===a.range.end:b.range===a.range)&&b.xb+b.l===a.xb+a.l:d};
$z=function(a){return 1===a.type||2===a.type};
aA=function(a){return 3===a.type||6===a.type};
bA=function(a,b){return a.i===b.i?a.range&&b.range?a.range.start+a.xb+a.l===b.range.start+b.xb:a.Ia===b.Ia?a.xb+a.l===b.xb:a.Ia+1===b.Ia&&0===b.xb&&a.Fd:!1};
cA=function(a,b){return bA(a,b)||ge(a.B,b.C)||a.Ia+1===b.Ia&&0===b.xb&&a.Fd?!0:!1};
Nga=function(a){1===a.length||g.jh(a,function(c){return!!c.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new Tz(a[0].range.start+a[0].xb,b.range.start+b.xb+b.l-1)};
Yz=function(a){a=dA(a);var b="";g.Bb(a,function(c,d){b+=d+"_"+c+"_"});
return b.slice(0,-1)};
dA=function(a){var b={};b.itag=a.i.info.kc();b.type=""+a.type;b.seg=String(a.Ia);a.range&&(b.range=""+(a.range.start+a.xb)+"-"+(a.range.start+a.xb+a.l-1));b.time=""+a.C.toFixed(1)+"-"+(a.C+a.J).toFixed(1);b.off=String(a.xb);b.len=String(a.l);a.Fd&&(b.end="1");a.u&&(b.eos="1");return b};
eA=function(a,b){return a.i!==b.i?!1:4===a.type&&3===b.type&&a.i.qe()?(a=a.i.Ht(a),ci(a,function(c){return eA(c,b)})):a.Ia===b.Ia&&!!b.l&&b.xb+b.l>a.xb&&b.xb+b.l<=a.xb+a.l};
fA=function(a,b){var c=b.i;a.G="updateWithEmsg";a.Ia=c;b.B&&(a.u=b.B)};
gA=function(a,b){var c=b.Ia;a.G="updateWithSegmentInfo";a.Ia=c;if(a.startTime!==b.startTime||a.duration!==b.duration)a.startTime=b.startTime,a.duration=b.duration,Xz(a)};
hA=function(a,b){this.i=a;this.G="";this.B=this.oe=NaN;this.C=this.requestId=null;this.l=a[0].i.l;this.u=b||"";this.range=this.i[0].range&&0<this.i[0].l?Nga(this.i):null};
iA=function(a){return 4===a.i[a.i.length-1].type};
g.jA=function(a,b){if(a.G){var c=new Hz(new wy(a.G));a.u&&Iz(c,a.u)}else/http[s]?:\/\//.test(a.u)?c=new Hz(new wy(a.u)):(b=null===a.C?Oz(a.l,b):a.C,c=Lga(a.l,b),a.u&&Iz(c,a.u));(b=a.range)&&c.set("range",b.toString());a.requestId&&c.set("req_id",a.requestId);isNaN(a.oe)||c.set("headm",a.oe.toString());isNaN(a.B)||c.set("mffa",a.B+"ms");a.urlParams&&g.Bb(a.urlParams,function(d,e){c.set(e,d)});
return c};
kA=function(a){if(a.range)return a.range.length;a=a.i[0];return Math.round(a.J*a.i.info.Hb)};
lA=function(a,b){var c=a.i[0];if(a.range)var d=Vz(a.range.start,Math.min(4096,a.range.length));else{if(a.u&&0<=a.u.indexOf("/range/")||"1"===a.l.B.get("defrag")||"1"===a.l.B.get("otf"))return null;d=Vz(0,4096)}d=new Zz(5,c.i,d,"createProbeRequestInfo"+c.G,c.Ia);a=new hA([d],a.u);a.C=b;return a};
mA=function(a,b,c,d,e,f){f=void 0===f?0:f;Rz.call(this,a,b,d,void 0);this.X=c;this.Wh=f;this.J=!0;this.index=e||new g.Iy;this.gr()&&(this.B=!0)};
Oga=function(a,b,c,d,e){this.Ia=a;this.startSecs=b;this.durationSecs=c;this.i=d||NaN;this.l=e||NaN};
nA=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName===c)){var d=a.getAttribute(b);if(d)return d}return""};
oA=function(a,b){for(;a;a=a.parentNode){var c=a.getElementsByTagName(b);if(0<c.length)return c[0]}return null};
pA=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(Number(b[2])|0)+60*(Number(b[4])|0)+(Number(b[6])|0):Number(a)|0};
qA=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
rA=function(){this.i=[];this.l=null;this.G=0;this.u=[];this.C=!1;this.J="";this.B=-1};
Pga=function(a){var b=a.u;a.u=[];return b};
Qga=function(){this.B=[];this.i=null;this.l={};this.u={}};
Uga=function(a,b,c){var d=[];b=Array.from(b.getElementsByTagName("SegmentTimeline"));b=g.q(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,h=null;"Period"===f.nodeName?h=Rga(a):"AdaptationSet"===f.nodeName?(f=f.getAttribute("id")||f.getAttribute("mimetype")||"",h=Sga(a,f)):"Representation"===f.nodeName&&(f=f.getAttribute("id")||"",h=Tga(a,f));if(null==h)return;h.update(e,c);pb(d,Pga(h))}pb(a.B,d);Maa(a.B,function(l){return 1E3*l.startSecs+l.i})};
Vga=function(a){a.i&&(a.i.i=[]);g.Bb(a.l,function(b){b.i=[]});
g.Bb(a.u,function(b){b.i=[]})};
Rga=function(a){a.i||(a.i=new rA);return a.i};
Sga=function(a,b){a.l[b]||(a.l[b]=new rA);return a.l[b]};
Tga=function(a,b){a.u[b]||(a.u[b]=new rA);return a.u[b]};
sA=function(a){var b=void 0===a?{}:a;a=void 0===b.Wh?0:b.Wh;var c=void 0===b.xj?!1:b.xj,d=void 0===b.Ik?0:b.Ik,e=void 0===b.Nd?0:b.Nd,f=void 0===b.ag?Infinity:b.ag,h=void 0===b.Vs?0:b.Vs;b=void 0===b.Ee?!1:b.Ee;this.segments=[];this.i=this.ir=-1;this.l=null;this.og=a;this.Ik=d;this.xj=c;this.Nd=e;this.ag=f;this.Vs=h;this.Ee=b};
uA=function(a,b,c){b=tA(a,b);return 0<=b&&(c||!a.segments[b].pending)};
tA=function(a,b){return vb(a.segments,function(c){return b-c.Ia})};
vA=function(a,b,c){c=void 0===c?{}:c;mA.call(this,a,b,"",void 0,void 0,c.Wh||0);this.index=new sA(c)};
wA=function(a,b,c){Rz.call(this,a,b);this.J=c;this.index=new g.Iy};
xA=function(a,b,c){var d=a.index.pA(b),e=a.index.jf(b),f=a.index.getDuration(b);c?f=c=0:c=a.info.Hb*f;var h=b===a.index.uc()&&0<c;a=new Zz(3,a,void 0,"otfCreateRequestInfoForSegment",b,e,f,0,c,h);return new hA([a],d)};
Wga=function(a,b){if(!a.index.ld()){var c=[],d=b.G;b=b.J.split(",").filter(function(p){return 0<p.length});
for(var e=0,f=0,h=0,l=/^(\d+)/,m=/r=(\d+)/,n=0;n<d;n++){if(0>=h)if(h=b.shift(),f=(f=l.exec(h))?+f[1]/1E3:0)h=(h=m.exec(h))?+h[1]:0,h+=1;else return;c.push(new Hy(n,e,f,NaN,"sq/"+(n+1)));e+=f;h--}a.index.append(c)}};
yA=function(a){var b=this;a=void 0===a?[]:a;this.i=[];this.u=this.l=0;this.B=void 0;this.totalLength=0;a.forEach(function(c){b.append(c)})};
zA=function(a,b){return 0===a.i.length?!1:(a=a.i[a.i.length-1])&&a.buffer===b.buffer&&a.byteOffset+a.length===b.byteOffset};
AA=function(a,b){b=g.q(b.i);for(var c=b.next();!c.done;c=b.next())a.append(c.value)};
BA=function(a){a.B=void 0;a.l=0;a.u=0};
CA=function(a,b,c){a.isFocused(b);return b-a.u+c<=a.i[a.l].length};
DA=function(a){if(!a.B){var b=a.i[a.l];a.B=new DataView(b.buffer,b.byteOffset,b.length)}return a.B};
EA=function(a,b,c){b=void 0===b?0:b;c=void 0===c?-1:c;if(!a.totalLength)return new DataView(new ArrayBuffer(0));0>c&&(c=a.totalLength-b);a.focus(b);if(!CA(a,b,c)){var d=a.l,e=a.u;a.focus(b+c-1);e=new Uint8Array(a.u+a.i[a.l].length-e);for(var f=0,h=d;h<=a.l;h++)e.set(a.i[h],f),f+=a.i[h].length;a.i.splice(d,a.l-d+1,e);BA(a);a.focus(b)}d=a.i[a.l];return new DataView(d.buffer,d.byteOffset+b-a.u,c)};
FA=function(a,b,c){a=EA(a,void 0===b?0:b,void 0===c?-1:c);return new Uint8Array(a.buffer,a.byteOffset,a.byteLength)};
GA=function(a){a=FA(a,0,-1);var b=new Uint8Array(a.length);try{b.set(a)}catch(d){for(var c=0;c<a.length;c++)b[c]=a[c]}return b};
HA=function(a,b){a.focus(b);return a.i[a.l][b-a.u]};
IA=function(a,b){a.focus(b);return CA(a,b,4)?DA(a).getUint32(b-a.u):256*(256*(256*HA(a,b)+HA(a,b+1))+HA(a,b+2))+HA(a,b+3)};
JA=function(a,b,c){this.info=a;this.u=c;this.l=null;this.B=-1;this.timestampOffset=0;this.i=b instanceof yA?b:new yA([b])};
KA=function(a){return EA(a.i)};
LA=function(a,b){if(1!==a.info.i.info.containerType||a.info.xb||!a.info.Fd)return!0;a=KA(a);for(var c=0,d=0;c+4<a.byteLength;){d=a.getUint32(c);if(!d)return!1;c+=d}return c!==a.byteLength?(b&&(b.lastboxlen=d.toString(),4<=a.byteLength&&(b.lastbytes=a.getUint32(a.byteLength-4).toString()),b.boxlen=c.toString(),b.bytelen=a.byteLength.toString()),!1):!0};
MA=function(a,b){b=Math.min(b,a.info.l);var c=a.i.split(b),d=c.Rv;c=c.bp;var e=new Zz(a.info.type,a.info.i,a.info.range,a.info.G,a.info.Ia,a.info.startTime,a.info.duration,a.info.xb,b,!1,!1);d=new JA(e,d,a.u);a=new Zz(a.info.type,a.info.i,a.info.range,a.info.G,a.info.Ia,a.info.startTime,a.info.duration,a.info.xb+b,a.info.l-b,a.info.u,a.info.Fd);a=new JA(a,c,!1);return[d,a]};
NA=function(a,b,c){var d;if(!(d=!bA(a.info,b.info)||a.info.Fd)){if(c=void 0===c?!1:c)c=b.i,c=!(c.i.length?zA(a.i,c.i[0]):1);d=c}if(d)return null;c=new Zz(a.info.type,a.info.i,a.info.range,a.info.G,a.info.Ia,a.info.startTime,a.info.duration,a.info.xb,a.info.l,a.info.u,a.info.Fd);d=b.info;c.l+=d.l;c.range&&(c.J+=d.J);c.B=d.B;c.Fd=d.Fd;c.u=c.u||d.u;d=new yA;AA(d,a.i);AA(d,b.i);c=new JA(c,d,a.u);c.l=b.l||a.l;if(a=c.info.range)a=c.i,a=!(1===a.i.length&&0<a.i[0].byteOffset);a&&(c.u=!1);return c};
PA=function(a){g.OA(a.info.i.info)||a.info.i.info.re();if(-1!==a.B)return a.B;if(a.l&&Zy(a.l))return a.B=Zy(a.l),a.B;if(g.OA(a.info.i.info)){var b=KA(a);for(var c=a.info.i.i,d=NaN,e=NaN,f=0;gz(b,f);){var h=hz(b,f);1936286840===h.type?e=h.data.getUint32(h.dataOffset+8):1836476516===h.type?e=dz(h):1952867444===h.type&&isNaN(d)&&(d=jz(h));f=iz(h.type)?f+8:f+h.size}!e&&c&&(e=ez(c));b=d/e}else b=new pz(KA(a)),c=a.u?b:new pz(new DataView(a.info.i.i.buffer)),d=Ez(c),c=b.i,b.i=0,Fz(b)?tz(b,231)?(d=yz(b)*
d/1E9,b.i=c,b=d):(b.i=c,b=NaN):(b.i=c,b=NaN);a.B=b||a.info.C;return a.B};
RA=function(a,b){0<a.timestampOffset&&(b-=a.timestampOffset);var c=PA(a)+b;QA(a,c);a.timestampOffset=b};
QA=function(a,b){g.OA(a.info.i.info)||a.info.i.info.re();a.B=b;if(g.OA(a.info.i.info)){var c=KA(a);a=a.info.i.i;for(var d=NaN,e=NaN,f=0;gz(c,f);){var h=hz(c,f);isNaN(d)&&(1936286840===h.type?d=h.data.getUint32(h.dataOffset+8):1836476516===h.type&&(d=dz(h)));if(1952867444===h.type){!d&&a&&(d=ez(a));var l=jz(h);isNaN(e)&&(e=Math.round(b*d)-l);l+=e;if(h.data.getUint8(h.dataOffset)){var m=h.data,n=h.dataOffset+4;m.setUint32(n,Math.floor(l/4294967296));m.setUint32(n+4,l&4294967295)}else h.data.setUint32(h.dataOffset+
4,l)}f=iz(h.type)?f+8:f+h.size}return!0}c=new pz(KA(a));a=a.u?c:new pz(new DataView(a.info.i.i.buffer));d=Ez(a);a=c.i;c.i=0;if(Fz(c)&&tz(c,231))if(e=uz(c,!0),b=Math.floor(1E9*b/d),Math.ceil(Math.log(b)/Math.log(2)/8)>e)b=!1;else{for(d=e-1;0<=d;d--)c.l.setUint8(c.i+d,b&255),b>>>=8;c.i=a;b=!0}else b=!1;return b};
SA=function(a){g.OA(a.info.i.info)||a.info.i.info.re();if(a.l&&6===a.info.type)return a.l.Wh;if(g.OA(a.info.i.info)){var b=KA(a);var c=0;b=nz(b,1936286840);b=g.q(b);for(var d=b.next();!d.done;d=b.next())d=kz(d.value),c+=d.mC[0]/d.sC;c=c||NaN;if(!(0<=c))a:{c=KA(a);b=a.info.i.i;for(var e=d=0,f=0;gz(c,d);){var h=hz(c,d);if(1836476516===h.type)e=dz(h);else if(1836019558===h.type){!e&&b&&(e=ez(b));if(!e){c=NaN;break a}var l=fz(h.data,h.dataOffset,1953653094),m=e,n=fz(l.data,l.dataOffset,1952868452);l=
fz(l.data,l.dataOffset,1953658222);var p=Qy(n);Qy(n);p&2&&Qy(n);n=p&8?Qy(n):0;var r=Qy(l),t=r&1;p=r&4;var u=r&256,x=r&512,y=r&1024;r&=2048;var B=Ry(l);t&&Qy(l);p&&Qy(l);for(var H=t=0;H<B;H++){var E=u?Qy(l):n;x&&Qy(l);p&&0===H||!y||Qy(l);r&&Qy(l);t+=E}f+=t/m}d=iz(h.type)?d+8:d+h.size}c=f||NaN}}else c=new pz(KA(a)),b=a.u?c:new pz(new DataView(a.info.i.i.buffer)),c=Gga(c,Ez(b));return c||a.info.J};
TA=function(a){var b=KA(a);var c=(c=g.bz(b,0,1936286840))?c.data.getUint32(c.dataOffset+8):NaN;isNaN(c)&&(a=a.info.i.i,c=(b=g.bz(b,0,1836476516))?dz(b):a?ez(a):NaN);return c};
UA=function(a){if(!a.l){g.OA(a.info.i.info)||a.info.i.info.re();if(g.OA(a.info.i.info)){var b=KA(a),c=fz(b,0,1701671783);if(c){var d=lz(c);var e=d.pS;d=az(d.YG);if(b=fz(b,c.offset+c.size,1701671783))if(b=lz(b),b=az(b.YG),d&&b){c=g.q(Object.keys(b));for(var f=c.next();!f.done;f=c.next())f=f.value,d[f]=b[f]}e=d?new Wy(d,e):null}else e=null}else{e=new pz(KA(a));d=e.i;e.i=0;c=b=null;if(rz(e,[408125543,307544935,29555,26568]))for(f=sz(e);!qz(f);){var h=uz(f,!1);17543===h?c=az(Dz(f)):17827===h?b=Dz(f):
zz(f)}e.i=d;e=c?new Wy(c,b):null}a.l=e}};
g.VA=function(){this.count=0;this.u=1;this.l=!1;this.offsets=new Float64Array(128);this.i=new Float64Array(128)};
WA=function(a){a.offsets.length<a.count+1&&a.resize(2*a.offsets.length)};
XA=function(a,b,c,d){Rz.call(this,a,b,c,d);this.J=null;this.index=new g.VA};
YA=function(a,b,c,d){for(var e=[];b<=a.index.uc();b++){var f=a.index,h=b;f=Vz(f.Nk(h),h+1<f.count||f.l?f.offsets[h+1]-f.offsets[h]:-1);h=a.index.jf(b);var l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m),p=b===a.index.uc()&&m+n===f.length;e.push(new Zz(3,a,f,"getRequestInfoForRange",b,h,l,m,n,p));if(f.start+m+n>=c+d)break}return new hA(e)};
ZA=function(a,b,c,d){this.sampleRate=a||0;this.i=b||0;this.spatialAudioType=c||0;this.itag=d||""};
Xga=function(a,b,c,d){this.displayName=a;this.vssId=b;this.languageCode=c;this.kind=void 0===d?"":d};
aB=function(a,b,c,d,e,f,h,l,m){this.width=a;this.height=b;this.quality=f||$A(a,b);this.i=g.kx[this.quality];this.fps=c||0;this.stereoLayout=!e||null!=d&&0!==d&&1!==d?0:e;this.projectionType=d?2===d&&2===e?3:d:0;(a=h)||(a=g.kx[this.quality],0===a?a="Auto":(b=this.fps,c=this.projectionType,a=a.toString()+(2===c||3===c||4===c?"s":"p")+(55<b?"60":49<b?"50":39<b?"48":"")));this.qualityLabel=a;this.l=l||"";this.primaries=m||""};
$A=function(a,b){var c=Math.max(a,b);a=Math.min(a,b);b=bB[0];for(var d=0;d<bB.length;d++){var e=bB[d],f=g.kx[e];if(c>=1.3*Math.floor(16*f/9)||a>=1.3*f)return b;b=e}return"tiny"};
eB=function(a,b,c){c=void 0===c?{}:c;this.id=a;this.mimeType=b;this.u=!0;this.isSupported=this.l=null;0<c.Hb||(c.Hb=16E3);Object.assign(this,c);this.containerType=cB(b);this.i=dB[this.kc()]||""};
fB=function(a){return"9"===a.i||"("===a.i||"9h"===a.i||"(h"===a.i};
gB=function(a){return"9h"===a.i||"(h"===a.i};
hB=function(a){return"1"===a.i||"1h"===a.i};
g.OA=function(a){return 1===a.containerType};
iB=function(a){return"application/x-mpegURL"===a.mimeType};
jB=function(a){return a.includes("vtt")||a.includes("text/mp4")};
cB=function(a){return 0<=a.indexOf("/mp4")?1:0<=a.indexOf("/webm")?2:0<=a.indexOf("/x-flv")?3:0<=a.indexOf("/vtt")?4:0};
kB=function(a,b,c,d,e){var f=new ZA;b in g.kx||(b="small");d&&e?(e=Number(e),d=Number(d)):(e=g.kx[b],d=Math.round(16*e/9));d=new aB(d,e,0,null,void 0,b,void 0,void 0,void 0);a=unescape(a.replace(/&quot;/g,'"'));return new eB(c,a,{audio:f,video:d})};
lB=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
mB=function(){var a=g.Ha("yt.player.utils.videoElement_");a||(a=g.Fe("VIDEO"),g.Ga("yt.player.utils.videoElement_",a,void 0));return a};
nB=function(a){var b=mB();return!!(b&&b.canPlayType&&b.canPlayType(a))};
Yga=function(a){try{var b=oB('video/mp4; codecs="avc1.42001E"')||oB('video/webm; codecs="vp9"');return(oB('audio/mp4; codecs="mp4a.40.2"')||oB('audio/webm; codecs="opus"'))&&(b||!a)||nB('video/mp4; codecs="avc1.42001E, mp4a.40.2"')?null:"fmt.noneavailable"}catch(c){return"html5.missingapi"}};
oB=function(a){if(/opus/.test(a)&&(g.pB&&!Pn("38")||g.pB&&wq("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!Cq())return!1;'audio/mp4; codecs="mp4a.40.2"'===a&&(a='video/mp4; codecs="avc1.4d401f"');return!!nB(a)};
qB=function(){return"pictureInPictureEnabled"in window.document&&!!window.document.pictureInPictureEnabled};
rB=function(){var a=mB();return!!a.webkitSupportsPresentationMode&&"function"===typeof a.webkitSetPresentationMode};
sB=function(){var a=mB();try{var b=a.muted;a.muted=!b;return a.muted!==b}catch(c){}return!1};
tB=function(a,b){return{start:function(c){return a[c]},
end:function(c){return b[c]},
length:a.length}};
uB=function(a,b,c){b=void 0===b?",":b;c=void 0===c?a?a.length:0:c;var d=[];if(a)for(c=Math.max(a.length-c,0);c<a.length;c++)d.push(a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3));return d.join(b)};
vB=function(a,b){if(!a)return-1;try{for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c}catch(d){}return-1};
wB=function(a,b){return 0<=vB(a,b)};
Zga=function(a,b){if(!a)return NaN;b=vB(a,b);return 0<=b?a.start(b):NaN};
xB=function(a,b){if(!a)return NaN;b=vB(a,b);return 0<=b?a.end(b):NaN};
yB=function(a){return a&&a.length?a.end(a.length-1):NaN};
zB=function(a,b){a=xB(a,b);return 0<=a?a-b:0};
AB=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++)a.end(f)<b||a.start(f)>c||(d.push(Math.max(b,a.start(f))-b),e.push(Math.min(c,a.end(f))-b));return tB(d,e)};
BB=function(a,b,c,d){g.O.call(this);var e=this;this.Yc=a;this.start=b;this.end=c;this.isActive=d;this.appendWindowStart=0;this.appendWindowEnd=Infinity;this.timestampOffset=0;this.hG={error:function(){!e.Ha()&&e.isActive&&e.W("error",e)},
updateend:function(){!e.Ha()&&e.isActive&&e.W("updateend",e)}};
nu(this.Yc,this.hG);this.nu=this.isActive};
g.CB=function(a,b,c){this.errorCode=a;this.i=b;this.details=c||{}};
g.DB=function(a){var b;for(b in a)if(a.hasOwnProperty(b)){var c=(""+a[b]).replace(/[:,=]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
EB=function(a){var b=void 0===b?!1:b;if(a instanceof g.CB)return a;a=a&&a instanceof Error?a:Error(""+a);b?g.Su(a):g.Tu(a);return new g.CB(b?"player.fatalexception":"player.exception",b,{name:""+a.name,message:""+a.message})};
GB=function(a,b,c,d,e){var f;g.O.call(this);var h=this;this.Ob=a;this.Zd=b;this.id=c;this.containerType=d;this.isVideo=e;this.GG=this.dw=this.ue=null;this.appendWindowStart=this.timestampOffset=0;this.TE=tB([],[]);this.Mu=!1;this.It=FB?[]:void 0;this.Rd=function(l){return h.W(l.type,h)};
if(null===(f=this.Ob)||void 0===f?0:f.addEventListener)this.Ob.addEventListener("updateend",this.Rd),this.Ob.addEventListener("error",this.Rd)};
HB=function(){return window.SourceBuffer?!!SourceBuffer.prototype.changeType:!1};
IB=function(a,b){this.i=a;this.l=void 0===b?!1:b;this.u=!1};
JB=function(a,b,c){c=void 0===c?!1:c;g.F.call(this);this.mediaSource=a;this.Zd=b;this.isView=c;this.u=0;this.callback=null;this.events=new ku(this);g.G(this,this.events);this.Ws=new IB(this.mediaSource?window.URL.createObjectURL(this.mediaSource):this.Zd.webkitMediaSourceURL,!0);a=this.mediaSource||this.Zd;lu(this.events,a,["sourceopen","webkitsourceopen"],this.C);lu(this.events,a,["sourceclose","webkitsourceclose"],this.B)};
$ga=function(a,b){KB(a)?g.mm(function(){b(a)}):a.callback=b};
LB=function(a,b){try{a.mediaSource?a.mediaSource.duration=b:(a.u=b,a.Zd.webkitSourceSetDuration(b))}catch(c){}};
MB=function(a){return!!a.i||!!a.l};
KB=function(a){try{return"open"===NB(a)}catch(b){return!1}};
OB=function(a){try{return"closed"===NB(a)}catch(b){return!0}};
NB=function(a){if(a.mediaSource)return a.mediaSource.readyState;switch(a.Zd.webkitSourceState){case a.Zd.SOURCE_OPEN:return"open";case a.Zd.SOURCE_ENDED:return"ended";default:return"closed"}};
PB=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
QB=function(a,b,c,d){if(!a.i||!a.l)return null;var e=a.i.isView()?a.i.Yc:a.i,f=a.l.isView()?a.l.Yc:a.l,h=new JB(a.mediaSource,a.Zd,!0);h.Ws=a.Ws;e=new BB(e,b,c,d);b=new BB(f,b,c,d);h.i=e;h.l=b;g.G(h,e);g.G(h,b);KB(a)||a.i.Kq(a.i.Lc());return h};
aha=function(a,b){return RB(function(c,d){return g.Bp(c,d,4,1E3)},a,b)};
g.SB=function(a){var b;a.responseType&&"text"!==a.responseType?"arraybuffer"===a.responseType&&(b=My(new Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0===b.indexOf("https://")?b:""};
RB=function(a,b,c){b.match(bha);return a(b,c).then(function(d){var e=g.SB(d.xhr);return e?RB(a,e,c):d.xhr})};
UB=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.O.call(this);this.sourceUrl=a;this.isLivePlayback=c;this.Da=this.duration=0;this.Ee=this.C=this.isLive=this.u=!1;this.ag=this.Nd=0;this.isOtf=this.Oj=!1;this.xa=(0,g.N)();this.L=Infinity;this.i={};this.state=this.X=0;this.timeline=null;this.isManifestless=!1;this.V=[];this.B=null;this.ma=0;this.Fa="";this.ra=NaN;this.Y=this.J=this.G=this.timestampOffset=this.l=0;this.Na=!!b&&g.R(b,"html5_live_nonzero_first_segment_start_time");
this.Ta=!!b&&g.R(b,"html5_live_self_init_segments");this.withCredentials=!b||!g.R(b,"html5_manifest_without_credentials");this.Ea=!!b&&g.R(b,"disable_html5_manifest_namespace_redux");this.La=b&&g.R(b,"disable_html5_duration_caching")?Infinity:10;this.Ua=!!b&&g.R(b,"html5_reset_index_on_mismatch");TB=!!b&&g.R(b,"html5_modern_vp9_mime_type");this.ya=!!b&&g.R(b,"html5_unrewrite_timestamps")};
wga=function(a){return g.Eb(a.i,function(b){return!!b.info.video&&b.info.video.isHdr()})};
my=function(a){return g.Eb(a.i,function(b){return!!b.info.Bd})};
cha=function(a){return g.Eb(a.i,function(b){return jB(b.info.mimeType)})};
VB=function(a){return g.Eb(a.i,function(b){return b.info.video?2===b.info.video.projectionType:!1})};
WB=function(a){return g.Eb(a.i,function(b){return b.info.video?3===b.info.video.projectionType:!1})};
XB=function(a){return g.Eb(a.i,function(b){return b.info.video?4===b.info.video.projectionType:!1})};
dha=function(a){return g.Eb(a.i,function(b){return b.info.video?1===b.info.video.stereoLayout:!1})};
eha=function(a){return Fb(a.i,function(b){return b.info.video?b.DB():!0})};
rx=function(a){return g.Eb(a.i,function(b){return By(b.l.i)})};
YB=function(a,b){a.i[b.info.id]=b};
aC=function(a,b,c,d,e,f){var h=fha(a);if(d||e){c=new UB("",f,!0);a=g.q(a);for(d=a.next();!d.done;d=a.next()){var l=d.value;d=ZB(l,b);f=$B(l.url,l.sp,l.s);h=Number(l.target_duration_sec)||5;l=Number(l.max_dvr_duration_sec)||14400;var m=Number(f.get("mindsq")||f.get("min_sq")||"0"),n=Number(f.get("maxdsq")||f.get("max_sq")||"0")||Infinity;c.Nd=c.Nd||m;c.ag=c.ag||n;var p=!jB(d.mimeType);f&&YB(c,new vA(f,d,{Wh:h,xj:p,Ik:l,Nd:m,ag:n,Vs:300,Ee:e}))}c.u=!e;c.Oj=!0;c.isManifestless=!0;c.isLive=!e;c.Ee=e;
c.C=!!c.Nd&&!!c.ag&&isFinite(c.ag);b=c}else b=3===h?gha(a,b,c,f):hha(a,b,c,f);return b};
hha=function(a,b,c,d){c=void 0===c?0:c;var e=new UB("",d,!1);e.duration=c||0;g.zb(a,function(f){var h=ZB(f,b,e.duration),l=Uz(f.init),m=Uz(f.index);(f=$B(f.url,f.sp,f.s))&&YB(e,new XA(f,h,l,m))});
return e};
gha=function(a,b,c,d){c=void 0===c?0:c;var e=new UB("",d,!1);e.duration=c||0;g.zb(a,function(f){var h=ZB(f,b,e.duration),l=$B(f.url,f.sp,f.s);if(l)if(3===h.streamType)YB(e,new wA(l,h,"sq/0"));else{var m=Uz(f.init);f=Uz(f.index);YB(e,new XA(l,h,m,f))}});
e.isOtf=!0;return e};
ZB=function(a,b,c){c=void 0===c?0:c;var d=a.type;var e=a.itag;var f=a.xtags;f&&(e=a.itag+";"+f);if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){var h=(a.size||"640x360").split("x");h=new aB(+h[0],+h[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,a.quality_label,a.eotf,a.primaries);f=h;null===bC&&(bC=window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09.00"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99.00"'));
if(TB&&window.MediaSource&&MediaSource.isTypeSupported)!bC&&0<d.indexOf("vp09.00")?d='video/webm; codecs="vp9"':!bC&&0<d.indexOf("vp09.02")&&(d='video/webm; codecs="vp9.2"');else if((bC||cC)&&('video/webm; codecs="vp9"'===d||'video/webm; codecs="vp9.2"'===d)){var l="00",m="08",n="01",p="01",r="01";'video/webm; codecs="vp9.2"'===d&&(l="02",m="10","bt2020"===f.primaries&&(r=n="09"),"smpte2084"===f.l&&(p="16"),"arib-std-b67"===f.l&&(p="18"));d='video/webm; codecs="'+["vp09",l,"51",m,"01",n,p,r,"00"].join(".")+
'"'}}var t;if(/(opus|mp4a|dtse|ac-3|ec-3)/.test(d)){var u=new ZA(+a.audio_sample_rate||void 0,+a.audio_channels||0,+a.spatial_audio_type);a.name&&(t=new lB(a.name,a.audio_track_id,"1"===a.isDefault))}var x;a.caption_display_name&&a.caption_vss_id&&a.caption_language_code&&(x=new Xga(a.caption_display_name,a.caption_vss_id,a.caption_language_code,a.caption_kind));f=Number(a.bitrate)/8;l=Number(a.clen);m=Number(a.lmt);c=c&&l?l/c:0;if(b&&a.drm_families){var y={};n=g.q(a.drm_families.split(","));for(p=
n.next();!p.done;p=n.next())p=p.value,y[p]=b[p]}return new eB(e,d,{audio:u,video:h,Jc:t,Bd:y,Hb:f,Kr:c,contentLength:l,lastModified:m,captionTrack:x,streamType:+a.stream_type})};
fha=function(a){return ci(a,function(b){return 3===+b.stream_type})?3:0};
dC=function(a,b){return a.timeline?qb(a.timeline.B,b):a.V.length?qb(a.V,b):[]};
$B=function(a,b,c){b=void 0===b?"":b;c=void 0===c?"":c;a=new wy(a,!0);a.set("alr","yes");c&&(c=vy(decodeURIComponent(c)),a.set(b,encodeURIComponent(c)));return a};
gC=function(a,b){var c=nA(b,"id");c=c.replace(":",";");var d=nA(b,"mimeType"),e=nA(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=Number(nA(b,"bandwidth"))/8;var f=Number(oA(b,"BaseURL").getAttribute(eC(a,"contentLength"))),h=a.duration&&f?f/a.duration:0;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){var l=Number(nA(b,"width"));var m=Number(nA(b,"height")),n=Number(nA(b,"frameRate")),p=iha(nA(b,eC(a,"projectionType")));a:switch(nA(b,eC(a,"stereoLayout"))){case "layout_left_right":var r=1;break a;case "layout_top_bottom":r=
2;break a;default:r=0}l=new aB(l,m,n,p,r)}if(/(opus|mp4a|dtse|ac-3|ec-3)/.test(d)){var t=Number(nA(b,"audioSamplingRate"));var u=Number(nA(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"));m=jha(nA(b,eC(a,"spatialAudioType")));t=new ZA(t,u,m);a:{u=nA(b,"lang")||"und";if(m=oA(b,"Role"))if(p=nA(m,"value")||"",Lb(fC,p)){m=u+"."+fC[p];n="main"===p;a=nA(b,eC(a,"langName"))||u+" - "+p;u=new lB(a,m,n);break a}u=void 0}}if(b=oA(b,"ContentProtection"))if("http://youtube.com/drm/2012/10/10"===
b.getAttribute("schemeIdUri")){var x={};for(b=b.firstChild;null!=b;b=b.nextSibling)b instanceof Element&&/SystemURL/.test(b.nodeName)&&(a=b.getAttribute("type"),m=b.textContent,a&&m&&(x[a]=m.trim()))}else x=void 0;return new eB(c,d,{audio:t,video:l,Jc:u,Bd:x,Hb:e,Kr:h,contentLength:f})};
iha=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
jha=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}};
iC=function(a,b){b=void 0===b?"":b;a.state=1;a.xa=(0,g.N)();return g.Cm(aha(b||a.sourceUrl,{format:"RAW",method:"GET",withCredentials:a.withCredentials}).then(function(c){if(!a.Ha()){a.X=c.status;c=c.responseText;var d=new DOMParser;c=ld(d,ig(c),"text/xml").getElementsByTagName("MPD")[0];a.L=1E3*pA(nA(c,"minimumUpdatePeriod"))||Infinity;if(!a.Ea){b:{if(c.attributes){d=g.q(c.attributes);for(var e=d.next();!e.done;e=d.next())if(e=e.value,"http://youtube.com/yt/2012/10/10"===e.value){d=e.name.split(":")[1];
break b}}d=""}a.Fa=d}a.isLive=Infinity>a.L&&a.isLivePlayback;a.Da=Number(nA(c,eC(a,"earliestMediaSequence")))||0;if(d=Date.parse(qA(nA(c,eC(a,"mpdResponseTime")))))a.ma=(g.Ra()-d)/1E3;a.isLive&&0>=c.getElementsByTagName("SegmentTimeline").length||g.jh(c.getElementsByTagName("Period"),a.VR,a);a.state=2;a.W("loaded");hC(a)}return a}),function(c){if(c instanceof zp){var d=c.xhr;
a.X=d.status}a.state=3;a.W("loaderror");return wm(d)})};
kha=function(a,b,c){return iC(new UB(a,b,c),a)};
jC=function(a){return a.isLive&&(0,g.N)()-a.xa>=a.L};
hC=function(a){var b=a.L;isFinite(b)&&(jC(a)?a.refresh():(b=Math.max(0,a.xa+b-(0,g.N)()),a.B||(a.B=new g.J(a.refresh,b,a),g.G(a,a.B)),a.B.start(b)))};
lha=function(a){a=a.i;for(var b in a){var c=a[b].index;if(c.ld())return c.uc()+1}return 0};
lC=function(a){if(a.isManifestless&&a.C&&kC(a))return kC(a);a=a.i;var b=!1,c=NaN,d=NaN,e;for(e in a){var f=a[e],h=f.index;h.ld()&&(f.G&&(b=!0),h=h.Zl(),f.info.isAudio()&&(isNaN(c)||h<c)?c=h:f.info.isVideo()&&(isNaN(d)||h<d)&&(d=h))}return b||isNaN(d)?c:Math.min(c,d)};
kC=function(a){return a.G&&(a.l||a.ya)?a.G-(a.l||a.timestampOffset):0};
mC=function(a){return a.J&&(a.l||a.ya)?a.J-(a.l||a.timestampOffset):0};
nC=function(a){if(!isNaN(a.ra))return a.ra;var b=a.i,c;for(c in b){var d=b[c].index;if(d.ld()){b=0;for(c=d.xi();c<=d.uc();c++)b+=d.getDuration(c);b/=d.gq();b=.5*Math.round(b/.5);d.gq()>a.La&&(a.ra=b);return b}if(a.isLive&&(d=b[c],d.Wh))return d.Wh}return NaN};
mha=function(a,b){a=Ob(a.i,function(d){return d.index.ld()});
if(!a)return NaN;a=a.index;var c=a.Gh(b);return a.jf(c)===b?b:c<a.uc()?a.jf(c+1):NaN};
nha=function(a,b){g.Bb(a.i,function(c){g.Bb(b,function(d,e){var f=c.l;f.i.set(e,d);f.B.set(e,d);f.u&&f.u.set(e,d)})})};
oha=function(a,b){if(!a.i["0"]){var c=new eB("0","fakesb",{video:new aB(0,0,0,void 0,void 0,"auto")});a.i["0"]=b?new mA(new wy("http://www.youtube.com/videoplayback"),c,"fake"):new XA(new wy("http://www.youtube.com/videoplayback"),c,new Tz(0,0),new Tz(0,0))}};
oC=function(a,b,c){for(var d in a.i){var e=jB(a.i[d].info.mimeType)||a.i[d].info.isVideo();if(c===e){e=a.i[d].index;var f=tA(e,b);0<=f&&e.segments.splice(f,1)}}};
eC=function(a,b){return a.Ea?"yt:"+b:a.Fa+":"+b};
pha=function(a){return g.bb(Object.values(a.i),function(b){return b.info.Bd&&b.info.video?480<b.info.video.i&&"H"===b.info.i:!1})};
qC=function(){this.u=this.i=0;this.l=Array.from({length:pC.length}).fill(0)};
qha=function(a,b,c){c=void 0===c?1:c;a.i+=c;a.u+=b;var d=b/c;pC.forEach(function(e,f){d<e||(a.l[f]+=c)})};
rC=function(){};
sC=function(a){this.name=a;this.startTimeMs=(0,g.N)();this.i=!1};
tC=function(){this.profiles=new rC};
uC=function(a,b,c,d){d=void 0===d?1:d;0<=c&&(b in a.profiles||(a.profiles[b]=new qC),qha(a.profiles[b],c,d))};
vC=function(){};
rha=function(){var a=g.ov("yt-player-quality");if(a instanceof Object&&a.quality&&a.previousQuality){if(a.quality>a.previousQuality)return 1;if(a.quality<a.previousQuality)return-1}return 0};
wC=function(a,b){var c="";49<b?c="p60":32<b&&(c="p48");return a+c};
sha=function(){this.kb=this.u=this.ya=this.X=this.V=this.ra=this.xa=this.La=this.Fa=!1;this.G=this.C=0;this.Ta=!1;this.Na=!0;this.Ua=!1;this.J=0;this.ub=this.ib=!1;this.Ya=Infinity;this.Bb=!1;this.zb=!0;this.Da=this.Ea=!1;this.l={};this.Za=this.i=this.ma=!1;this.B=this.L=null;this.Xa=this.Y=!1};
ry=function(a){if(a.La)return["f"];var b="9h 9 h 8 (h ( H *".split(" ");a.ib&&(b.unshift("1"),b.unshift("1h"));a.u&&b.unshift("h");a.L&&b.unshift(a.L);return b};
ny=function(a){var b=["o","a","A"];a.ra&&(b=["m","M"].concat(b));a.V&&(b=["mac3","MAC3"].concat(b));a.X&&(b=["meac3","MEAC3"].concat(b));a.Fa&&(b=["so","sa"].concat(b));!a.kb||a.ya||a.B||b.unshift("a");a.xa&&b.unshift("ah");a.B&&b.unshift(a.B);return b};
zC=function(a,b,c){b=void 0===b?{}:b;if(wx(a.B,ly.AV1_CODECS)&&wx(a.B,ly.HEIGHT)&&wx(a.B,ly.BITRATE))return b.isCapabilityUsable=1,8192;try{var d=xC();if(d)return b.localPref=d}catch(f){}d=g.S(a.experiments,"html5_av1_thresh");var e=g.S(a.experiments,"html5_av1_thresh_lcc");e&&2>=navigator.hardwareConcurrency&&(d=e);(e=g.S(a.experiments,"html5_av1_thresh_hcc"))&&4<navigator.hardwareConcurrency&&(d=e);b.coreCount=navigator.hardwareConcurrency;(a=g.S(a.experiments,"html5_av1_thresh_arm"))&&yq()&&(b.isArm=
1,d=a);if(c){if((a=c.videoInfos.find(function(f){return hB(f)}))&&a.l)return d=8192,b.av1Threshold=d;
c=c.videoInfos[0].video;a=Math.min(yC("1",c.fps),yC("1",30));b.perfCap=a;d=Math.min(d,a);c.isHdr()&&(b.hdr=1,d*=.75)}else c=yC("1",30),b.perfCap30=c,d=Math.min(d,c),c=yC("1",60),b.perfCap60=c,d=Math.min(d,c);return b.av1Threshold=d};
BC=function(a,b,c,d){this.flavor=a;this.keySystem=b;this.u=c;this.experiments=d;this.i={};this.l=this.keySystemAccess=null;this.G=this.J=-1;this.B=null;this.C="";this.L=!!d&&g.R(d,"edge_nonprefixed_eme");this.C=d?g.AC(d,"html5_hdcp_probing_stream_url"):""};
DC=function(a){return a.L?!1:!a.keySystemAccess&&!!CC()&&"com.microsoft.playready"===a.keySystem};
EC=function(a){return"com.microsoft.playready"===a.keySystem};
FC=function(a){return g.mt&&"com.microsoft.playready"===a.keySystem&&!!navigator.requestMediaKeySystemAccess};
GC=function(a){return!a.keySystemAccess&&!!CC()&&"com.apple.fps.1_0"===a.keySystem};
HC=function(a){return"com.youtube.fairplay"===a.keySystem};
g.IC=function(a){return"fairplay"===a.flavor};
CC=function(){var a=window,b=a.MSMediaKeys;Eq()&&!b&&(b=a.WebKitMediaKeys);return b&&b.isTypeSupported?b:null};
KC=function(a){if(!navigator.requestMediaKeySystemAccess)return!1;if(g.pB&&!g.zq())return Pn("45");if(g.mt||g.ye)return g.R(a,"edge_nonprefixed_eme");if(g.JC)return Pn("47");if(g.Is){if(g.R(a,"html5_enable_safari_fairplay"))return!1;if(a=g.S(a,"html5_safari_desktop_eme_min_version"))return Pn(a)}return!0};
tha=function(a,b,c,d){var e=Aq(),f=(c=e||c&&Eq())?["com.youtube.fairplay"]:["com.widevine.alpha"];b&&(f.unshift("com.youtube.widevine.l3"),e&&d&&f.unshift("com.youtube.widevine.forcehdcp"));return c?f:a?[].concat(g.ma(f),g.ma(LC.playready)):[].concat(g.ma(LC.playready),g.ma(f))};
MC=function(a,b,c,d,e){d=void 0===d?!1:d;g.F.call(this);this.experiments=b;this.useCobaltWidevine=d;this.Ja=e;this.i=[];this.l={};this.B={};this.callback=null;this.C=!1;this.u=[];this.initialize(a,!c);this.ea()};
vha=function(a,b){a.callback=b;a.u=[];KC(a.experiments)?NC(a):uha(a)};
NC=function(a){if(!a.Ha())if(0===a.i.length)a.callback(a.u);else{var b=a.i[0],c=a.l[b],d=wha(a,c);a.ea();navigator.requestMediaKeySystemAccess(b,d).then(Wo(function(e){if(!a.Ha()){a.ea();c.keySystemAccess=e;if(EC(c)){e=mB();for(var f=g.q(Object.keys(a.B[c.flavor])),h=f.next();!h.done;h=f.next())h=h.value,c.i[h]=!!e.canPlayType(h)}else{e=c.keySystemAccess.getConfiguration();if(e.audioCapabilities)for(f=g.q(e.audioCapabilities),h=f.next();!h.done;h=f.next())OC(a,c,h.value);if(e.videoCapabilities)for(e=
g.q(e.videoCapabilities),f=e.next();!f.done;f=e.next())OC(a,c,f.value)}a.u.push(c);a.Z("html5_drm_fallback_to_playready_on_retry")||a.useCobaltWidevine?(a.i.shift(),NC(a)):a.callback(a.u)}}),Wo(function(){a.ea();
a.C=!a.C&&"widevine"===a.l[a.i[0]].flavor;a.C||a.i.shift();NC(a)}))}};
OC=function(a,b,c){a.Z("log_robustness_for_drm")?b.i[c.contentType]=c.robustness||!0:b.i[c.contentType]=!0};
wha=function(a,b){var c={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};EC(b)&&(c.initDataTypes=["keyids","cenc"]);for(var d=g.q(Object.keys(a.B[b.flavor])),e=d.next();!e.done;e=d.next()){e=e.value;var f=0===e.indexOf("audio/"),h=f?c.audioCapabilities:c.videoCapabilities;"widevine"!==b.flavor||a.C?h.push({contentType:e}):f?h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(h.push({contentType:e,robustness:"HW_SECURE_ALL"}),f=e,a.Z("html5_enable_cobalt_experimental_vp9_decoder")&&
e.includes("vp09")&&(f=e+"; experimental=allowed"),h.push({contentType:f,robustness:"SW_SECURE_DECODE"}),a.Z("html5_query_sw_secure_crypto_for_android")&&(Kq()||xq())&&(a.Ja("swcrypto","1"),h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"})))}return[c]};
uha=function(a){if(CC()&&g.Is)a.ea(),a.u.push(new BC("fairplay","com.apple.fps.1_0","",a.experiments));else{var b=xha(),c=g.bb(a.i,function(d){var e=a.l[d],f=!1,h=!1,l;for(l in a.B[e.flavor])b(l,d)&&(e.i[l]=!0,f=f||0===l.indexOf("audio/"),h=h||0===l.indexOf("video/"));return f&&h});
c?(a.ea(),a.u.push(a.l[c])):a.ea();a.i=[]}a.callback(a.u)};
xha=function(){var a=CC();if(a){var b=a.isTypeSupported;return function(d,e){return b(e,d)}}var c=mB();
return c&&(c.addKey||c.webkitAddKey)?function(d,e){return!!c.canPlayType(d,e)}:function(){return!1}};
yha=function(){this.i=0};
zha=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=Zo(b||"","&");var c={};g.zb(this.experimentIds,function(d){c[d]=!0});
this.experiments=c};
g.R=function(a,b){return"true"===a.flags[b]};
g.S=function(a,b){return Number(a.flags[b])||0};
g.AC=function(a,b){return(a=a.flags[b])?a.toString():""};
PC=function(a,b,c){this.experiments=a;this.X=b;this.Y=void 0===c?!1:c;this.G=!!g.Ha("cast.receiver.platform.canDisplayType");this.C={};this.L=!1;this.i=new Map;this.J=!0;this.B=!g.R(this.experiments,"html5_disable_protected_hdr");this.l=!1;this.V=g.R(this.experiments,"html5_disable_vp9_encrypted");a=g.Ha("cast.receiver.platform.getValue");this.u=!this.G&&a&&a("max-video-resolution-vpx")||null};
sx=function(a,b,c){c=void 0===c?1:c;var d=b.kc();if("0"===d||g.R(a.experiments,"html5_use_media_capability")&&b.isSupported)return!0;var e=b.mimeType;if(hB(b)&&a.L)return"dav1";if(b.video&&(b.video.isHdr()||"bt2020"===b.video.primaries)&&!(wx(a,ly.EOTF)||window.matchMedia&&(window.matchMedia("(dynamic-range: high)").matches||24<window.screen.pixelDepth&&window.matchMedia("(color-gamut: p3)").matches)))return"dhdr";if("338"===d&&!(g.pB?Pn(53):g.JC&&Pn(64)))return"dopus";var f=c;f=void 0===f?1:f;c=
{};b.video&&(b.video.width&&(c[ly.WIDTH.name]=b.video.width),b.video.height&&(c[ly.HEIGHT.name]=b.video.height),b.video.fps&&(c[ly.FRAMERATE.name]=b.video.fps*f),b.video.l&&(c[ly.EOTF.name]=b.video.l),b.Hb&&(c[ly.BITRATE.name]=8*b.Hb*f),"("===b.i&&(c[ly.CRYPTOBLOCKFORMAT.name]="subsample"),2===b.video.projectionType||3===b.video.projectionType||4===b.video.projectionType)&&(c[ly.DECODETOTEXTURE.name]="true");b.audio&&b.audio.i&&(c[ly.CHANNELS.name]=b.audio.i);a.l&&fB(b)&&(c[ly.EXPERIMENTAL.name]=
"allowed");f=g.q(Object.keys(ly));for(var h=f.next();!h.done;h=f.next()){h=ly[h.value];var l;if(l=c[h.name])(l=h===ly.EOTF&&0<b.mimeType.indexOf("vp09.02"))||(l=b,l=g.R(a.experiments,"html5_ignore_h264_framerate_cap")&&h===ly.FRAMERATE&&("H"===l.i||"h"===l.i)),l=!(l||h===ly.DECODETOTEXTURE&&!g.R(a.experiments,"html5_decode_to_texture_cap"));if(l)if(wx(a,h))if(a.u){if(a.u[h.name]<c[h.name])return h.name}else e=e+"; "+h.name+"="+c[h.name];else if(gB(b)&&h===ly.EOTF)return"dvp92"}!g.R(a.experiments,
"disable_html5_cast_hdcp_filter2")&&a.G&&b.video&&1080<b.video.i&&b.Bd&&(e+="; hdcp=2.2");return"227"!==d||g.R(a.experiments,"html5_enable_1080p_hq_cenc")?"585"!==d&&"588"!==d&&"583"!==d&&"586"!==d&&"584"!==d&&"587"!==d&&"591"!==d&&"592"!==d||g.R(a.experiments,"html5_enable_new_hvc_enc")?a.isTypeSupported(e)?!0:"tpus":"newhvc":"hqcenc"};
QC=function(){var a=xq()&&!Pn(29),b=wq("google tv")&&wq("chrome")&&!Pn(30),c=Aq();return a||b||c?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)};
RC=function(a,b,c){var d=480;b=g.q(b);for(var e=b.next();!e.done;e=b.next())if(e=e.value,!(1080<e.video.i)&&sx(a,e,c)){d=e.video.i;break}return d};
g.SC=function(a,b){b=void 0===b?!1:b;return QC()&&a.isTypeSupported('audio/mp4; codecs="mp4a.40.2"')||!b&&a.canPlayType(mB(),"application/x-mpegURL")?!0:!1};
wx=function(a,b){b.name in a.C||(a.C[b.name]=Aha(a,b));return a.C[b.name]};
Aha=function(a,b){if(a.u)return!!a.u[b.name];if(b===ly.BITRATE&&g.R(a.experiments,"html5_ignore_bad_bitrates")&&a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000'))return!1;if(b===ly.AV1_CODECS)return a.isTypeSupported("video/mp4; codecs="+b.valid)&&!a.isTypeSupported("video/mp4; codecs="+b.invalid);if(b.video){var c='video/webm; codecs="vp9"';a.isTypeSupported(c)||(c='video/mp4; codecs="avc1.4d401e"')}else c=
'audio/webm; codecs="opus"',a.isTypeSupported(c)||(c='audio/mp4; codecs="mp4a.40.2"');return a.isTypeSupported(c+"; "+b.name+"="+b.valid)&&!a.isTypeSupported(c+"; "+b.name+"="+b.invalid)};
TC=function(){g.O.call(this);this.items={}};
Bha=function(a,b){this.encryptedClientKey=b;this.i=new Uint8Array(a.buffer,0,16);this.l=new Uint8Array(a.buffer,16)};
UC=function(a){try{return g.df(a)}catch(b){return null}};
Cha=function(a,b){this.onesieUstreamerConfig=null;if(!b&&a)try{b=JSON.parse(a)}catch(e){}if(b){a=b.clientKey?UC(b.clientKey):null;var c=b.encryptedClientKey?UC(b.encryptedClientKey):null,d=b.keyExpiresInSeconds?1E3*Number(b.keyExpiresInSeconds)+(0,g.N)():null;a&&c&&d&&(this.i=new Bha(a,c));b.onesieUstreamerConfig&&(this.onesieUstreamerConfig=UC(b.onesieUstreamerConfig));this.baseUrl=b.baseUrl}};
VC=function(a){this.i=this.l=0;this.alpha=Math.exp(Math.log(.5)/a)};
XC=function(a,b,c,d){c=void 0===c?.5:c;d=void 0===d?0:d;this.resolution=b;this.valueIndex=0;this.l=!1;this.B=!0;this.i=Math.round(a*this.resolution);this.values=Array(this.i);for(a=0;a<this.i;a++)this.values[a]=Infinity;this.G=WC(this);this.u=c;this.C=d};
WC=function(a){for(var b=Array(a.i),c=0;c<a.i;c++)b[c]=c;return b};
YC=function(a,b){if(!a.l&&0===a.valueIndex)return 0;a.B&&(g.wb(a.G,function(c,d){return a.values[c]-a.values[d]}),a.B=!1);
return a.values[a.G[Math.round(b*((a.l?a.i:a.valueIndex)-1))]]||0};
Eha=function(a){var b=new yha;this.policy=a;this.X=b;this.L=this.Y=0;this.B=-1;this.G=this.J=ZC();this.C=new XC(4,1,.6,.4);this.i=new XC(10,1,.5,.4);this.l=a.i?new VC(a.l):new XC(a.l,20,.5,.4);this.V=new XC(5,1,.25);this.u=new XC(30,1,.5);a=Dha();this.l.yh(this.policy.B,0<a.byterate?a.byterate:this.policy.u);0<a.delay&&this.C.yh(1,Math.min(+a.delay,2));0<a.stall&&this.i.yh(1,+a.stall);0<a.init&&(this.G=Math.min(a.init,this.G));this.B=ZC()};
$C=function(a,b,c,d,e,f){f=void 0===f?!1:f;a.V.yh(b,c/b);f||(a.J=ZC());e||a.u.yh(1,b-d)};
aD=function(a){a=a.C.Wf();a=isNaN(a)?.5:a;return a=Math.min(a,5)};
bD=function(a,b,c){isNaN(c)||(a.L+=c);isNaN(b)||(a.Y+=b)};
cD=function(a){a=a.l.Wf();return 0<a?a:1};
dD=function(a){var b=cD(a);b=1/((a.i.Wf()||0)+1/b);a=a.V.Wf();return Math.max(b,0<a?a:1)};
eD=function(a){return{delay:aD(a),stall:a.i.Wf()||0,byterate:cD(a),init:a.G}};
gD=function(a){-1<a.B&&3E4<ZC()-a.B&&(fD(eD(a)),a.B=ZC())};
hD=function(a){return 4E3<=ZC()-a.J};
Fha=function(){this.l=17;this.u=13E4;this.B=.5;this.i=!1};
jD=function(a,b){a=void 0===a?{}:a;b=void 0===b?{}:b;g.F.call(this);var c=this;this.values=a;this.Pk=b;this.l={};this.u=this.i=0;this.B=new g.J(function(){iD(c)},1E4);
g.G(this,this.B)};
lD=function(a,b){kD(a,b);return a.values[b]&&a.Pk[b]?a.values[b]/Math.pow(2,a.i/a.Pk[b]):0};
kD=function(a,b){a.values[b]||(b=mD(),a.values=b.values||{},a.Pk=b.halfLives||{},a.l=b.values?Object.assign({},b.values):{})};
iD=function(a){var b=mD();if(b.values){b=b.values;for(var c={},d=g.q(Object.keys(a.values)),e=d.next();!e.done;e=d.next())e=e.value,b[e]&&a.l[e]&&(a.values[e]+=b[e]-a.l[e]),c[e]=lD(a,e);a.l=c}Gha(a.l,a.Pk)};
T=function(a,b){return void 0===b||null===b?a:"1"===b||!0===b||1===b||"True"===b?!0:!1};
nD=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
oD=function(a,b){return void 0===b||null===b?a:Number(b)};
pD=function(a,b){return void 0===b||null===b?a:b.toString()};
qD=function(a,b){if(b){if("fullwidth"===a)return Infinity;if("fullheight"===a)return 0}return a&&(b=a.match(Hha))&&(a=Number(b[2]),b=Number(b[1]),!isNaN(a)&&!isNaN(b)&&0<a)?b/a:NaN};
rD=function(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||g.Qo("parse_video_id_from_serialized_player_response_killswitch")||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null};
SD=function(a,b,c){var d,e;g.F.call(this);this.csiServiceName=this.csiPageType="";this.userAge=NaN;this.Ic=this.Bb=this.zb=this.zc=this.userDisplayName=this.userDisplayImage="";this.deviceParams={};this.controlsType="0";this.Ec=NaN;this.kb=!1;this.La=0;this.Jf=this.Mb=this.Kf=this.gk=!1;a=a?g.Tb(a):{};b&&b.csiPageType&&(this.csiPageType=b.csiPageType);b&&b.csiServiceName&&(this.csiServiceName=b.csiServiceName);this.experiments=new zha(b?b.serializedExperimentIds:a.fexp,b?b.serializedExperimentFlags:
a.fflags);this.Na=b?b.serializedForcedExperimentIds:pD("",a.forced_experiments)||void 0;this.cspNonce=(null===b||void 0===b?0:b.cspNonce)&&!this.Z("fill_csp_nonce_from_wpcc_killswitch")?b.cspNonce:pD("",a.csp_nonce);Mv=this.Z("web_player_deprecated_uvr_killswitch");try{var f=document.location.toString()}catch(y){f=""}this.Fb=f;this.Zb=(f=window.location.ancestorOrigins)?Array.from(f):[];f=!this.Z("web_player_context_config_embeds_fields_killswitch");this.l=T(!1,b&&f?b.isEmbed:a.is_embed);if(b&&b.device){var h=
b.device;h.brand&&(this.deviceParams.cbrand=h.brand);h.browser&&(this.deviceParams.cbr=h.browser);h.browserVersion&&(this.deviceParams.cbrver=h.browserVersion);this.deviceParams.c=h.interfaceName||"WEB";this.deviceParams.cver=h.interfaceVersion||"html5";h.interfaceTheme&&(this.deviceParams.ctheme=h.interfaceTheme);this.deviceParams.cplayer=h.interfacePlayerType||"UNIPLAYER";h.model&&(this.deviceParams.cmodel=h.model);h.network&&(this.deviceParams.cnetwork=h.network);h.os&&(this.deviceParams.cos=h.os);
h.osVersion&&(this.deviceParams.cosver=h.osVersion);h.platform&&(this.deviceParams.cplatform=h.platform)}else this.deviceParams.c=a.c||"web",this.deviceParams.cver=a.cver||"html5",this.deviceParams.cplayer="UNIPLAYER";b&&!this.Z("wpcc_loader_url_killswitch")?this.loaderUrl=this.l||sD(this)&&b.loaderUrl?b.loaderUrl||"":this.Fb:this.loaderUrl=this.l||sD(this)&&a.loaderUrl?pD("",a.loaderUrl):this.Fb;this.Z("embeds_js_api_set_1p_cookie")&&(this.embedsTokenValue=pD("",a.embedsTokenValue));this.u=Nv(this.loaderUrl,
Iha,Jha);h=this.loaderUrl;var l=void 0===l?!1:l;this.tj=Lv(Nv(h,Kha,null),h,l,"Trusted Ad Domain URL");this.ra=T(!1,a.privembed);this.protocol=0===this.Fb.indexOf("http:")?"http":"https";this.xa=Pv((b?b.customBaseYoutubeUrl:a.BASE_YT_URL)||"")||Pv(this.Fb)||this.protocol+"://www.youtube.com/";l=b?b.eventLabel:a.el;h="detailpage";"adunit"===l?h=this.l?"embedded":"detailpage":"embedded"===l||this.u?h=nD(h,l,Lha):l&&(h="embedded");this.ya=h;rq();l=null;h=b?b.playerStyle:a.ps;var m=g.fb(tD,h);!h||m&&
!this.u||(l=h);this.playerStyle=l;this.J=(this.C=g.fb(tD,this.playerStyle))&&"area120-boutique"!==this.playerStyle&&"play"!==this.playerStyle&&"jamboard"!==this.playerStyle;this.nj=!this.J;this.Y=T(!1,a.disableplaybackui);this.Ib=this.Z("variable_playback_rate")&&this.Z("enable_vsp")?!0:mB().defaultPlaybackRate?uD||g.Jq||vD?g.JC&&Pn("20")||g.pB&&Pn("4")||g.og&&Pn("11")||Fq():!(g.og&&!wq("chrome")||uD||wq("android")||wq("silk")):!1;this.ij=T(!1,a.enable_faster_speeds);this.i=T("blazer"===this.playerStyle,
a.is_html5_mobile_device||b&&b.isMobileDevice);this.i?l=!this.C:(l=Number(Date.now()/1E3),h=g.ur.getInstance(),l=this.Z("block_desktop_background_playback_with_mobile_cookie")&&h&&l>Number(h.get("dhmu",l.toString())));this.mj=l;this.Xa="3"===this.controlsType||this.i||T(!1,a.use_media_volume);this.X=sB();this.wk=g.wD;this.dg=T(!1,b&&f?b.embedOptOutDeprecation:a.opt_out_deprecation);this.pfpChazalUi=T(!1,(b&&f?b.pfpChazalUi:a.pfp_chazal_ui)&&!this.Z("embeds_pfp_chazal_ui_killswitch"));var n;b?void 0!==
b.hideInfo&&(n=!b.hideInfo):n=a.showinfo;this.Xh=g.xD(this)&&!this.dg||T(!yD(this)&&!zD(this)&&!this.C,n);this.ih=b?!!b.mobileIphoneSupportsInlinePlayback:T(!1,a.playsinline);n=this.i&&AD&&null!=BD&&0<BD&&2.3>=BD;l=b?b.useNativeControls:a.use_native_controls;h=this.i&&!this.Z("embeds_enable_mobile_custom_controls");l=CD(this)||!n&&T(h,l)?"3":"1";h=b?b.controlsType:a.controls;this.controlsType="0"!==h&&0!==h?l:"0";this.Wb=this.i;this.color=nD("red",b&&f?b.progressBarColor:a.color,Mha);this.vj="3"===
this.controlsType||T(!1,b&&f?b.embedsShowModestBranding:a.modestbranding)&&"red"===this.color;this.Ua=!this.l;this.Zh=(l=!this.Ua&&!zD(this)&&!this.J&&!this.C&&!yD(this))&&!this.vj&&"1"===this.controlsType;this.ib=g.DD(this)&&l&&"0"===this.controlsType&&!this.Zh;this.zk=this.rk=n;this.Yi=ED&&!g.be(601)?!1:!0;this.lj=this.l||!1;this.Pb=zD(this)?"":(this.loaderUrl||a.post_message_origin||"").substring(0,128);this.widgetReferrer=pD("",b&&f?b.widgetReferrer:a.widget_referrer);var p;b&&f?b.disableCastApi&&
(p=!1):p=a.enablecastapi;p=!this.u||T(!0,p);n=!0;b&&b.disableMdxCast&&(n=!1);this.Kd=this.Z("enable_cast_for_web_unplugged")&&g.FD(this)&&n||this.Z("enable_mdx_module_for_music_web")&&g.GD(this)&&n||p&&n&&"1"===this.controlsType&&!this.i&&(zD(this)||g.DD(this)||g.HD(this))&&!g.ID(this)&&!JD(this);this.yk=qB()||rB();p=b?!!b.supportsAutoplayOverride:T(!1,a.autoplayoverride);this.df=!this.i&&!wq("nintendo wiiu")&&!wq("nintendo 3ds")||p;p=b?!!b.enableMutedAutoplay:T(!1,a.mutedautoplay);n=this.Z("embeds_enable_muted_autoplay")&&
g.xD(this);this.Ub=p&&n&&this.X&&!CD(this);p=(zD(this)||yD(this))&&"blazer"===this.playerStyle;this.ke=b?!!b.disableFullscreen:!T(!0,a.fs);this.Fa=!this.ke&&(p||gu());this.Ff=this.Z("uniplayer_block_pip")&&(xq()&&Pn(58)&&!Kq()||Hq);p=g.xD(this)&&!this.dg;var r;b?void 0!==b.disableRelatedVideos&&(r=!b.disableRelatedVideos):r=a.rel;this.Za=p||T(!this.C,r);this.Rh=T(!1,b&&f?b.enableContentOwnerRelatedVideos:a.co_rel);this.G=Kq()&&0<BD&&4.4>=BD?"_top":"_blank";this.Qb=g.HD(this);this.Ze=T("blazer"===
this.playerStyle,b?b.enableCsiLogging:a.enablecsi);switch(this.playerStyle){case "blogger":r="bl";break;case "gmail":r="gm";break;case "books":r="gb";break;case "docs":r="gd";break;case "duo":r="gu";break;case "google-live":r="gl";break;case "google-one":r="go";break;case "play":r="gp";break;case "chat":r="hc";break;case "hangouts-meet":r="hm";break;case "photos-edu":case "picasaweb":r="pw";break;default:r="yt"}this.ma=r;this.V=pD("",b&&f?b.authorizedUserIndex:a.authuser);var t;b?void 0!==b.disableWatchLater&&
(t=!b.disableWatchLater):t=a.showwatchlater;this.dj=(this.l&&!this.ra||!!this.V)&&T(!this.J,this.u?t:void 0);this.Qc=b?!!b.disableKeyboardControls:T(!1,a.disablekb);this.loop=T(!1,a.loop);this.pageId=pD("",!this.Z("wpcc_pageid_killswitch")&&b?b.initialDelegatedSessionId:a.pageid);this.xk=T(!0,a.canplaylive);this.hk=T(!1,a.livemonitor);this.disableSharing=T(this.C,b?b.disableSharing:a.ss);(t=b&&this.Z("fill_video_container_size_override_from_wpcc")?b.videoContainerOverride:a.video_container_override)?
(r=t.split("x"),2!==r.length?t=null:(t=Number(r[0]),r=Number(r[1]),t=isNaN(t)||isNaN(r)||0>=t*r?null:new g.je(t,r))):t=null;this.bj=t;this.mute=b?!!b.startMuted:T(!1,a.mute);this.cf=!this.mute&&T("0"!==this.controlsType,a.store_user_volume);t=b?b.annotationsLoadPolicy:a.iv_load_policy;this.annotationsLoadPolicy="3"===this.controlsType?3:nD(void 0,t,KD);this.captionsLanguagePreference=b?b.captionsLanguagePreference||"":pD("",a.cc_lang_pref);t=nD(2,b&&f?b.captionsLanguageLoadPolicy:a.cc_load_policy,
KD);"3"===this.controlsType&&2===t&&(t=3);this.Da=t;this.xc=b?b.hl||"en_US":pD("en_US",a.hl);this.region=b?b.contentRegion||"US":pD("US",a.cr);this.hostLanguage=b?b.hostLanguage||"en":pD("en",a.host_language);this.gj=!this.ra&&Math.random()<g.S(this.experiments,"web_player_api_logging_fraction");this.Ea=!this.ra;this.enabledEngageTypes=new Set;this.deviceHasDisplay=b?!b.deviceIsAudioOnly:T(!0,a.deviceHasDisplay);this.Ec=oD(this.Ec,a.ismb);t=a;g.AC(this.experiments,"html5_qoe_intercept")?t=g.AC(this.experiments,
"html5_qoe_intercept"):this.nj?(t=t.vss_host||"s.youtube.com",this.Z("www_for_videostats")&&"s.youtube.com"===t&&(t=LD(this.xa)||"www.youtube.com")):t="video.google.com";this.cj=t;MD(this,a,!0);this.L=new TC;g.G(this,this.L);t=b?b.innertubeApiKey:pD("",a.innertube_api_key);r=b?b.innertubeApiVersion:pD("",a.innertube_api_version);p=b?b.innertubeContextClientVersion:pD("",a.innertube_context_client_version);this.Ae={innertubeApiKey:No("INNERTUBE_API_KEY")||t,innertubeApiVersion:No("INNERTUBE_API_VERSION")||
r,pG:g.M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),qG:this.deviceParams.c,innertubeContextClientVersion:No("INNERTUBE_CONTEXT_CLIENT_VERSION")||p,sG:this.hostLanguage,rG:this.region,tG:No("INNERTUBE_HOST_OVERRIDE")||"",vG:!!g.M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),uG:!!g.M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1)};this.Oh=null!=window.WebKitPlaybackTargetAvailabilityEvent;this.B=new PC(this.experiments,this.Z("html5_force_hfr_support")?!0:ND(this)||Bq()||Cq()||OD(this),g.pB&&g.be(56)||
g.JC&&g.be(54)||OD(this));t=this.Ec;r=this.experiments;p=new Fha;g.PD(this)&&(p.i=!0,p.B=.1);g.R(r,"html5_pctile_bandwidth_estimator")&&(p.i=!1);t&&(p.u=t/8);this.schedule=new Eha(p);this.enableSafetyMode=null!==(d=null===b||void 0===b?void 0:b.initialEnableSafetyMode)&&void 0!==d?d:T(!1,a.enable_safety_mode);t=this.Y?!1:zD(this)&&"blazer"!==this.playerStyle;var u;b&&f?null!=b.disableAutonav&&(u=!b.disableAutonav):u=a.allow_autonav;this.ub=T(t,!this.J&&u);this.sendVisitorIdHeader=b?!!b.sendVisitorIdHeader:
T(!1,a.send_visitor_id_header);this.Ta=(0,g.N)();var x;"docs"===this.playerStyle&&(b&&f?x=b.disableNativeContextMenu:x=a.disable_native_context_menu);this.disableNativeContextMenu=T(!1,x);this.jj=ND(this)&&this.Z("enable_skip_intro_button");this.embedConfig=pD("",b&&f?b.serializedEmbedConfig:a.embed_config);this.le=T(!1,a.full_window);this.Ya=!g.FD(this)&&!QD(this)&&!g.ID(this)&&!JD(this)&&!0;this.livingRoomAppMode=nD("LIVING_ROOM_APP_MODE_UNSPECIFIED",b?null===(e=b.device)||void 0===e?void 0:e.livingRoomAppMode:
a.living_room_app_mode,RD);this.transparentBackground=b?!!b.transparentBackground:T(!1,a.transparent_background);this.useFastSizingOnWatchDefault=T(!0,b?b.useFastSizingOnWatchDefault:a.use_fast_sizing_on_watch_default);this.showMiniplayerButton=b?!!b.showMiniplayerButton:T(!1,a.show_miniplayer_button);this.externalFullscreen=b?!!b.externalFullscreen:T(!1,a.external_fullscreen);this.showMiniplayerUiWhenMinimized=b?!!b.showMiniplayerUiWhenMinimized:T(!1,a.use_miniplayer_ui);this.showInlinePreviewUi=
b?!!b.showInlinePreviewUi:!1;this.showBackButton=T(!1,a.showbackbutton);this.uj=1E-4>Math.random();this.Ye=a.onesie_hot_config||(null===b||void 0===b?0:b.onesieHotConfig)?new Cha(a.onesie_hot_config,null===b||void 0===b?void 0:b.onesieHotConfig):void 0;this.isTectonic=b&&!this.Z("fill_is_tectonic_from_wpcc_killswitch")?!!b.isTectonic:!!a.isTectonic;this.vk=c;this.Jb=new jD;g.G(this,this.Jb);this.Jf=T(!1,a.force_gvi);Bs=this.datasyncId=(null===b||void 0===b?void 0:b.datasyncId)||g.M("DATASYNC_ID",
void 0);this.ej=(null===b||void 0===b?void 0:b.allowWoffleManagement)||!1;this.Df=0};
MD=function(a,b,c){c=void 0===c?!1:c;a.Bb=pD(a.Bb,b.video_id);a.zb=pD(a.zb,b.eventid);for(var d=[],e=g.q(Object.keys(TD)),f=e.next();!f.done;f=e.next()){f=TD[f.value];var h=b[f];null!=h&&(h!==a.deviceParams[f]&&d.push(f),a.deviceParams[f]=h)}!c&&0<d.length&&a.uj&&(d.sort(),g.Tu(new g.Cs("Player client parameters changed after startup",d)));a.userAge=oD(a.userAge,b.user_age);a.userDisplayImage=pD(a.userDisplayImage,b.user_display_image);g.Rv(a.userDisplayImage)||(a.userDisplayImage="");a.userDisplayName=
pD(a.userDisplayName,b.user_display_name);a.zc=pD(a.zc,b.user_gender);a.csiPageType=pD(a.csiPageType,b.csi_page_type);a.csiServiceName=pD(a.csiServiceName,b.csi_service_name);a.Ze=T(a.Ze,b.enablecsi);a.pageId=pD(a.pageId,b.pageid);if(b=b.enabled_engage_types)a.enabledEngageTypes=new Set(b.split(","))};
UD=function(a,b){return!a.C&&xq()&&Pn(55)&&"3"===a.controlsType&&!b};
g.VD=function(a){a=LD(a.xa);return"www.youtube-nocookie.com"===a?"www.youtube.com":a};
g.WD=function(a){return g.ID(a)?"music.youtube.com":g.VD(a)};
XD=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
YD=function(a){return zD(a)&&!g.FD(a)};
CD=function(a){return ED&&!a.ih||wq("nintendo wiiu")||wq("nintendo 3ds")?!0:!1};
JD=function(a){return"area120-boutique"===a.playerStyle};
g.ID=function(a){return"music-embed"===a.playerStyle};
g.PD=function(a){return/^TVHTML5/.test(a.deviceParams.c)?!0:"TV"===a.deviceParams.cplatform};
ZD=function(a){return"TVHTML5"===a.deviceParams.c&&a.deviceParams.cver.startsWith("7")};
sD=function(a){return"TVHTML5_SIMPLY_EMBEDDED_PLAYER"===a.deviceParams.c};
OD=function(a){return"CHROMECAST ULTRA/STEAK"===a.deviceParams.cmodel||"CHROMECAST/STEAK"===a.deviceParams.cmodel};
g.$D=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
ND=function(a){return"web"===a.deviceParams.c.toLowerCase().substr(0,3)};
g.aE=function(a){return"WEB"===a.deviceParams.c.toUpperCase()};
QD=function(a){return"WEB_KIDS"===a.deviceParams.c};
g.FD=function(a){return"WEB_UNPLUGGED"===a.deviceParams.c};
bE=function(a){return"TV_UNPLUGGED_CAST"===a.deviceParams.c};
cE=function(a){return"TVHTML5_UNPLUGGED"===a.deviceParams.c};
g.dE=function(a){return g.FD(a)||bE(a)||cE(a)};
g.GD=function(a){return"WEB_REMIX"===a.deviceParams.c};
g.eE=function(a){return"WEB_EMBEDDED_PLAYER"===a.deviceParams.c};
fE=function(a){return"WEB_MUSIC_EMBEDDED_PLAYER"===a.deviceParams.c};
g.gE=function(a){return g.aE(a)&&a.Z("web_player_i_see_captions")};
g.iE=function(a){return(a.deviceHasDisplay&&g.pB&&!Hq&&"3"!==a.controlsType?g.Jq?a.l&&g.be(51):!0:!1)||(a.deviceHasDisplay&&g.JC&&!Hq&&"3"!==a.controlsType?g.Jq?a.l&&g.be(48):g.be(38):!1)||(a.deviceHasDisplay&&g.og&&!Hq&&"3"!==a.controlsType?g.Jq?a.l&&g.be(37):g.be(27):!1)||a.deviceHasDisplay&&g.hE&&!Gq()&&g.be(11)||a.deviceHasDisplay&&g.Is&&g.be("604.4")};
Nha=function(a){if(g.DD(a)&&AD)return!1;if(g.JC){if(!g.be(47)||!g.be(52)&&g.be(51))return!1}else if(g.Is)return!1;return window.AudioContext||window.webkitAudioContext?!0:!1};
zD=function(a){return"detailpage"===a.ya};
g.DD=function(a){return"embedded"===a.ya};
jE=function(a){return"leanback"===a.ya};
yD=function(a){return"adunit"===a.ya||"gvn"===a.playerStyle};
g.HD=function(a){return"profilepage"===a.ya};
g.xD=function(a){return a.l&&g.DD(a)&&!yD(a)&&!a.C};
kE=function(a){if(!a.userDisplayImage)return"";var b=a.userDisplayImage.split("/");if(5===b.length)return a=b[b.length-1].split("="),a[1]="s20-c",b[b.length-1]=a.join("="),b.join("/");if(8===b.length)return b.splice(7,0,"s20-c"),b.join("/");if(9===b.length)return b[7]+="-s20-c",b.join("/");g.Tu(new g.Cs("Profile image not a FIFE URL.",a.userDisplayImage));return a.userDisplayImage};
g.lE=function(a){var b=g.WD(a);!a.Z("yt_embeds_disable_new_error_lozenge_url")&&Oha.includes(b)&&(b="www.youtube.com");return a.protocol+"://"+b};
LD=function(a){var b=g.Bd(a);return(a=Number(g.Ad(4,a))||null)?b+":"+a:b};
mE=function(a){this.i=a};
nE=function(a,b,c){if(c)return Dp();var d={};c=mB();b=g.q(b);for(var e=b.next();!e.done;e=b.next())if(e=e.value,a.canPlayType(c,e.Ne().mimeType)){var f=e.i.bb().quality;if(!d[f]||d[f].Ne().re())d[f]=e}var h=[];d.auto&&h.push(d.auto);g.zb(bB,function(l){(l=d[l])&&h.push(l)});
return h.length?Ep(h):Dp()};
oE=function(a,b,c){this.u=a;this.l=b;this.cpn=c;this.B=0;this.i=""};
pE=function(a,b,c){a.cpn&&(b=g.Od(b,{cpn:a.cpn}));c&&(b=g.Od(b,{O5:c}));return b};
qE=function(a,b){a=a.itag.toString();null!==b&&(a+=b.itag.toString());return a};
Pha=function(a){for(var b=[],c=[],d=g.q(a.l),e=d.next();!e.done;e=d.next())e=e.value,e.bitrate<=a.B?b.push(e):c.push(e);b.sort(function(f,h){return h.bitrate-f.bitrate});
c.sort(function(f,h){return f.bitrate-h.bitrate});
a.l=b.concat(c)};
Qha=function(a,b,c,d,e,f,h,l,m,n,p,r){this.itag=a;this.url=b;this.codecs=c;this.width=d;this.height=e;this.fps=f;this.bitrate=h;this.Jc=void 0===p?null:p;this.audioChannels=r;this.u=(null===l||void 0===l?void 0:l.split(","))||[];this.l=m||null;this.Bd=n||"";this.i=""};
rE=function(a,b,c,d){b=void 0===b?!1:b;c=void 0===c?!0:c;d=void 0===d?[]:d;var e={};a=g.q(a);for(var f=a.next();!f.done;f=a.next()){f=f.value;if(b&&MediaSource&&MediaSource.isTypeSupported){var h=f.type;f.audio_channels&&(h=h+"; channels="+f.audio_channels);if(!MediaSource.isTypeSupported(h)){d.push(f.itag);d.push("tpus");continue}}if(c||!f.drm_families||"smpte2084"!==f.eotf&&"arib-std-b67"!==f.eotf){h={bt709:"SDR",bt2020:"SDR",smpte2084:"PQ","arib-std-b67":"HLG"};var l=f.type.match(/codecs="([^"]*)"/);
l=l?l[1]:"";var m=null;f.audio_track_id&&(m=new lB(f.name,f.audio_track_id,!!f.is_default));var n=f.eotf;f=new Qha(f.itag,f.url,l,+f.width,+f.height,+f.fps,+f.bitrate,f.audio_itag,n?h[n]:void 0,f.drm_families,m,+f.audio_channels);e[f.itag]=e[f.itag]||[];e[f.itag].push(f)}else d.push(f.itag),d.push("enchdr")}return e};
sE=function(a,b,c){this.i=a;this.u=b;this.expiration=c;this.l=null};
Rha=function(a,b){if(!(Hq||Eq()||Aq()))return null;a=rE(b,g.R(a.experiments,"html5_filter_fmp4_in_hls"));if(!a)return null;b=[];for(var c={},d=g.q(Object.keys(a)),e=d.next();!e.done;e=d.next()){e=g.q(a[e.value]);for(var f=e.next();!f.done;f=e.next()){var h=f.value;h.Jc&&(f=h.Jc.getId(),c[f]||(h=new hx(f,h.Jc),c[f]=h,b.push(h)))}}return 0<b.length?b:null};
Vha=function(a,b,c,d,e,f){if(!(Hq||Eq()||Aq()))return Dp();var h=[],l=Sha(c);c=rE(c,g.R(a.experiments,"html5_filter_fmp4_in_hls"),a.B.B,h);if(!c)return f("noplst"),Dp();Tha(c);var m={},n=(m.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",m),p;m=[];for(var r=[],t=[],u=null,x="",y=g.q(Object.keys(c)),B=y.next();!B.done;B=y.next())if(B=B.value,!g.R(a.experiments,"html5_disable_drm_hfr_1080")||"383"!==B&&"373"!==B){B=g.q(c[B]);for(var H=B.next();!H.done;H=B.next())if(H=H.value,H.width){for(var E=
g.q(H.u),I=E.next();!I.done;I=E.next())if(I=I.value,c[I]){H.i=I;break}H.i||(H.i=Uha(c,H));if(E=c[H.i])if(m.push(H),"fairplay"===H.Bd&&(p=n),I="","PQ"===H.l?I="smpte2084":"HLG"===H.l&&(I="arib-std-b67"),I&&(x=I),t.push(tE(E,[H],e,H.itag,H.width,H.height,H.fps,l,void 0,void 0,p,I)),!u||H.width*H.height*H.fps>u.width*u.height*u.fps)u=H}else r.push(H)}else h.push(B),h.push("disdrmhfr");t.reduce(function(Q,ha){return ha.Ne().isEncrypted()&&Q},!0)&&(p=n);
c=u||{};t.push(tE(r,m,e,"93",void 0===c.width?0:c.width,void 0===c.height?0:c.height,void 0===c.fps?0:c.fps,l,"auto",Math.max(d,0),p,x));h.length&&f(h.join("."));return nE(a.B,t,UD(a,b))};
tE=function(a,b,c,d,e,f,h,l,m,n,p,r){for(var t=0,u="",x=g.q(a),y=x.next();!y.done;y=x.next())y=y.value,u||(u=y.itag),y.audioChannels&&y.audioChannels>t&&(t=y.audioChannels,u=y.itag);d=new eB(d,"application/x-mpegURL",{audio:new ZA(0,t,null,u),video:new aB(e,f,h,null,void 0,m,void 0,r),Bd:p});a=new oE(a,b,c);a.B=n?n:1369843;return new sE(d,a,l)};
Sha=function(a){a=g.q(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.url&&(b=b.url.split("expire/"),!(1>=b.length)))return+b[1].split("/")[0];return NaN};
Uha=function(a,b){for(var c=g.q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d][0];if(!e.width&&e.Bd===b.Bd&&!e.audioChannels)return d}return""};
Tha=function(a){for(var b=new Set,c=g.q(Object.values(a)),d=c.next();!d.done;d=c.next())d=d.value,d.length&&(d=d[0],d.height&&d.codecs.startsWith("vp09")&&b.add(d.height));c=[];if(b.size){d=g.q(Object.keys(a));for(var e=d.next();!e.done;e=d.next())if(e=e.value,a[e].length){var f=a[e][0];f.height&&b.has(f.height)&&!f.codecs.startsWith("vp09")&&c.push(e)}}b=g.q(c);for(e=b.next();!e.done;e=b.next())delete a[e.value]};
uE=function(a,b){this.i=a;this.l=b};
Wha=function(a,b,c,d){var e=[];c=g.q(c);for(var f=c.next();!f.done;f=c.next()){var h=f.value;if(h.url){f=new wy(h.url,!0);if(h.s){var l=h.sp,m=vy(decodeURIComponent(h.s));f.set(l,encodeURIComponent(m))}l=g.q(Object.keys(d));for(m=l.next();!m.done;m=l.next())m=m.value,f.set(m,d[m]);h=kB(h.type,h.quality,h.itag,h.width,h.height);e.push(new uE(h,f))}}return nE(a.B,e,UD(a,b))};
vE=function(a,b){this.i=a;this.l=b};
Xha=function(a){var b=[];g.zb(a,function(c){if(c&&c.url){var d=kB(c.type,"medium","0");b.push(new vE(d,c.url))}});
return b};
Yha=function(a,b,c){c=Xha(c);return nE(a.B,c,UD(a,b))};
wE=function(a){var b=a.indexOf(":");return-1===b?{Rw:a}:{Rw:a.substring(0,b),datasyncId:a.substring(b+1)}};
xE=function(){};
yE=function(){};
zE=function(a){if(a.includes(":"))throw Error("Invalid user cache name: "+a);return a+":"+zs()};
CE=function(){return g.D(this,function b(){var c=this,d;return g.z(b,function(e){d=c;if(void 0!==AE)return e.return(AE);AE=new Promise(function(f){return g.D(d,function l(){var m;return g.z(l,function(n){switch(n.i){case 1:return ta(n,2),g.w(n,BE.open("test-only"),4);case 4:return g.w(n,BE.delete("test-only"),5);case 5:ua(n,3);break;case 2:if(m=va(n),m instanceof Error&&"SecurityError"===m.name)return f(!1),n.return();case 3:f("caches"in window),g.sa(n)}})})});
return e.return(AE)})})};
EE=function(){return g.D(this,function b(){return g.z(b,function(c){if(1==c.i)return g.w(c,CE(),2);if(!c.l)return c.return(void 0);DE||(DE=new yE);return c.return(DE)})})};
Zha=function(){var a=[],b=["yt-player-local-img"];return g.D(this,function d(){var e,f,h,l,m,n,p,r;return g.z(d,function(t){if(1==t.i)return g.w(t,CE(),2);if(3!=t.i){if(!t.l)return t.return(!1);e=[];return g.w(t,BE.keys(),3)}f=t.l;h=g.q(f);for(l=h.next();!l.done;l=h.next())m=l.value,n=wE(m),p=n.Rw,r=n.datasyncId,!r||a.includes(r)||b&&!b.includes(p)||e.push(BE.delete(m));return t.return(Promise.all(e).then(function(u){return u.some(function(x){return x})}))})})};
$ha=function(){return g.D(this,function b(){var c;return g.z(b,function(d){return 1==d.i?g.w(d,EE(),2):(c=d.l)?d.return(c.delete("yt-player-local-img")):d.return(!0)})})};
FE=function(){return g.D(this,function b(){return g.z(b,function(c){return g.w(c,Zha(),0)})})};
aia=function(a){return g.D(this,function c(){var d,e;return g.z(c,function(f){if(1==f.i)return g.w(f,EE(),2);if(3!=f.i){d=f.l;if(!d)throw Error("Cache API not supported");return a.length?g.w(f,d.open("yt-player-local-img"),3):f.return()}e=f.l;return g.w(f,Promise.all(a.map(function(h){return e.delete(h)})),0)})})};
bia=function(a){return g.D(this,function c(){var d,e;return g.z(c,function(f){if(1==f.i)return g.w(f,EE(),2);if(3!=f.i){d=f.l;if(!d)throw Error("Cache API not supported");return a.length?g.w(f,d.open("yt-player-local-img"),3):f.return()}e=f.l;return g.w(f,e.addAll(a),0)})})};
HE=function(){void 0===GE&&(GE=g.qo());return GE};
IE=function(){var a=HE();if(!a)return{};try{var b=a.get("yt-player-lv");return JSON.parse(b||"{}")}catch(c){return{}}};
JE=function(a){var b=HE();b&&(a=JSON.stringify(a),b.set("yt-player-lv",a))};
KE=function(a){return IE()[a]||0};
cia=function(){var a=IE();return Object.keys(a).filter(function(b){return 2===a[b]})};
LE=function(a,b){var c=IE();b!==c[a]&&(0!==b?c[a]=b:delete c[a],JE(c))};
dia=function(a){var b=IE();b=Object.assign({},b);a=Object.assign({},a);for(var c in b)a[c]?(4!==b[c]&&(b[c]=a[c]),delete a[c]):3!==b[c]&&2!==b[c]&&(b[c]=4);Object.assign(b,a);JE(b);JSON.stringify(b);return b};
eia=function(){var a=HE();if(!a)return!1;try{return null!==a.get("yt-player-lv-id")}catch(b){return!1}};
PE=function(){return g.D(this,function b(){var c,d,e;return g.z(b,function(f){switch(f.i){case 1:c=HE();if(!c)return f.return(Promise.reject("No LocalStorage"));if(ME){f.sb(2);break}d=zs();e=c.get("yt-player-lv-id");if(!e){c.set("yt-player-lv-id",d);f.sb(3);break}if(e===d){f.sb(3);break}return g.w(f,NE(),5);case 5:return g.w(f,FE(),6);case 6:c.set("yt-player-lv-id",d);case 3:ME=!0;case 2:return f.return(OE().open())}})})};
eF=function(a,b){return g.D(this,function d(){var e;return g.z(d,function(f){if(1==f.i)return g.w(f,PE(),2);e=f.l;return f.return(Ws(e,["index","media","metadata","playerdata","captions"],"readwrite",function(h){var l=IDBKeyRange.bound(a+"|",a+"~");l=[Ys(h,"index").delete(l),Ys(h,"media").delete(l),Ys(h,"playerdata").delete(l),Ys(h,"captions").delete(l)];b&&l.push(Ys(h,"metadata").delete(a));return vt.all(l).then(function(){})}))})})};
gia=function(){return g.D(this,function b(){var c;return g.z(b,function(d){if(1==d.i)return g.w(d,PE(),2);c=d.l;return d.return(Ws(c,["index","media"],"readwrite",function(e){var f={};return bt(Ys(e,"index"),{},function(h){var l,m=h.getKey().match(/^([\w\-_]+)\|(a|v)$/),n=vt.resolve(void 0);if(m){var p=m[1];m=m[2];f[p]=f[p]||{};f[p][m]=fF(null===(l=h.getValue())||void 0===l?void 0:l.fmts)}else n=h.delete().then(function(){});
return vt.all([h.continue(),n]).then(function(r){return g.q(r).next().value})}).then(function(){for(var h={},l=g.q(Object.keys(f)),m=l.next();!m.done;m=l.next()){m=m.value;
var n=f[m].v;h[m]=f[m].a&&n?1:2}var p=dia(h);return gfa(Ys(e,"media"),function(r){var t=r.getKey().match(fia);t&&h[t[1]]||Ys(e,"media").delete(r.getKey());return r.continue()}).then(function(){return p})})}))})})};
hF=function(a,b,c,d,e,f){return g.D(this,function l(){var m,n,p,r,t;return g.z(l,function(u){switch(u.i){case 1:m=KE(a);if(4===m)return u.return(Promise.resolve(4));n=c.lastModified||"0";return g.w(u,PE(),2);case 2:return p=u.l,ta(u,3),g.w(u,Ws(p,["index","media"],"readwrite",function(x){if(void 0!==e&&void 0!==f){var y=""+a+"|"+b.id+"|"+n+"|"+String(e).padStart(10,"0");y=Xs(Ys(x,"media"),f,y)}else y=vt.resolve(void 0);var B=gF(a,b.isVideo()),H=gF(a,!b.isVideo()),E={fmts:d,format:c||{}};B=Xs(Ys(x,
"index"),E,B);var I=fF(d);x=I?Ys(x,"index").get(H):vt.resolve(void 0);return vt.all([x,y,B]).then(function(Q){Q=g.q(Q).next().value;var ha=KE(a);4!==ha&&I&&void 0!==Q&&fF(Q.fmts)&&(ha=1,LE(a,ha));return ha})}),5);
case 5:return u.return(u.l);case 3:r=va(u);t=KE(a);if(4===t)return u.return(t);LE(a,4);throw r;}})})};
hia=function(a){return g.D(this,function c(){var d;return g.z(c,function(e){if(1==e.i)return g.w(e,PE(),2);d=e.l;return e.return(Ws(d,["index"],"readonly",function(f){var h=IDBKeyRange.bound(a+"|",a+"~");return Ys(f,"index").getAll(h).then(function(l){return l.map(function(m){return m?m.format:{}})})}))})})};
iia=function(a,b,c,d){return g.D(this,function f(){var h;return g.z(f,function(l){if(1==l.i)return g.w(l,PE(),2);h=l.l;return l.return(Ws(h,["media"],"readonly",function(m){var n=""+a+"|"+b+"|"+c+"|"+String(d).padStart(10,"0");return Ys(m,"media").get(n)}))})})};
jia=function(a){return g.D(this,function c(){return g.z(c,function(d){LE(a,0);return d.return(eF(a,!0))})})};
NE=function(){return g.D(this,function b(){var c;return g.z(b,function(d){if(1==d.i){c=HE();if(!c)return d.return(Promise.reject("No LocalStorage"));c.remove("yt-player-lv-id");var e=HE();e&&e.remove("yt-player-lv");return g.w(d,OE().delete(),2)}return 3!=d.i?g.w(d,rfa(),3):g.w(d,rt("yt-player-local-media"),0)})})};
fF=function(a){return!!a&&-1===a.indexOf("dlt")};
gF=function(a,b){return""+a+"|"+(b?"v":"a")};
kia=function(a){if(a=a.commonConfig)this.url=a.url,this.urlQueryOverride=a.urlQueryOverride,a.ustreamerConfig&&(this.ustreamerConfig=UC(a.ustreamerConfig))};
g.iF=function(a){a=void 0===a?{}:a;this.languageCode=a.languageCode||"";this.languageName=a.languageName||null;this.kind=a.kind||"";this.name=a.name||null;this.id=a.id||null;this.i=a.is_servable||!1;this.isTranslateable=a.is_translateable||!1;this.url=a.url||null;this.vssId=a.vss_id||"";this.isDefault=a.is_default||!1;this.translationLanguage=a.translationLanguage||null};
g.jF=function(a){var b=a.languageName||"",c=[b];"asr"===a.kind&&-1===b.indexOf("(")&&c.push(" (Automatic Captions)");a.name&&c.push(" - "+a.name);a.translationLanguage&&c.push(" >> "+a.translationLanguage.languageName);return c.join("")};
nF=function(a,b,c,d){a||(a=b&&kF.hasOwnProperty(b)&&lF.hasOwnProperty(b)?lF[b]+"_"+kF[b]:void 0);b=a;if(!b)return null;a=b.match(mF);if(!a||5!==a.length)return null;if(a=b.match(mF)){var e=Number(a[3]),f=[7,8,10,5,6];a=!(1===Number(a[1])&&8===e)&&0<=f.indexOf(e)}else a=!1;return c||d||a?b:null};
pF=function(a){for(var b={},c=g.q(Object.keys(oF)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[oF[d]];e&&(b[d]=e)}return b};
qF=function(a,b){for(var c={},d=g.q(Object.keys(oF)),e=d.next();!e.done;e=d.next()){e=e.value;var f=b?b+e:e;f=a[f+"_webp"]||a[f];g.Rv(f)&&(c[oF[e]]=f)}return c};
tF=function(a){var b={};if(!a||!a.thumbnails)return b;a=a.thumbnails.filter(function(l){return!!l.url});
a.sort(function(l,m){return l.width-m.width||l.height-m.height});
for(var c=g.q(Object.keys(rF)),d=c.next();!d.done;d=c.next()){var e=Number(d.value);d=rF[e];for(var f=g.q(a),h=f.next();!h.done;h=f.next())if(h=h.value,h.width>=e){e=sF(h.url);g.Rv(e)&&(b[d]=e);break}}(a=a.pop())&&1280<=a.width&&(a=sF(a.url),g.Rv(a)&&(b["maxresdefault.jpg"]=a));return b};
sF=function(a){return a.startsWith("//")?"https:"+a:a};
uF=function(a){if(a=a.colorInfo)if(a=a.transferCharacteristics)return lia[a];return null};
vF=function(a){return a&&a.baseUrl||""};
wF=function(a){a=g.cp(a);for(var b=g.q(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=a[c];a[c]=Array.isArray(d)?d[0]:d}return a};
xF=function(a,b){a.botguardData=b.playerAttestationRenderer.botguardData;b=b.playerAttestationRenderer.challenge;null!=b&&(a.ra=b)};
mia=function(a,b){a.captionTracks=[];if(b.captionTracks)for(var c=g.q(b.captionTracks),d=c.next();!d.done;d=c.next()){d=d.value;var e=yF(d.baseUrl);if(!e)return;d=new g.iF({is_translateable:!!d.isTranslatable,languageCode:d.languageCode,languageName:d.name&&g.gw(d.name),url:e,vss_id:d.vssId,kind:d.kind});a.captionTracks.push(d)}a.Sy=b.audioTracks||[];a.CE=b.defaultAudioTrackIndex||0;a.FF=b.translationLanguages?g.Pc(b.translationLanguages,function(f){return{languageCode:f.languageCode,languageName:g.gw(f.languageName)}}):
[];
a.yk=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
nia=function(a,b){b=g.q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=c.interstitials.map(function(h){var l=h.unserializedPlayerResponse;if(l)return{is_yto_interstitial:!0,raw_player_response:l};if(h=h.playerVars)return Object.assign({is_yto_interstitial:!0},ap(h))});
d=g.q(d);for(var e=d.next();!e.done;e=d.next())switch(e=e.value,c.podConfig.playbackPlacement){case "INTERSTITIAL_PLAYBACK_PLACEMENT_PRE":a.interstitials=a.interstitials.concat({time:0,playerVars:e,Zi:5});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_POST":a.interstitials=a.interstitials.concat({time:0x7ffffffffffff,playerVars:e,Zi:6});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_INSERT_AT_VIDEO_TIME":var f=Number(c.podConfig.timeToInsertAtMillis);a.interstitials=a.interstitials.concat({time:f,playerVars:e,
Zi:0===f?5:7})}}};
oia=function(a,b){if(b=b.find(function(c){return!(!c||!c.tooltipRenderer)}))a.tooltipRenderer=b.tooltipRenderer};
zF=function(a,b){b.subscribeCommand&&(a.subscribeCommand=b.subscribeCommand);b.unsubscribeCommand&&(a.unsubscribeCommand=b.unsubscribeCommand);b.addToWatchLaterCommand&&(a.addToWatchLaterCommand=b.addToWatchLaterCommand);b.removeFromWatchLaterCommand&&(a.removeFromWatchLaterCommand=b.removeFromWatchLaterCommand);b.getSharePanelCommand&&(a.getSharePanelCommand=b.getSharePanelCommand)};
BF=function(a){var b=a.indexRange,c=a.initRange;b={itag:a.itag,url:a.url,index:b?b.start+"-"+b.end:"0-0",bitrate:a.bitrate,init:c?c.start+"-"+c.end:"0-0",type:a.mimeType,clen:a.contentLength,lmt:a.lastModified,xtags:a.xtags};if(c=a.audioTrack){var d=c.displayName;d&&(b.name=d,b.audio_track_id=c.id,c.audioIsDefault&&(b.isDefault="1"))}if(c=a.captionTrack)b.caption_display_name=c.displayName,b.caption_vss_id=c.vssId,b.caption_language_code=c.languageCode,b.caption_kind=c.kind;(c=a.cipher||a.signatureCipher)?
(c=ap(c),b.sp=c.sp,b.s=c.s,b.url=c.url):b.url=a.url;c=a.width;d=a.height;null!=c&&null!=d&&(b.size=c+"x"+d);(c=a.fps)&&(b.fps=c);(c=a.type)&&(b.stream_type=pia[c]);(c=a.projectionType)&&(b.projection_type=qia[c]);(c=a.stereoLayout)&&(b.stereo_layout=ria[c]);(c=a.spatialAudioType)&&(b.spatial_audio_type=sia[c]);if(d=a.drmFamilies){c=[];d=g.q(d);for(var e=d.next();!e.done;e=d.next())c.push(AF[e.value]);b.drm_families=c.join(",")}(c=a.qualityLabel)&&(b.quality_label=c);(c=a.targetDurationSec)&&(b.target_duration_sec=
c);(c=a.maxDvrDurationSec)&&(b.max_dvr_duration_sec=c);(c=a.audioSampleRate)&&(b.audio_sample_rate=c);(c=a.audioChannels)&&(b.audio_channels=c);(c=uF(a))&&(b.eotf=c);(a=a.colorInfo)&&(a=a.primaries)&&(a=tia[a])&&(b.primaries=a);return g.Md(b)};
CF=function(a){g.O.call(this);this.i=null;this.u=new uo;this.i=null;this.J=new Set;this.C=a||""};
FF=function(a,b,c){for(c=DF(a,c);0<=c;){var d=a.levels[c];if(d.ld(Math.floor(b/(d.columns*d.rows)))&&(d=g.EF(d,b)))return d;c--}return g.EF(a.levels[0],b)};
HF=function(a,b,c){c=DF(a,c);for(var d,e;0<=c;c--)if(d=a.levels[c],e=Math.floor(b/(d.columns*d.rows)),!d.ld(e)){d=a;var f=c,h=f+"-"+e;d.J.has(h)||(d.J.add(h),to(d.u,f,{OG:f,ZG:e}))}GF(a)};
GF=function(a){if(!a.i&&!a.u.isEmpty()){var b=a.u.remove();a.i=uia(a,b)}};
uia=function(a,b){var c=document.createElement("img");a.C&&(c.crossOrigin=a.C);c.src=IF(a.levels[b.OG],b.ZG);c.onload=function(){var d=b.OG,e=b.ZG;null!==a.i&&(a.i.onload=null,a.i=null);d=a.levels[d];d.loaded.add(e);GF(a);var f=d.columns*d.rows;e*=f;d=Math.min(e+f-1,d.gA()-1);e=[e,d];a.W("l",e[0],e[1])};
return c};
g.JF=function(a,b,c,d){this.level=a;this.C=b;this.loaded=new Set;this.level=a;this.C=b;a=c.split("#");this.width=Math.floor(Number(a[0]));this.height=Math.floor(Number(a[1]));this.u=Math.floor(Number(a[2]));this.columns=Math.floor(Number(a[3]));this.rows=Math.floor(Number(a[4]));this.i=Math.floor(Number(a[5]));this.B=a[6];this.signature=a[7];this.videoLength=d};
IF=function(a,b){var c=a.C;c=c.replace("$N",a.B);c=c.replace("$L",a.level.toString());c=c.replace("$M",b.toString());a.signature&&(c=g.Od(c,{sigh:a.signature}));return Vv(c)};
g.EF=function(a,b){b>=a.oy()&&a.lr();var c=Math.floor(b/(a.columns*a.rows)),d=a.columns*a.rows,e=b%d;b=e%a.columns;e=Math.floor(e/a.columns);var f=a.lr()+1-d*c;if(f<a.columns){var h=f;d=1}else h=a.columns,d=f<d?Math.ceil(f/a.columns):a.rows;return{url:IF(a,c),column:b,columns:h,row:e,rows:d,Cw:a.width*h,Bw:a.height*d}};
KF=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;CF.call(this,c);this.isLive=d;this.L=!!e;this.levels=this.l(a,b);this.B=new Map;1<this.levels.length&&this.levels[0].isDefault()&&this.levels.splice(0,1)};
LF=function(a,b,c){return(a=a.levels[b])?a.uu(c):-1};
DF=function(a,b){var c=a.B.get(b);if(c)return c;c=a.levels.length;for(var d=0;d<c;d++)if(a.levels[d].width>=b)return a.B.set(b,d),d;a.B.set(b,c-1);return c-1};
MF=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");g.JF.call(this,a,b,c,0);this.l=null;this.G=d?3:0};
NF=function(a,b,c,d){KF.call(this,a,0,void 0,b,!(void 0===d||!d));for(a=0;a<this.levels.length;a++)this.levels[a].lD(c)};
via=function(a,b,c){b={cpn:b};-1===a.indexOf("/ibw/")&&(b.ibw=c?String(c):"1369843");return{url:g.Od(a,b),type:"application/x-mpegURL",quality:"auto",itag:"93"}};
wia=function(a){navigator.mediaCapabilities?OF(a.videoInfos).then(function(){return a},function(){return a}):Ep(a)};
OF=function(a){var b=navigator.mediaCapabilities;if(!b)return Ep(a);var c=a.map(function(d){var e;if(e=b)d.video?(e=d.video,d={type:"media-source",video:{contentType:d.mimeType,width:e.width||640,height:e.height||360,bitrate:8*d.Hb||1E6,framerate:e.fps||30}}):d.audio?(e=d.audio,d={type:"media-source",audio:{contentType:d.mimeType,channels:e.i||2,bitrate:8*d.Hb||128E3,samplerate:e.sampleRate||44100}}):d=null,e=b.decodingInfo(d);return e});
return Nda(c).then(function(d){for(var e=0;e<d.length;e++)a[e].u=d[e].smooth,a[e].l=d[e].powerEfficient,a[e].isSupported=d[e].supported;return a},function(){return a})};
g.RF=function(a,b){g.O.call(this);this.B=a;this.adModule=!1;this.adaptiveFormats="";this.uE=this.wk=this.adQueryId=this.Br=null;this.Oy={start:NaN,end:NaN};this.Gr="";this.Bd=null;this.drmParams="";this.allowEmbed=!0;this.allowLiveDvr=this.offlineable=this.backgroundable=!1;this.ma="";this.Ry=this.xk=!1;this.MJ=null;this.Kf=this.Ic=this.dg=this.aB=!1;this.J=null;this.wE=this.le=!1;this.gj=NaN;this.hj=!1;this.Ep=0;this.rE=!1;this.JB={};this.by=this.cycToken=null;this.author="";this.rp=0;this.Ty=!1;
this.qp=null;this.Hn=this.EG=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.videoCountText=this.channelBanner=this.Fb=this.Rh="";this.contentCheckOk=!1;this.endSeconds=this.ub=0;this.sE=this.Pb=this.l=this.Pz=null;this.iz="";this.Y=!1;this.Oh=this.rk=0;this.Qy=this.pipable=this.Kj=!1;this.paidContentOverlayDurationMs=0;this.isLivePlayback=this.zb=this.isPrivate=this.isListed=this.EA=this.BE=this.mutedAutoplay=this.Xj=!1;this.CB="";this.isLowLatencyLiveStream=this.isLivingRoomDeeplink=this.isLiveDefaultBroadcast=
this.PA=this.gk=this.Ee=!1;this.latencyClass="UNKNOWN";this.enableServerStitchedDai=this.Ed=this.isMdxPlayback=this.isUpcoming=this.isPremiere=!1;this.mdxControlMode=null;this.isPharma=!1;this.Ya=0;this.reloadReason="";this.UA=this.vJ=this.Qc=!1;this.keywords={};this.Za="";this.dj=0;this.Bo=!1;this.liveChunkReadahead=NaN;this.qn=0;this.Ze=null;this.tp=this.lengthSeconds=0;this.playerParams=this.musicVideoType=null;this.paygated=!1;this.Jh=[];this.X=[];this.racyCheckOk=!1;this.WC={};this.Kt=0;this.u=
null;this.autonavState=1;this.OE=null;this.shortDescription="";this.Ua=this.Xx=!1;this.Ao=this.Ib=this.startSeconds=0;this.No=this.AE=this.Ro=PF;this.suggestions=null;this.Fp=this.Gp=void 0;this.Jf=null;this.Zx=!1;this.expandedSubtitle=this.jn=this.subtitle=this.title="";this.Xh=this.tE=this.multiMarkersPlayerBarRenderer=this.Uy=void 0;this.vk=[];this.hlsFormats=this.mj="";this.un=this.zo=this.ke=this.ib=this.Ea=this.ij=this.pn=null;this.oh="vvt";this.Qb=!1;this.My=null;this.DE="";this.vj=NaN;this.Xm=
this.kp=this.jp=this.ip=this.fp=this.Wm=this.tj=this.Vm=this.uj=this.lp="";this.ih=null;this.mE=!1;this.L={};this.clipStart=0;this.clipEnd=Infinity;this.heartbeatToken="";this.VG=this.NG=NaN;this.Jb=this.hk=this.Wb=this.zI=this.kH=!1;this.jj=!0;this.Bb={};this.captionTracks=[];this.Sy=[];this.CE=0;this.FF=[];this.yk=!1;this.Zh=new hx("und",new lB("Default","und",!0));this.jB=0;this.G=null;this.cf=[];this.Ub=[];this.ep=this.xc="";this.slotPosition=-1;this.breakType=0;this.watchNextResponse=this.playerResponse=
this.FG=this.Qn=this.bj=this.yg=this.Wy=this.Py=this.Ip=null;this.fn=!1;this.V=null;this.aA=this.Yi=this.useCobaltWidevine=this.oE=this.uo=this.kb=!1;this.dE=this.fE=NaN;this.defraggedFromSubfragments=this.Hj=this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=NaN;this.wp=this.gy=this.zc=!1;this.interstitials=[];this.C=this.OA=!1;this.ej=this.PJ=this.xa="";this.xn=null;this.Vc="";this.La=this.hI=!1;this.OJ=this.nj="";this.oC=this.IB=this.qz=this.readAheadGrowthRateMs=this.minReadAheadMediaTimeMs=
this.maxReadAheadMediaTimeMs=NaN;this.showShareButton=!0;this.lj=!1;this.Ff=this.Kd=!0;this.errorDetail=this.userGenderAge="";this.dy=this.ey=this.getSharePanelCommand=this.removeFromWatchLaterCommand=this.addToWatchLaterCommand=this.unsubscribeCommand=this.subscribeCommand=this.contextParams=this.Eh=this.errorReason=this.errorCode=null;this.dn=this.zk="";this.Ae=!1;this.qE=this.jE=this.hE=this.ag=this.Nd=0;this.fetchType=null;this.XC=!0;this.xE=void 0;this.yE=-1;this.Df=this.Mb=!1;this.Zb=null;this.Xa=
"";this.Z("web_player_ux_module_wait")&&this.B.Ya&&this.X.push("ux");this.Mb=this.Z("web_new_autonav_countdown");this.Df=this.Z("web_new_big_thumbnail_endscreen");QF(this,b)};
g.XF=function(a,b,c,d){b&&b.cpn&&g.Tu(new g.Cs("CPN provided in VideoData update",{N5:b.cpn,Cf:a.clientPlaybackNonce,D5:c}));d&&(a.errorCode=null,a.errorDetail="",a.errorReason=null,a.Eh=null);c?(rD(b),QF(a,b),SF(a)&&TF(a)):(b=b||{},UF(a,b),VF(a,b),WF(a,b),a.W("dataupdated"))};
WF=function(a,b){a.fflags=pD(a.fflags,b.fflags);var c=b.iv_invideo_url;c&&(a.ma=Vv(c));a.xk=T(a.xk,b.iv_ads_only);a.Ry=T(a.Ry,b.iv_allow_in_place_switch);a.isPharma=T(a.isPharma,b.is_pharma);a.author=pD(a.author,b.author);a.Rh=yF(b.ttsurl)||a.Rh;a.Ty=T(a.Ty,b.cc_asr);a.Fb=pD(a.Fb,b.channel_path);a.channelBanner=pD(a.channelBanner,b.channel_banner);if(c=b.profile_picture)a.gg=pD(a.gg,c);a.videoCountText=pD(a.videoCountText,b.video_count_text);a.autonavState=nD(a.autonavState,b.autonav_state,xia);a.clientPlaybackNonce=
pD(a.clientPlaybackNonce,b.cpn);a.subscribed=T(a.subscribed,b.subscribed);a.rawViewCount=oD(a.rawViewCount,b.view_count);a.shortViewCount=pD(a.shortViewCount,b.short_view_count_text);a.publishedTimeText=pD(a.publishedTimeText||"",b.publishedTimeText);a.lengthText=pD(a.lengthText||"",b.lengthText);a.hw=pD(a.hw||"",b.hw);a.Jr=pD(a.Jr||"",b.Jr);a.title=pD(a.title,b.title);a.subtitle=pD(a.subtitle,b.subtitle);a.jn=pD(a.jn,b.expanded_title);a.expandedSubtitle=pD(a.expandedSubtitle,b.expanded_subtitle);
a.Gr=pD(a.Gr,b.aria_label);a.ypcPreview=pD(a.ypcPreview,b.ypc_preview);a.Ny=pD(a.Ny,b.ypc_origin);a.Qb=T(a.Qb,b.ypc_is_premiere_trailer);a.nj=pD(a.nj,b.ypc_clickwrap_message);a.paygated=T(a.paygated,b.paygated);a.mE=T(a.mE,b.requires_purchase);a.showShareButton=!T(!a.showShareButton,b.ss);a.Kd=T(a.Kd,b.showwatchlater);a.Ff=T(a.Ff,b.shownotifybutton);a.lj=T(a.lj,b.copy_share);if(c=b.keywords)a.keywords=YF(c.split(","));if(c=b.rvs)a.suggestions=bp(c);a.contentCheckOk=T(a.contentCheckOk,b.cco);a.racyCheckOk=
T(a.racyCheckOk,b.rco);a.isLivingRoomDeeplink=T(a.isLivingRoomDeeplink,b.is_living_room_deeplink);a.oauthToken=pD(a.oauthToken,b.oauth_token);a.Za=pD(a.Za,b.kpt);a.visitorData=pD(a.visitorData,b.visitor_data);if(c=b.session_data)a.Hd=Zo(c,"&");if(c=b.endscreen_autoplay_session_data)a.Pz=Zo(c,"&");a.hn=pD(a.hn,b.endscreen_ad_tracking_data);a.zE=T(a.zE,b.wait_for_vast_info_cards_xml);a.Yx=T(a.Yx,b.suppress_creator_endscreen);a.FI=T(a.FI,b.is_trueview_action);a.vE=pD(a.vE,b.tracking_list);a.zk=pD(a.zk,
b.clip);a.dn=pD(a.dn,b.clipt);ZF(a,b)};
QF=function(a,b){var c;b=b||{};var d=b.errordetail;null!=d&&(a.errorDetail=d);var e=b.errorcode;null!=e?a.errorCode=e:"fail"==b.status&&(a.errorCode="150");var f=b.reason;null!=f&&(a.errorReason=f);var h=b.subreason;null!=h&&(a.Eh=h);a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||yu());a.zb=T(a.B.hk,b.livemonitor);UF(a,b);var l=b.raw_player_response;if(!l){var m=b.player_response;m&&(l=JSON.parse(m))}l&&(a.playerResponse=l);if(a.playerResponse){var n=a.playerResponse.annotations;if(n)for(var p=
g.q(n),r=p.next();!r.done;r=p.next()){var t=r.value.playerAnnotationsUrlsRenderer;if(t){t.adsOnly&&(a.xk=!0);t.allowInPlaceSwitch&&(a.Ry=!0);var u=t.loadPolicy;u&&(a.annotationsLoadPolicy=yia[u]);var x=t.invideoUrl;x&&(a.ma=Vv(x));a.aB=!0;break}}var y=a.playerResponse.attestation;y&&xF(a,y);var B=a.playerResponse.cotn;B&&(a.cotn=B);var H=a.playerResponse.heartbeatParams;if(H){var E,I=H.heartbeatToken;I&&(a.drmSessionId=H.drmSessionId||"",a.heartbeatToken=I,a.NG=Number(H.intervalMilliseconds),a.VG=
Number(H.maxRetries),a.kH=!!H.softFailOnError,a.zI=!!H.useInnertubeHeartbeatsForDrm,a.dg=!0);a.heartbeatServerData=H.heartbeatServerData;a.Z("heartbeat_iff_heartbeat_params_filled")&&(a.dg=!0);a.hj=!(null===(E=H.heartbeatAttestationConfig)||void 0===E||!E.requiresAttestation)}var Q=a.playerResponse.messages;Q&&oia(a,Q);var ha=a.playerResponse.multicamera;if(ha){var Da=ha.playerLegacyMulticameraRenderer;if(Da){var Ua=Da.metadataList;Ua&&(a.OJ=Ua,a.Ub=bp(Ua))}}var Jb=a.playerResponse.overlay;if(Jb){var sd=
Jb.playerControlsOverlayRenderer;if(sd){var Cg=sd.controlBgHtml;null!=Cg?(a.xa=Cg,a.C=!0):(a.xa="",a.C=!1);if(sd.mutedAutoplay){var db=sd.mutedAutoplay.playerMutedAutoplayOverlayRenderer;if(db&&db.endScreen){var Ne=db.endScreen.playerMutedAutoplayEndScreenRenderer;Ne&&Ne.text&&(a.PJ=g.gw(Ne.text))}}else a.mutedAutoplay=!1}}var Dc=a.playerResponse.playabilityStatus;if(Dc){var xl=Dc.backgroundability;xl&&xl.backgroundabilityRenderer.backgroundable&&(a.backgroundable=!0);var Lj=Dc.offlineability;Lj&&
Lj.offlineabilityRenderer.offlineable&&(a.offlineable=!0);var Sf=Dc.contextParams;Sf&&(a.contextParams=Sf);var xx=Dc.pictureInPicture;xx&&xx.pictureInPictureRenderer.playableInPip&&(a.pipable=!0);Dc.playableInEmbed&&(a.allowEmbed=!0);var Fr=Dc.ypcClickwrap;if(Fr){var yx=Fr.playerLegacyDesktopYpcClickwrapRenderer,zx=Fr.ypcRentalActivationRenderer;if(yx)a.nj=yx.durationMessage||"",a.Kf=!0;else if(zx){var nf=zx.durationMessage;a.nj=nf?g.gw(nf):"";a.Kf=!0}}var wh=Dc.errorScreen;if(wh){if(wh.playerLegacyDesktopYpcTrailerRenderer){var hc=
wh.playerLegacyDesktopYpcTrailerRenderer;a.Xm=hc.trailerVideoId||"";var Ax=wh.playerLegacyDesktopYpcTrailerRenderer.ypcTrailer;var yl=Ax&&Ax.ypcTrailerRenderer}else if(wh.playerLegacyDesktopYpcOfferRenderer)hc=wh.playerLegacyDesktopYpcOfferRenderer;else if(wh.ypcTrailerRenderer){yl=wh.ypcTrailerRenderer;var zl=yl.fullVideoMessage;a.tj=zl?g.gw(zl):""}hc&&(a.jp=hc.itemTitle||"",hc.itemUrl&&(a.kp=hc.itemUrl),hc.itemBuyUrl&&(a.fp=hc.itemBuyUrl),a.ip=hc.itemThumbnail||"",a.Vm=hc.offerHeadline||"",a.uj=
hc.offerDescription||"",a.Wm=hc.offerId||"",a.lp=hc.offerButtonText||"",a.My=hc.offerButtonFormattedText||null,a.vj=hc.overlayDurationMsec||NaN,a.tj=hc.fullVideoMessage||"",a.Ic=!0);if(yl){var Gr=yl.unserializedPlayerResponse;if(Gr)a.ih={raw_player_response:Gr};else{var Bx=yl.playerVars;a.ih=Bx?ap(Bx):null}a.Ic=!0}}}var Oe=a.playerResponse.playbackTracking;if(Oe){var Cx=b,Dx=vF(Oe.googleRemarketingUrl);Dx&&(a.googleRemarketingUrl=Dx);var Hr=vF(Oe.youtubeRemarketingUrl);Hr&&(a.youtubeRemarketingUrl=
Hr);var Ex=vF(Oe.ptrackingUrl);if(Ex){var eo=wF(Ex),Fx=eo.oid;Fx&&(a.UC=Fx);var Ir=eo.pltype;Ir&&(a.VC=Ir);var Gx=eo.ptchn;Gx&&(a.TC=Gx);var fo=eo.ptk;fo&&(a.On=encodeURIComponent(fo))}var Hx=vF(Oe.ppvRemarketingUrl);Hx&&(a.ppvRemarketingUrl=Hx);var Ix=vF(Oe.qoeUrl);if(Ix){for(var of=g.cp(Ix),Jx=g.q(Object.keys(of)),go=Jx.next();!go.done;go=Jx.next()){var Kx=go.value,Lx=of[Kx];of[Kx]=Array.isArray(Lx)?Lx.join(","):Lx}var QE=of.cat;QE&&(a.ej=QE);var Jr=of.live;Jr&&(a.CB=Jr)}var Al=vF(Oe.remarketingUrl);
if(Al){a.remarketingUrl=Al;var Mx=wF(Al);Mx.foc_id&&(a.L.focEnabled=!0);var Kr=Mx.data;Kr&&(a.L.rmktEnabled=!0,Kr.engaged&&(a.L.engaged="1"));a.L.baseUrl=Cd(Al)+yd(g.Ad(5,Al))}var ho=vF(Oe.videostatsPlaybackUrl);if(ho){var Mc=wF(ho),Nc=Mc.adformat;if(Nc&&(Cx.adformat=Nc,!a.Z("process_video_data_ad_format_in_player_tracking_killswitch"))){var Dg=a.T(),Lr=nF(Nc,a.ep,Dg.l,Dg.u);Lr&&(a.adFormat=Lr)}var Nx=Mc.aqi;Nx&&(Cx.ad_query_id=Nx);var Ox=Mc.autoplay;Ox&&(a.Xj="1"==Ox);var Px=Mc.autonav;Px&&(a.Kj=
"1"==Px);var Qx=Mc.delay;Qx&&(a.ub=ud(Qx));var Mr=Mc.ei;Mr&&(a.eventId=Mr);"adunit"===Mc.el&&(a.Xj=!0);var Nr=Mc.feature;Nr&&(a.nE=Nr);var Rx=Mc.list;Rx&&(a.playlistId=Rx);var Sx=Mc.of;Sx&&(a.jO=Sx);var Tx=Mc.osid;Tx&&(a.osid=Tx);var Or=Mc.referrer;Or&&(a.referrer=Or);var Pr=Mc.sdetail;Pr&&(a.lE=Pr);var RE=Mc.sourceid;RE&&(a.V5=RE);var Bl=Mc.ssrt;Bl&&(a.xp="1"==Bl);var zi=Mc.subscribed;zi&&(a.subscribed="1"==zi,a.L.subscribed=zi);var Qr=Mc.uga;Qr&&(a.userGenderAge=Qr);var Ux=Mc.upt;Ux&&(a.lO=Ux);
var Vx=Mc.vm;Vx&&(a.videoMetadata=Vx)}var Wx=vF(Oe.videostatsWatchtimeUrl);if(Wx){var Xx=wF(Wx).ald;Xx&&(a.EM=Xx)}if(Oe.promotedPlaybackTracking){var Pe=Oe.promotedPlaybackTracking;Pe.startUrls&&(a.ao=Pe.startUrls);Pe.firstQuartileUrls&&(a.RC=Pe.firstQuartileUrls);Pe.secondQuartileUrls&&(a.SC=Pe.secondQuartileUrls);Pe.thirdQuartileUrls&&(a.Vx=Pe.thirdQuartileUrls);Pe.completeUrls&&(a.QC=Pe.completeUrls);Pe.engagedViewUrls&&(1<Pe.engagedViewUrls.length&&g.Tu(new g.Cs("There are more than one engaged_view_urls.")),
a.df=Pe.engagedViewUrls[0])}}var Qe=a.playerResponse.playerAds;if(Qe)for(var Yx=b,SE=g.q(Qe),io=SE.next();!io.done;io=SE.next()){var Rr=io.value;if(Rr){var Jd=Rr.playerLegacyDesktopWatchAdsRenderer;if(Jd){var Mj=Jd.playerAdParams;if(Mj){"1"==Mj.autoplay&&(a.Xj=!0);a.wk=Mj.encodedAdSafetyReason||null;void 0!==Mj.showContentThumbnail&&(a.jj=!!Mj.showContentThumbnail);Yx.enabled_engage_types=Mj.enabledEngageTypes;break}}}}var Kd=a.playerResponse.playerConfig;if(Kd){var Nj=Kd.manifestlessWindowedLiveConfig;
if(Nj){var Sr=Number(Nj.minDvrSequence),Zx=Number(Nj.maxDvrSequence),$x=Number(Nj.minDvrMediaTimeMs),ay=Number(Nj.maxDvrMediaTimeMs),by=Number(Nj.startWalltimeMs);Sr&&(a.Nd=Sr);$x&&(a.jE=$x/1E3);Zx&&(a.ag=Zx);ay&&(a.hE=ay/1E3);by&&(a.qE=by/1E3)}var Tr=Kd.daiConfig;if(Tr){Tr.enableDai&&(a.Ed=!0);var Ur=Tr.enableServerStitchedDai;Ur&&(a.enableServerStitchedDai=Ur)}var Eg=Kd.audioConfig;if(Eg){var cy=Eg.loudnessDb;null!=cy&&(a.gj=cy);Eg.audioMuted&&(a.le=!0);Eg.muteOnStart&&(a.wE=!0)}var Vr=Kd.playbackEndConfig;
if(Vr){var TE=Vr.endSeconds;TE&&a.mutedAutoplay&&(a.endSeconds=TE)}var Ai=Kd.fairPlayConfig;if(Ai){var dy=Ai.certificate;dy&&(a.Pb=UC(dy));var ey=Number(Ai.keyRotationPeriodMs);0<ey&&(a.XM=ey);var fy=Number(Ai.keyPrefetchMarginMs);0<fy&&(a.GM=fy)}var jo=Kd.playbackStartConfig;if(jo){a.oC=Number(jo.startSeconds);var gy=jo.liveUtcStartSeconds,Wr=!1;a.Z("html5_start_seconds_priority")&&(Wr=!!a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds);gy&&!Wr&&(a.liveUtcStartSeconds=Number(gy));var Xr=jo.startPosition;
if(Xr){var Yr=Xr.utcTimeMillis;Yr&&!Wr&&(a.liveUtcStartSeconds=.001*Number(Yr));var ko=Xr.streamTimeMillis;ko&&(a.Ao=.001*Number(ko))}}else{var IQ=Kd.skippableSegmentsConfig;if(IQ){var o9=IQ.introSkipDurationMs;o9&&(a.qz=Number(o9)/1E3);var p9=IQ.outroSkipDurationMs;p9&&(a.IB=Number(p9)/1E3)}}var JQ=Kd.skippableIntroConfig;if(JQ){var q9=Number(JQ.startMs),r9=Number(JQ.endMs);isNaN(q9)||isNaN(r9)||(a.fE=q9,a.dE=r9)}var s9=Kd.streamSelectionConfig;s9&&(a.Oh=Number(s9.maxBitrate));var t9=Kd.vrConfig;
t9&&(a.uo="1"==t9.partialSpherical);var hy=Kd.webDrmConfig;if(hy){hy.skipWidevine&&(a.oE=!0);var u9=hy.widevineServiceCert;u9&&(a.sE=UC(u9));hy.useCobaltWidevine&&(a.useCobaltWidevine=!0);hy.startWithNoQualityConstraint&&(a.Yi=!0)}var v9=Kd.mediaCommonConfig;if(v9){var UE=v9.dynamicReadaheadConfig;UE&&(a.maxReadAheadMediaTimeMs=UE.maxReadAheadMediaTimeMs||NaN,a.minReadAheadMediaTimeMs=UE.minReadAheadMediaTimeMs||NaN,a.readAheadGrowthRateMs=UE.readAheadGrowthRateMs||NaN)}}var Oj=a.playerResponse.streamingData;
if(Oj){var w9=Oj.adaptiveFormats;if(w9){for(var x9=[],y9=g.q(w9),xh=y9.next();!xh.done;xh=y9.next()){var VE=xh.value;x9.push(BF(VE));var z9=VE.loudnessDb;VE.itag&&null!=z9&&(a.JB[VE.itag.toString()]=z9)}a.adaptiveFormats=x9.join(",")}var KQ=Oj.formats;if(KQ){var iy=[],A9=g.q(KQ);for(xh=A9.next();!xh.done;xh=A9.next()){var LQ=xh.value;iy.push(LQ.itag+"/"+LQ.width+"x"+LQ.height)}a.iz=iy.join(",");iy=[];var B9=g.q(KQ);for(xh=B9.next();!xh.done;xh=B9.next()){var Zr=xh.value,jy={itag:Zr.itag,type:Zr.mimeType,
quality:Zr.quality},C9=Zr.url;C9&&(jy.url=C9);var D9=Zr.cipher||Zr.signatureCipher;if(D9){var MQ=ap(D9);jy.sp=MQ.sp;jy.s=MQ.s;jy.url=MQ.url}iy.push(g.Md(jy))}a.mj=iy.join(",")}var NQ=Oj.hlsFormats;if(NQ){var E9=Kd||null,WE={};if(E9){var OQ=E9.audioPairingConfig;if(OQ&&OQ.pairs)for(var F9=g.q(OQ.pairs),PQ=F9.next();!PQ.done;PQ=F9.next()){var G9=PQ.value,QQ=G9.videoItag;WE[QQ]||(WE[QQ]=[]);WE[QQ].push(G9.audioItag)}}for(var H9={},I9=g.q(NQ),lo=I9.next();!lo.done;lo=I9.next()){var J9=lo.value;H9[J9.itag]=
J9.bitrate}var K9=[],L9=g.q(NQ);for(lo=L9.next();!lo.done;lo=L9.next()){var pf=lo.value,Bi={itag:pf.itag,type:pf.mimeType,url:pf.url,bitrate:pf.bitrate,width:pf.width,height:pf.height,fps:pf.fps},XE=pf.audioTrack;if(XE){var M9=XE.displayName;M9&&(Bi.name=M9,Bi.audio_track_id=XE.id,XE.audioIsDefault&&(Bi.is_default="1"))}if(pf.drmFamilies){for(var N9=[],O9=g.q(pf.drmFamilies),RQ=O9.next();!RQ.done;RQ=O9.next())N9.push(AF[RQ.value]);Bi.drm_families=N9.join(",")}var YE=WE[pf.itag];if(YE&&YE.length){Bi.audio_itag=
YE.join(",");var P9=H9[YE[0]];P9&&(Bi.bitrate+=P9)}var Q9=uF(pf);Q9&&(Bi.eotf=Q9);pf.audioChannels&&(Bi.audio_channels=pf.audioChannels);K9.push(g.Md(Bi))}a.hlsFormats=K9.join(",")}var SQ=Oj.licenseInfos;if(SQ&&0<SQ.length){for(var R9={},S9=g.q(SQ),TQ=S9.next();!TQ.done;TQ=S9.next()){var T9=TQ.value,U9=T9.drmFamily,V9=T9.url;U9&&V9&&(R9[AF[U9]]=V9)}a.Bd=R9}var W9=Oj.drmParams;W9&&(a.drmParams=W9);var X9=Oj.dashManifestUrl;X9&&(a.Fa=g.Od(X9,{cpn:a.clientPlaybackNonce}));var Y9=Oj.hlsManifestUrl;Y9&&
(a.hlsvp=Y9);var Z9=Oj.probeUrl;Z9&&(a.probeUrl=Vv(g.Od(Z9,{cpn:a.clientPlaybackNonce})))}var $9=a.playerResponse.trackingParams;$9&&(a.ya=$9);var ic=a.playerResponse.videoDetails;if(ic){var Ci=b,UQ=ic.videoId;UQ&&(a.videoId=UQ,Ci.video_id||(Ci.video_id=UQ));var a$=ic.channelId;a$&&(a.L.uid=a$.substr(2));var VQ=ic.title;VQ&&(a.title=VQ,Ci.title||(Ci.title=VQ));var WQ=ic.lengthSeconds;WQ&&(a.lengthSeconds=Number(WQ),Ci.length_seconds||(Ci.length_seconds=WQ));var b$=ic.keywords;b$&&(a.keywords=YF(b$));
var XQ=ic.channelId;XQ&&(a.nh=XQ,Ci.ucid||(Ci.ucid=XQ));var c$=ic.viewCount;c$&&(a.rawViewCount=Number(c$));var YQ=ic.author;YQ&&(a.author=YQ,Ci.author||(Ci.author=YQ));var d$=ic.shortDescription;d$&&(a.shortDescription=d$);var e$=ic.isCrawlable;e$&&(a.isListed=e$);var f$=ic.musicVideoType;f$&&(a.musicVideoType=f$);var ZQ=ic.isLive;null!=ZQ&&(a.isLivePlayback=ZQ);if(ZQ||ic.isUpcoming)a.isPremiere=!ic.isLiveContent;var g$$=ic.thumbnail;g$$&&(a.Bb=tF(g$$));var h$=Kd||null,$Q=b;ic.isLiveDefaultBroadcast&&
(a.isLiveDefaultBroadcast=!0);ic.isUpcoming&&(a.isUpcoming=!0);if(ic.isPostLiveDvr)a.Ee=!0;else{var aR=!1;if(a.zb)a.allowLiveDvr=$F(!0),a.isLivePlayback=!0;else if(ic.isLive){$Q.livestream="1";a.allowLiveDvr=$F(!!ic.isLiveDvrEnabled);a.Ta=27;ic.isLowLatencyLiveStream&&(a.isLowLatencyLiveStream=!0);var i$=ic.latencyClass;i$&&(a.latencyClass=zia[i$]||"UNKNOWN");var j$=ic.liveChunkReadahead;j$&&(a.liveChunkReadahead=j$);var ky=h$&&h$.livePlayerConfig;if(ky){ky.hasSubfragmentedFmp4&&(a.hasSubfragmentedFmp4=
!0);ky.hasSubfragmentedWebm&&(a.Hj=!0);ky.defraggedFromSubfragments&&(a.defraggedFromSubfragments=!0);var k$=ky.liveExperimentalContentId;k$&&(a.liveExperimentalContentId=Number(k$))}aR=!0}else ic.isUpcoming&&(aR=!0);aR&&(a.isLivePlayback=!0,$Q.adformat&&"8"!==$Q.adformat.split("_")[1]||a.X.push("heartbeat"),a.Z("heartbeat_iff_heartbeat_params_filled")||(a.dg=!0))}var l$=ic.isPrivate;l$&&(a.isPrivate=T(a.isPrivate,l$))}if(Dc){var m$=ic||null,n$=!1,$r=Dc.errorScreen;n$=$r&&($r.playerLegacyDesktopYpcOfferRenderer||
$r.playerLegacyDesktopYpcTrailerRenderer||$r.ypcTrailerRenderer)?!0:m$&&m$.isUpcoming?!0:["OK","LIVE_STREAM_OFFLINE","FULLSCREEN_ONLY"].includes(Dc.status);if(!n$){a.errorCode="150";var ZE=$r&&$r.playerErrorMessageRenderer;if(ZE){a.playerErrorMessageRenderer=ZE;var o$=ZE.reason;o$&&(a.errorReason=g.gw(o$));var cR=ZE.subreason;cR&&(a.Eh=g.gw(cR),a.on=cR)}else a.errorReason=Dc.reason||null;var dR=Dc.status;if("LOGIN_REQUIRED"===dR)a.errorDetail="1";else if("CONTENT_CHECK_REQUIRED"===dR)a.errorDetail=
"2";else if("AGE_CHECK_REQUIRED"===dR){var p$=Dc.errorScreen,q$=p$&&p$.playerKavRenderer;a.errorDetail=q$&&q$.kavUrl?"4":"3"}else a.errorDetail=Dc.isBlockedInRestrictedMode?"5":"0"}}var r$=a.playerResponse.interstitialPods;r$&&nia(a,r$);a.ma&&a.eventId&&(a.ma=fp(a.ma,{ei:a.eventId}));var eR=a.playerResponse.captions;eR&&eR.playerCaptionsTracklistRenderer&&mia(a,eR.playerCaptionsTracklistRenderer);a.clipConfig=a.playerResponse.clipConfig;a.clipConfig&&null!=a.clipConfig.startTimeMs&&(a.oC=.001*Number(a.clipConfig.startTimeMs));
a.accountLinkingConfig=a.playerResponse.accountLinkingConfig;a.accountLinkingConfig&&a.accountLinkingConfig.alsParam&&(a.ZD=a.accountLinkingConfig.alsParam);a.Z("web_player_include_innertube_commands")&&a.playerResponse&&a.playerResponse.playerConfig&&a.playerResponse.playerConfig.webPlayerConfig&&a.playerResponse.playerConfig.webPlayerConfig.webPlayerActionsPorting&&zF(a,a.playerResponse.playerConfig.webPlayerConfig.webPlayerActionsPorting)}VF(a,b);b.queue_info&&(a.queueInfo=b.queue_info);var s$=
b.hlsdvr;null!=s$&&(a.allowLiveDvr=$F("1"==s$));a.adQueryId=b.ad_query_id||null;a.wk||(a.wk=b.encoded_ad_safety_reason||null);a.uE=b.agcid||null;a.Ip=b.ad_id||null;a.Py=b.ad_sys||null;a.Wy=b.encoded_ad_playback_context||null;a.le=T(a.le,b.infringe||b.muted);a.authKey=b.authkey;a.bE=b.authuser;a.OE=b.autonav_watch_endpoint||null;a.mutedAutoplay=T(a.mutedAutoplay,b&&b.playmuted)&&a.Z("embeds_enable_muted_autoplay");a.endSeconds=oD(a.endSeconds,a.IB||b.end||b.endSeconds);a.ya=pD(a.ya,b.itct);a.EA=T(a.EA,
b.noiba);a.PA=T(a.PA,b.is_live_destination);a.isLivePlayback=T(a.isLivePlayback,b.live_playback);a.enableServerStitchedDai=a.enableServerStitchedDai&&a.isLivePlayback;b.isUpcoming&&(a.isUpcoming=T(a.isUpcoming,b.isUpcoming));a.Ee=T(a.Ee,b.post_live_playback);a.isMdxPlayback=T(a.isMdxPlayback,b.mdx);var $E=b.mdx_control_mode;$E&&(a.mdxControlMode="number"===typeof $E?$E:ud($E));a.aA=T(a.aA,b.is_inline_playback_no_ad);a.Ya=oD(a.Ya,b.reload_count);a.reloadReason=pD(a.reloadReason,b.reload_reason);a.jj=
T(a.jj,b.show_content_thumbnail);a.UA=T(a.UA,b.utpsa);a.Zx=T(a.Zx,b.third_party_remapped_ad);a.cycToken=b.cyc||null;a.by=b.tkn||null;var t$=qF(b);0<Object.keys(t$).length&&(a.Bb=t$);a.Da=pD(a.Da,b.vvt);a.mdxEnvironment=pD(a.mdxEnvironment,b.mdx_environment);a.mO=b.osig;a.eventId||(a.eventId=b.eventid);a.osid||(a.osid=b.osid);a.playlistId=pD(a.playlistId,b.list);b.index&&(a.playlistIndex=void 0===a.playlistIndex?oD(0,b.index):oD(a.playlistIndex,b.index));a.XD=b.pyv_view_beacon_url;a.cE=b.pyv_quartile25_beacon_url;
a.eE=b.pyv_quartile50_beacon_url;a.gE=b.pyv_quartile75_beacon_url;a.aE=b.pyv_quartile100_beacon_url;var u$=b.remarketing_url;u$&&(a.remarketingUrl=u$);var v$=b.ppv_remarketing_url;v$&&(a.ppvRemarketingUrl=v$);var w$=b.session_data;!a.iE&&w$&&(a.iE=Zo(w$,"&").feature);a.Iz=1==oD(a.Iz?1:0,b.is_fling);a.vnd=oD(a.vnd,b.vnd);a.Ye=pD(a.Ye,b.force_ads_url);a.Mg=pD(a.Mg,b.ctrl);a.uf=pD(a.uf,b.ytr);a.Ek=b.ytrcc;a.kE=b.ytrexp;a.Wx=b.ytrext;a.xc=pD(a.xc,b.adformat);a.ep=pD(a.ep,b.attrib);a.slotPosition=oD(a.slotPosition,
b.slot_pos);a.breakType=b.break_type;a.xp=T(a.xp,b.ssrt);a.videoId=rD(b)||a.videoId;a.Na=pD(a.Na,b.vss_credentials_token);a.oh=pD(a.oh,b.vss_credentials_token_type);a.zc=T(a.zc,b.audio_only);a.gy=T(a.gy,b.aac_high);a.wp=T(a.wp,b.prefer_low_quality_audio);a.ej=pD(a.ej,b.qoe_cat);a.Ae=T(a.Ae,b.download_media);a.La=T(a.La,b.prefer_gapless);a:{var fR=a.playerResponse;if(fR&&fR.adPlacements)for(var x$=g.q(fR.adPlacements),gR=x$.next();!gR.done;gR=x$.next()){var aF=gR.value.adPlacementRenderer;if(null!=
aF&&"AD_PLACEMENT_KIND_START"==(aF.config&&aF.config.adPlacementConfig&&aF.config.adPlacementConfig.kind)){var y$=!0;break a}}y$=!1}y$&&(a.adModule=!0,a.X.push("ad"));var z$=b.adaptive_fmts;z$&&(a.adaptiveFormats=z$);var A$=b.allow_embed;A$&&(a.allowEmbed="1"==A$);var B$=b.backgroundable;B$&&(a.backgroundable="1"==B$);var C$=b.autonav;C$&&(a.Kj="1"==C$);var D$=b.autoplay;D$&&(a.Xj="1"==D$);var E$=b.iv_load_policy;E$&&(a.annotationsLoadPolicy=nD(a.annotationsLoadPolicy,E$,KD));var F$=b.cc_lang_pref;
F$&&(a.captionsLanguagePreference=pD(F$,a.captionsLanguagePreference));var G$=b.cc_load_policy;G$&&(a.qp=nD(a.qp,G$,KD));var H$=b.cached_load;H$&&(a.Hn=T(a.Hn,H$));"0"==b.dash&&(a.EG=!0);var I$=b.dashmpd;I$&&(a.Fa=g.Od(I$,{cpn:a.clientPlaybackNonce}));var J$=b.delay;J$&&(a.ub=ud(J$));var K$=a.IB||b.end;void 0!=K$&&(a.clipEnd=oD(a.clipEnd,K$));var L$=b.fmt_list;L$&&(a.iz=L$);b.heartbeat_preroll&&a.X.push("heartbeat");a.rk=-Math.floor(10*Math.random());a.tp=-Math.floor(40*Math.random());var M$=b.is_listed;
M$&&(a.isListed=T(a.isListed,M$));var N$=b.is_private;N$&&(a.isPrivate=T(a.isPrivate,N$));var O$=b.is_dni;O$&&(a.C=T(a.C,O$));var P$=b.dni_color;P$&&(a.xa=pD(a.xa,P$));var Q$=b.pipable;Q$&&(a.pipable=T(a.pipable,Q$));a.Qy=a.pipable&&a.B.yk;a.Xx=a.Qy&&(!a.B.showMiniplayerButton||a.Z("web_player_pip"));var R$=b.paid_content_overlay_duration_ms;R$&&(a.paidContentOverlayDurationMs=ud(R$));var S$=b.paid_content_overlay_text;S$&&(a.paidContentOverlayText=S$);var T$=b.url_encoded_fmt_stream_map;T$&&(a.mj=
T$);var U$=b.hls_formats;U$&&(a.hlsFormats=U$);var V$=b.hlsvp;V$&&(a.hlsvp=V$);var bF=b.length_seconds;bF&&(a.lengthSeconds="string"===typeof bF?ud(bF):bF);var cF=b.live_start_walltime;cF&&(a.qn="number"===typeof cF?cF:ud(cF));var dF=b.live_manifest_duration;dF&&(a.Ze="number"===typeof dF?dF:ud(dF));var W$=b.player_params;W$&&(a.playerParams=W$);var X$=b.partnerid;X$&&(a.Ta=oD(a.Ta,X$));var Y$=b.probe_url;Y$&&(a.probeUrl=Vv(g.Od(Y$,{cpn:a.clientPlaybackNonce})));var hR=b.pyv_billable_url;hR&&Sv(hR)&&
(a.df=hR);var iR=b.pyv_conv_url;iR&&Sv(iR)&&(a.YD=iR);ZF(a,b);0<a.startSeconds||(a.startSeconds=oD(a.startSeconds,a.oC||a.qz||b.start||b.startSeconds),a.Ib=a.startSeconds);if(a.Z("html5_start_seconds_priority")){if(!(a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds)){var Z$=b.live_utc_start;if(null!=Z$)a.liveUtcStartSeconds=Number(Z$);else{var jR=a.startSeconds;jR&&isFinite(jR)&&1E9<jR&&(a.liveUtcStartSeconds=a.startSeconds)}}if(!(a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds)){var $$=b.utc_start_millis;
$$&&(a.liveUtcStartSeconds=.001*Number($$))}}else{var aaa=b.live_utc_start;null!=aaa&&(a.liveUtcStartSeconds=Number(aaa));var baa=b.utc_start_millis;baa&&(a.liveUtcStartSeconds=.001*Number(baa))}var caa=b.stream_time_start_millis;caa&&(a.Ao=.001*Number(caa));var daa=a.qz||b.start;void 0==daa||"1"==b.resume||a.isLivePlayback||(a.clipStart=oD(a.clipStart,daa));var eaa=b.url_encoded_third_party_media;eaa&&(a.Jf=bp(eaa));var kR=b.ypc_offer_button_formatted_text;if(kR){var faa=JSON.parse(kR);a.My=null!=
faa?faa:null;a.DE=kR}var gaa=b.ypc_offer_button_text;gaa&&(a.lp=gaa);var haa=b.ypc_offer_description;haa&&(a.uj=haa);var iaa=b.ypc_offer_headline;iaa&&(a.Vm=iaa);var jaa=b.ypc_full_video_message;jaa&&(a.tj=jaa);var kaa=b.ypc_offer_id;kaa&&(a.Wm=kaa);var laa=b.ypc_buy_url;laa&&(a.fp=laa);var maa=b.ypc_item_thumbnail;maa&&(a.ip=maa);var naa=b.ypc_item_title;naa&&(a.jp=naa);var oaa=b.ypc_item_url;oaa&&(a.kp=oaa);var paa=b.ypc_vid;paa&&(a.Xm=paa);b.ypc_overlay_timeout&&(a.vj=Number(b.ypc_overlay_timeout));
var qaa=b.ypc_trailer_player_vars;qaa&&(a.ih=ap(qaa));var raa=b.ypc_original_itct;raa&&(a.HO=raa);a.nh=pD(a.nh,b.ucid);b.baseUrl&&(a.L.baseUrl=b.baseUrl);b.uid&&(a.L.uid=b.uid);b.oeid&&(a.L.oeid=b.oeid);b.ieid&&(a.L.ieid=b.ieid);b.ppe&&(a.L.ppe=b.ppe);b.engaged&&(a.L.engaged=b.engaged);b.subscribed&&(a.L.subscribed=b.subscribed);a.L.focEnabled=T(a.L.focEnabled,b.focEnabled);a.L.rmktEnabled=T(a.L.rmktEnabled,b.rmktEnabled);a.zo=b.storyboard_spec||null;a.un=b.live_storyboard_spec||null;a.MJ=b.iv_endscreen_url||
null;a.aB=T(a.aB,b.iv3_module);a.dg=T(a.dg,b.ypc_license_checker_module);a.Ic=T(a.Ic,b.ypc_module);a.Kf=T(a.Kf,b.ypc_clickwrap_module);a.Ic&&a.X.push("ypc");a.Kf&&a.X.push("ypc_clickwrap");a.WC={video_id:b.video_id,eventid:b.eventid,cbrand:b.cbrand,cbr:b.cbr,cbrver:b.cbrver,c:b.c,cver:b.cver,ctheme:b.ctheme,cplayer:b.cplayer,cmodel:b.cmodel,cnetwork:b.cnetwork,cos:b.cos,cosver:b.cosver,cplatform:b.cplatform,user_age:b.user_age,user_display_image:b.user_display_image,user_display_name:b.user_display_name,
user_gender:b.user_gender,csi_page_type:b.csi_page_type,csi_service_name:b.csi_service_name,enablecsi:b.enablecsi,enabled_engage_types:b.enabled_engage_types};WF(a,b);var saa=b.cotn;saa&&(a.cotn=saa);Aia(a)?aG(a)&&(a.isLivePlayback&&a.Fa?a.Wb=!0:a.Pb&&(a.hk=!0)):Bia(a)?a.Wb=!0:!Cia(a,a.adaptiveFormats)&&a.Fa&&(a.Wb=!0);var mR=b.adpings;mR&&(a.Br=mR?ap(mR):null);var waa=b.feature;waa&&(a.nE=waa);var xaa=b.referrer;xaa&&(a.referrer=xaa);a.clientScreenNonce=pD(a.clientScreenNonce,b.csn);a.Kt=oD(a.Kt,
b.root_ve_type);a.dj=oD(a.dj,b.kids_age_up_mode);void 0!=b.kids_app_info&&(a.kidsAppInfo=b.kids_app_info);a.Bo=T(a.Bo,b.upg_content_filter_mode);var yaa=b.unplugged_location_info;yaa&&(a.V=yaa);var zaa=b.unplugged_partner_opt_out;zaa&&(a.Hp=pD("",zaa));a.fn=T(a.fn,b.disable_watch_next);a.cj=pD(a.cj,b.internal_ip_override);a.OA=!!b.is_yto_interstitial;(a.interstitials.length||a.OA)&&a.X.push("yto");var Aaa=b.Jh;Aaa&&(a.Jh=Aaa);b.wx&&(a.wx=b.wx);a.Xa=null!==(c=b.csi_timer)&&void 0!==c?c:""};
VF=function(a,b){var c,d,e,f,h,l,m,n,p,r,t,u,x,y,B,H,E,I,Q,ha=b.raw_watch_next_response;if(!ha){var Da=b.watch_next_response;Da&&(ha=JSON.parse(Da))}if(ha){a.watchNextResponse=ha;var Ua=a.watchNextResponse.contents;if(Ua){var Jb=Ua.singleColumnWatchNextResults;if(Jb){var sd=oD(0,b.autoplay_count);if(Jb.autoplay&&Jb.autoplay.autoplay&&!Jb.playlist){var Cg=Jb.autoplay.autoplay.sets,db={},Ne={},Dc=null;if(Cg){for(var xl=g.q(Cg),Lj=xl.next();!Lj.done;Lj=xl.next()){var Sf=Lj.value.autoplayVideoRenderer;
if(Sf&&Sf.compactVideoRenderer){Dc=Sf.compactVideoRenderer;break}}var xx=Cg[0].autoplayVideo;if(xx){var Fr=xx.clickTrackingParams;Fr&&(db.itct=Fr);db.autonav="1";db.playnext=String(sd)}}else db.feature="related-auto";if(Dc){Ne.autonav="1";Ne.video_id=Dc.videoId;var yx=Dc.shortBylineText;yx&&(Ne.author=g.gw(yx));var zx=Dc.title;zx&&(Ne.title=g.gw(zx))}Ne.endscreen_autoplay_session_data=g.Md(db);a.suggestions=[Ne]}}var nf=Ua.twoColumnWatchNextResults}a.VN=!(null===(c=null===nf||void 0===nf?void 0:nf.autoplay)||
void 0===c||!c.autoplay);var wh=a.watchNextResponse.playerOverlays;if(wh){var hc=wh.playerOverlayRenderer;if(hc){var Ax=hc.endScreen;if(Ax){var yl=Ax.watchNextEndScreenRenderer;if(yl)var zl=yl.results}var Gr=hc.videoDetails;if(Gr){var Bx=Gr.embeddedPlayerOverlayVideoDetailsRenderer;var Oe=Gr.musicEmbeddedPlayerOverlayVideoDetailsRenderer;Oe&&(a.Yy=Oe.title,a.Xy=Oe.byline)}var Cx=hc.actions;if(Cx)for(var Dx=g.q(Cx),Hr=Dx.next();!Hr.done;Hr=Dx.next()){var Ex=Hr.value;Ex.likeButtonRenderer&&(a.likeButtonRenderer=
Ex.likeButtonRenderer)}var eo=null===(e=null===(d=hc.suggestedActionsRenderer)||void 0===d?void 0:d.suggestedActionsRenderer)||void 0===e?void 0:e.suggestedActions;if(eo)for(var Fx=g.q(eo),Ir=Fx.next();!Ir.done;Ir=Fx.next()){var Gx=Ir.value;if(null===(h=null===(f=Gx.suggestedActionRenderer)||void 0===f?void 0:f.trigger)||void 0===h?0:h.suggestedActionTimeRangeTrigger)a.tE=Gx.suggestedActionRenderer}var fo=null===(l=hc.decoratedPlayerBarRenderer)||void 0===l?void 0:l.decoratedPlayerBarRenderer;fo&&
(a.multiMarkersPlayerBarRenderer=null===(m=fo.playerBar)||void 0===m?void 0:m.multiMarkersPlayerBarRenderer,a.Uy=null===(p=null===(n=fo.playerBar)||void 0===n?void 0:n.chapteredPlayerBarRenderer)||void 0===p?void 0:p.chapters,a.wO=null===(r=fo.playerBarActionButton)||void 0===r?void 0:r.buttonRenderer);g.DD(a.B)&&(a.Kd=!!hc.addToMenu);Dia(a,hc.shareButton);var Hx=hc.productsInVideoOverlayRenderer;Hx&&(a.shoppingOverlayRenderer=Hx.shoppingOverlayRenderer);var Ix=hc.autoplay;if(Ix)var of=Ix.playerOverlayAutoplayRenderer}}if(!zl&&
nf){var Jx=nf.endScreen&&nf.endScreen.endScreen;Jx&&(zl=Jx.results)}if(nf){var go=nf.desktopOverlay&&nf.desktopOverlay.desktopOverlayConfigRenderer;go&&(go.suppressShareButton&&(a.showShareButton=!1),go.suppressWatchLaterButton&&(a.Kd=!1))}Bx&&Eia(a,b,Bx);var Kx=oD(0,b.autoplay_count);if(zl){for(var Lx=nf||null,QE=of||null,Jr=[],Al=!0,Mx=g.q(zl),Kr=Mx.next();!Kr.done;Kr=Mx.next()){var ho=Kr.value,Mc=void 0,Nc=null;if(ho.endScreenVideoRenderer){var Dg=ho.endScreenVideoRenderer,Lr=Dg.title;Nc={id:Dg.videoId,
length_seconds:Dg.lengthInSeconds};var Nx=Dg.publishedTimeText;Nx&&(Nc.publishedTimeText=g.gw(Nx));var Ox=Dg.shortBylineText;Ox&&(Nc.author=g.gw(Ox));var Px=Dg.shortViewCountText;Px&&(Nc.short_view_count_text=g.gw(Px));if(Lr){Nc.title=g.gw(Lr);var Qx=Lr.accessibility;if(Qx){var Mr=Qx.accessibilityData;Mr&&Mr.label&&(Nc.aria_label=Mr.label)}}var Nr=Dg.navigationEndpoint;if(Nr){Mc=Nr.clickTrackingParams;var Rx=Nr.watchEndpoint;Rx&&(Nc.Qz=Rx)}var Sx=Dg.thumbnailOverlays;if(Sx)for(var Tx=g.q(Sx),Or=Tx.next();!Or.done;Or=
Tx.next()){var Pr=Or.value.thumbnailOverlayTimeStatusRenderer;if(Pr)if("LIVE"===Pr.style){Nc.live_playback="1";break}else if("UPCOMING"===Pr.style){Nc.isUpcoming=!0;break}}var RE=tF(Dg.thumbnail),Bl=pF(RE);Bl.iurlmq&&(Bl={iurlmq:Bl.iurlmq,iurlhq:Bl.iurlmq});Object.assign(Nc,Bl)}else if(ho.endScreenPlaylistRenderer){var zi=ho.endScreenPlaylistRenderer,Qr=zi.navigationEndpoint;if(!Qr)continue;var Ux=Qr.watchEndpoint;if(!Ux)continue;var Vx=Ux.videoId;Nc={list:zi.playlistId,video_id:Vx,playlist_length:zi.videoCount,
thumbnail_ids:Vx};var Wx=zi.title;Wx&&(Nc.playlist_title=g.gw(Wx));var Xx=zi.shortBylineText;Xx&&(Nc.playlist_author=g.gw(Xx));Mc=Qr.clickTrackingParams;var Pe=tF(zi.thumbnail);Object.assign(Nc,pF(Pe))}Nc&&(Nc.session_data=g.Md({itct:Mc}),Al?(Fia(Nc,Lx,QE,Kx),Jr.splice(0,0,Nc),Al=!1):Jr.push(Nc))}a.suggestions=Jr}if(of){a.XC=!!of.preferImmediateRedirect;a.Mb=a.Mb||!!of.webShowNewAutonavCountdown;a.Df=a.Df||!!of.webShowBigThumbnailEndscreen;if(a.Mb||a.Df){var Qe=of,Yx=zl||null,SE=nf||null,io,Rr,Jd=
{id:Qe.videoId},Mj=null===(Rr=null===(io=null===Yx||void 0===Yx?void 0:Yx[0])||void 0===io?void 0:io.endScreenVideoRenderer)||void 0===Rr?void 0:Rr.navigationEndpoint;Mj&&(Jd.session_data=g.Md({itct:Mj.clickTrackingParams}));var Kd=Qe.videoTitle;if(Kd){Jd.title=g.gw(Kd);var Nj=Kd.accessibility;if(Nj){var Sr=Nj.accessibilityData;Sr&&Sr.label&&(Jd.aria_label=Sr.label)}}var Zx=Qe.byline;Zx&&(Jd.author=g.gw(Zx));var $x=Qe.publishedTimeText;$x&&(Jd.publishedTimeText=g.gw($x));var ay=Qe.shortViewCountText;
ay&&(Jd.short_view_count_text=g.gw(ay));var by=Qe.thumbnailOverlays;if(by)for(var Tr=g.q(by),Ur=Tr.next();!Ur.done;Ur=Tr.next()){var Eg=Ur.value.thumbnailOverlayTimeStatusRenderer;if(Eg)if("LIVE"===Eg.style){Jd.live_playback="1";break}else if("UPCOMING"===Eg.style){Jd.isUpcoming=!0;break}else if("DEFAULT"===Eg.style&&Eg.text){Jd.lengthText=g.gw(Eg.text);var cy=Eg.text.accessibility;if(cy){var Vr=cy.accessibilityData;Vr&&Vr.label&&(Jd.hw=Vr.label)}break}}var TE=tF(Qe.background),Ai=pF(TE);Ai.iurlmq&&
(Ai={iurlmq:Ai.iurlmq,iurlhq:Ai.iurlmq});Object.assign(Jd,Ai);var dy=Qe.nextButton;if(dy){var ey=dy.buttonRenderer;if(ey){var fy=ey.navigationEndpoint;if(fy){var jo=fy.watchEndpoint;jo&&(Jd.Qz=jo)}}}if(Qe.topBadges){var gy=Qe.topBadges[0];if(gy){var Wr=gy.metadataBadgeRenderer;Wr&&"BADGE_STYLE_TYPE_PREMIUM"==Wr.style&&(Jd.wx=!0)}}var Xr=Qe.alternativeTitle;Xr&&(Jd.Jr=g.gw(Xr));Fia(Jd,SE,Qe,Kx);a.suggestions||(a.suggestions=[]);a.suggestions[0]=Jd}null!=of.countDownSecs&&(a.yE=1E3*of.countDownSecs)}a.watchNextResponse.currentVideoThumbnail&&
(a.Bb=tF(a.watchNextResponse.currentVideoThumbnail));if(!a.Z("player_parse_profile_picture_from_watch_next_killswitch")){var Yr=null===(B=null===(y=null===(x=null===(u=null===(t=a.watchNextResponse)||void 0===t?void 0:t.contents)||void 0===u?void 0:u.twoColumnWatchNextResults)||void 0===x?void 0:x.results)||void 0===y?void 0:y.results)||void 0===B?void 0:B.contents;if(Yr&&Yr[1]){var ko=null===(Q=null===(I=null===(E=null===(H=Yr[1].videoSecondaryInfoRenderer)||void 0===H?void 0:H.owner)||void 0===
E?void 0:E.videoOwnerRenderer)||void 0===I?void 0:I.thumbnail)||void 0===Q?void 0:Q.thumbnails;ko&&ko.length&&(a.gg=ko[ko.length-1].url)}}}};
bG=function(a){return!!(a.u&&a.u.videoInfos&&a.u.videoInfos.length)};
fG=function(a){if(a.Z("html5_single_format_policy")&&a.Zb)return a.Zb;var b=a.La,c=!!a.i&&(VB(a.i)||WB(a.i)||XB(a.i)),d=a.B,e=!!a.i&&a.i.Oj,f=cG(a),h=a.gy;a.isAd();var l=a.isOtf(),m=dG(a,"html5_samsung_vp9_live"),n=new sha;if(g.R(d.experiments,"html5_high_res_logging")||g.R(d.experiments,"html5_logging_format_selection"))n.i=!0;n.La=f;n.xa=h&&d.u;wq("windows nt 5.1")&&!g.JC&&(n.u=!0);if(f=c)f=d.Z("disable_html5_ambisonic_audio")||!(g.iE(d)||d.Z("html5_enable_spherical")||d.Z("html5_enable_spherical3d"))?
!1:Nha(d);f&&(n.Fa=!0);b&&(n.u=!0,n.kb=!0);l&&!g.R(d.experiments,"html5_otf_prefer_vp9")&&(n.u=!0);wx(d.B,ly.CHANNELS)&&(g.R(d.experiments,"html5_enable_aac51")&&(n.ra=!0),g.R(d.experiments,"html5_enable_ac3")&&(n.V=!0),g.R(d.experiments,"html5_enable_eac3")&&(n.X=!0),g.R(d.experiments,"html5_enable_ac3_gapless")&&(n.ya=!0));g.R(d.experiments,"html5_block_8k_hfr")&&(n.Ua=!0);g.R(d.experiments,"html5_prefer_uhd_sfr")&&(n.ub=!0);n.C=g.S(d.experiments,"html5_max_selectable_quality_ordinal");n.G=g.S(d.experiments,
"html5_min_selectable_quality_ordinal");!g.R(d.experiments,"html5_kaios_hd_killswitch")&&vD&&(n.Ya=480);if(e||c)n.Na=!1;n.Ta=!1;b=zC(d,n.l);0<b&&2160>b&&(HB()||g.R(d.experiments,"html5_format_hybridization"))&&(n.l.supportsChangeType=+HB(),n.J=b);2160<=b&&(n.ib=!0);xC()&&(n.l.serveVp9OverAv1IfHigherRes=0,n.zb=!1);n.Bb=m;m=g.mt||Lq()&&!m?!1:!0;n.Da=m;n.ma=g.R(d.experiments,"html5_format_hybridization");n.Za=g.R(d.experiments,"html5_offline_av1_fallback");n.Y=g.R(d.experiments,"html5_disable_codec_on_errors_with_exp_backoff");
n.Xa=g.R(d.experiments,"html5_disable_codec_on_platform_errors");Aq()&&a.playerResponse&&a.playerResponse.playerConfig&&a.playerResponse.playerConfig.webPlayerConfig&&a.playerResponse.playerConfig.webPlayerConfig.useCobaltTvosDogfoodFeatures&&(n.V=!0,n.X=!0);a.Gp&&(n.L=a.Gp);a.Fp&&(n.B=a.Fp);n.Ea=a.isLivePlayback&&eG(a)&&a.B.Z("html5_drm_live_audio_51");return a.Zb=n};
Hia=function(a){a.Pb||a.i&&my(a.i);var b={};a.i&&(b=ux(fG(a),a.B.B,a.i,function(c){return a.W("ctmp","fmtflt",c)}));
b=new MC(b,a.B.experiments,a.oE,Gia(a),function(c,d){a.Ja(c,d)});
g.G(a,b);a.hk=!1;a.Y=!0;vha(b,function(c){for(var d=g.q(c),e=d.next();!e.done;e=d.next())switch(e=e.value,e.flavor){case "fairplay":e.l=a.Pb;e.J=a.XM;e.G=a.GM;break;case "widevine":e.B=a.sE}a.cf=c;if(0<a.cf.length&&(a.G=a.cf[0],g.gG(a))){c=[];d=g.q(Object.entries(a.G.i));for(e=d.next();!e.done;e=d.next()){var f=g.q(e.value);e=f.next().value;f=f.next().value;var h="unk";(e=e.match(/(.*)codecs="(.*)"/))&&(h=e[2]);c.push(h+"_"+f)}a.Ja("drmProbe",c.join("."))}TF(a)})};
Jia=function(a,b){var c;(c=!b)||(c=!(!aG(a)&&a.adaptiveFormats));if(c)return null;dG(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(cC=!0);c=hG(b);b=aC(c,a.Bd,a.lengthSeconds,a.isLivePlayback,a.Ee,a.B.experiments);0<c.length&&(c=c[0],c.url&&c.sp&&c.s&&(c=$B(c.url,c.sp,c.s),c=Number(c.get("max_sq"))||Infinity,isFinite(c)&&(a.gk=!0)));if(c=b.isManifestless)c=!(a.Z("html5_manifestless_vp9")||a.Z("html5_manifestless_vp9_normal_latency")&&(!a.isLowLatencyLiveStream||"NORMAL"==a.latencyClass)||!Iia(b));
return c?(b.dispose(),null):b};
Cia=function(a,b){b=Jia(a,b);if(!b)return!1;iG(a,b);return!0};
aG=function(a){return Aq()?!jG(a):Eq()?!(!a.Pb||!a.Z("html5_enable_safari_fairplay")):!1};
jG=function(a){return dG(a,"html5_enable_tvos_dash_dogfood")||a.Z("html5_enable_tvos_dash")&&(a.Z("html5_tvos_skip_dash_audio_check")||MediaSource.isTypeSupported('audio/webm; codecs="opus"'))};
Gia=function(a){return a.useCobaltWidevine?Aq()?jG(a):dG(a,"html5_enable_androidtv_cobalt_widevine")&&wq("cobalt")&&wq("android")?!0:!1:!1};
Iia=function(a){return a.isManifestless&&oB('video/webm; codecs="vp9"')&&g.Eb(a.i,function(b){return fB(b.info)})};
kG=function(a){return!(!a.i||!a.i.isManifestless)};
Kia=function(a){if(!fx())return!1;if(a.Z("html5_streaming_debug"))return!0;if(g.mt)return!1;if(g.zq()){var b=vq();if(16<=b&&17>b)return!1}return!kG(a)||"ULTRALOW"!=a.latencyClass&&21530001!=lG(a)?window.AbortController?a.Z("html5_streaming_xhr")||a.Z("html5_streaming_xhr_manifestless")&&kG(a)?!0:!1:!1:!0};
Lia=function(a){return sy({hasSubfragmentedFmp4:a.hasSubfragmentedFmp4,Hj:a.Hj,defraggedFromSubfragments:a.defraggedFromSubfragments,isManifestless:kG(a),lC:Kia(a)})};
lG=function(a){return a.isLowLatencyLiveStream&&void 0!=a.i&&5<=nC(a.i)?21530001:a.liveExperimentalContentId};
Aia=function(a){return Aq()&&jG(a)?!1:!QC()||a.EG?!0:!1};
Nia=function(a){a.Y=!0;a.Wb=!1;if(Bia(a))hia(a.videoId).then(function(d){Mia(a,d)}).then(function(){TF(a)});
else{Qv(a.Fa)||g.Tu(new g.Cs("DASH MPD Origin invalid: ",a.Fa));var b=a.Fa,c=g.S(a.B.experiments,"dash_manifest_version")||4;b=g.Od(b,{mpd_version:c});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(b=g.Od(b,{pacing:0}));kha(b,a.B.experiments,a.isLivePlayback).then(function(d){a.Ha()||(iG(a,d,!0),Xw("mrc",void 0,a.Xa),TF(a))},function(d){a.Ha()||(a.Y=!1,a.W("dataloaderror",new g.CB("manifest.net.retryexhausted",!0,{backend:"manifest",
rc:d.status})))});
Xw("mrs",void 0,a.Xa)}};
Mia=function(a,b){var c=b.map(function(e){return e.itag}),d=a.playerResponse.streamingData.adaptiveFormats.filter(function(e){return c.includes(e.itag)}).map(function(e){e=Object.assign({},e);
e.url=b.find(function(f){return f.itag===e.itag}).url;
e.signatureCipher="";return BF(e)}).join(",");
d=Jia(a,d);iG(a,d);a.Ja("dlr","")};
TF=function(a){a.Ha()||(a.Y=!1,a.W("dataloaded"))};
iG=function(a,b,c){c=void 0===c?!1:c;a.i=b;g.G(a,b);b.Nd=a.Nd;b.ag=a.ag;b.J=a.jE;b.G=a.hE;g.R(a.B.experiments,"html5_start_walltime_min_seekable_killswitch")||(b.Y=a.qE);Oia(a)&&a.X.push("webgl");a.i.isLive||(a.isLivePlayback=!1);var d=b.sourceUrl.split("/");-1!=d.indexOf("manifest_duration")&&(a.Ze=Number(d[d.indexOf("manifest_duration")+1]));b.u&&(b.subscribe("clienttemp",a.Ja,a),c?b.subscribe("refresh",a.yH,a):b.subscribe("cuepointsadded",a.eF,a));my(b)&&(a.hk=!0)};
eG=function(a){return a.Bd?!0:!!a.i&&my(a.i)};
Tia=function(a,b){if(a.Ha())return Dp();a.u=null;a.Ea=null;a.ib=null;var c=a.B.deviceParams.c;a.Z("disable_rqs")||(a.kb=/^rq/.test(a.clientPlaybackNonce)||/^r/.test(a.clientPlaybackNonce)&&/UNPLUGGED/.test(c)||g.gG(a));return Pia(a,b).then(void 0,function(){return Qia(a,b)}).then(void 0,function(){return Ria(a)}).then(void 0,function(){return Sia(a)})};
Pia=function(a,b){b=b||Aia(a);return a.i&&!b?(cG(a)&&oha(a.i,a.isLivePlayback),dG(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(a.B.B.l=!0),Uia(a).then(function(){return xga(fG(a),a.B.B,a.i,a.G,function(c){return a.W("ctmp","fmtflt",c)},a.Z("html5_dynamic_av1_hybrid_threshold")).then(function(c){Via(a,c);
/^av/.test(a.clientPlaybackNonce)&&a.Zb&&a.Ja("av1",g.DB(a.Zb.l))})})):Dp()};
Uia=function(a){if(!a.i||!a.i.i||!a.Z("html5_use_media_capability"))return Ep();for(var b=[],c=g.q(Object.keys(a.i.i)),d=c.next();!d.done;d=c.next())(d=a.i.i[d.value])&&d.info&&b.push(d.info);return OF(b)};
Qia=function(a,b){var c;if(b&&a.hlsvp)return Dp();if(a.hlsFormats){b=hG(a.hlsFormats);if((null===(c=a.Zb)||void 0===c?0:c.i)&&b){for(var d=[],e=g.q(b),f=e.next();!f.done;f=e.next())d.push(f.value.itag);a.Ja("hlsfmt",d.join("."))}a.pn=Rha(a.B,b);d=a.clientPlaybackNonce;return Vha(a.B,a.isAd(),b,a.Oh,d,function(h){return a.W("ctmp","hlsflt",h)}).then(function(h){for(var l,m,n,p,r=0,t=[],u=g.q(h),x=u.next();!x.done;x=u.next())x=x.value,t.push(null===(l=x.Ne())||void 0===l?void 0:l.kc()),(null===(n=null===
(m=x.Ne())||void 0===m?void 0:m.audio)||void 0===n?void 0:n.i)>r&&(r=x.Ne().audio.i);
2<r&&a.Ja("hlschl",""+r);(null===(p=a.Zb)||void 0===p?0:p.i)&&a.Ja("hlsfmtaf",t.join("."));mG(a,h)})}return Dp()};
Ria=function(a){return a.Jf&&a.vJ?Yha(a.B,a.isAd(),a.Jf).then(function(b){mG(a,b)}):Dp()};
Sia=function(a){var b=hG(a.mj,a.iz);if(a.hlsvp){var c=via(a.hlsvp,a.clientPlaybackNonce,a.Oh);b.push(c)}return Wha(a.B,a.isAd(),b,Wia(a)).then(function(d){mG(a,d)})};
Via=function(a,b){a.u=b;b=a.getAvailableAudioTracks();b=b.concat(a.Zh);for(var c=0;c<a.Sy.length;c++)for(var d=a.Sy[c],e=0;e<b.length;e++){var f=b[e],h=f.Jc.id==d.audioTrackId;if(f.Jc.isDefault&&c==a.CE||h){if(d.captionTrackIndices)for(h=0;h<d.captionTrackIndices.length;h++)f.captionTracks[h]=a.captionTracks[d.captionTrackIndices[h]];void 0!==d.defaultCaptionTrackIndex&&(f.u=a.captionTracks[d.defaultCaptionTrackIndex]);void 0!==d.forcedCaptionTrackIndex&&(f.i=a.captionTracks[d.forcedCaptionTrackIndex]);
f.l=d.visibility||"UNKNOWN";f.captionsInitialState=d.captionsInitialState||"CAPTIONS_INITIAL_STATE_UNKNOWN"}}if(a.G&&a.u&&a.u.videoInfos&&!(0>=a.u.videoInfos.length)&&(b=iB(a.u.videoInfos[0]),b!=("fairplay"==a.G.flavor)))for(c=g.q(a.cf),d=c.next();!d.done;d=c.next())if(d=d.value,b==("fairplay"==d.flavor)){a.G=d;break}};
mG=function(a,b){a.ib=b;Via(a,new qx(g.Pc(a.ib,function(c){return c.Ne()})))};
Wia=function(a){var b={cpn:a.clientPlaybackNonce,c:a.B.deviceParams.c,cver:a.B.deviceParams.cver};a.On&&(b.ptk=a.On,b.oid=a.UC,b.ptchn=a.TC,b.pltype=a.VC);return b};
g.nG=function(a){return aG(a)&&a.Pb?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.l&&a.l.Bd||null};
Xia=function(a){var b=a.playerResponse&&a.playerResponse.paidContentOverlay&&a.playerResponse.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.gw(b.text):a.paidContentOverlayText};
oG=function(a){var b=a.playerResponse&&a.playerResponse.paidContentOverlay&&a.playerResponse.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?ud(b.durationMs):a.paidContentOverlayDurationMs};
pG=function(a){var b="";if(a.CB)return a.CB;a.isLivePlayback&&(b=a.allowLiveDvr?"dvr":"live");return b};
g.qG=function(a,b){return"string"!==typeof a.keywords[b]?null:a.keywords[b]};
Yia=function(a){return a.i&&!isNaN(lC(a.i))?lC(a.i):kG(a)?0:a.lengthSeconds};
rG=function(a){return!!(a.Fa||a.adaptiveFormats||a.mj||a.Jf||a.hlsvp)};
SF=function(a){var b=g.fb(a.X,"ypc");a.ypcPreview&&(b=!1);return a.isValid()&&!a.Y&&(rG(a)||g.fb(a.X,"heartbeat")||b)};
hG=function(a,b){a=bp(a);var c={};if(b){b=g.q(b.split(","));for(var d=b.next();!d.done;d=b.next())(d=d.value.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(c[d[1]]={width:d[2],height:d[3]})}b=g.q(a);for(d=b.next();!d.done;d=b.next()){d=d.value;var e=c[d.itag];e&&(d.width=e.width,d.height=e.height)}return a};
Dia=function(a,b){var c,d;a.showShareButton=!!b;if(b=(null===(c=null===b||void 0===b?void 0:b.buttonRenderer)||void 0===c?void 0:c.navigationEndpoint)||(null===(d=null===b||void 0===b?void 0:b.buttonRenderer)||void 0===d?void 0:d.command))a.lj=!!b.copyTextEndpoint};
UF=function(a,b){var c=b.raw_embedded_player_response;if(!c){var d=b.embedded_player_response;d&&(c=JSON.parse(d))}c&&(a.yg=c);if(a.yg){if(c=a.yg.videoFlags)c.playableInEmbed&&(a.allowEmbed=!0),c.isPrivate&&(a.isPrivate=!0),c.userDisplayName&&(b.user_display_name=c.userDisplayName),c.userDisplayImage&&(b.user_display_image=c.userDisplayImage);if(c=a.yg.embedPreview){c=c.thumbnailPreviewRenderer;d=c.controlBgHtml;null!=d?(a.xa=d,a.C=!0):(a.xa="",a.C=!1);if(d=c.defaultThumbnail)a.Bb=tF(d),a.sampledThumbnailColor=
d.sampledThumbnailColor;(d=c.videoDetails&&c.videoDetails.embeddedPlayerOverlayVideoDetailsRenderer)&&Eia(a,b,d);if(d=c.videoDetails&&c.videoDetails.musicEmbeddedPlayerOverlayVideoDetailsRenderer)a.Yy=d.title,a.Xy=d.byline,d.musicVideoType&&(a.musicVideoType=d.musicVideoType);a.Kd=!!c.addToWatchLaterButton;Dia(a,c.shareButton);if(c.playButton&&c.playButton.buttonRenderer&&c.playButton.buttonRenderer.navigationEndpoint&&(d=c.playButton.buttonRenderer.navigationEndpoint,d.watchEndpoint)){var e=d.watchEndpoint;
e.watchEndpointSupportedOnesieConfig&&e.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig&&(a.xn=new kia(e.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig));a.videoId=d.watchEndpoint.videoId||a.videoId}c.videoDurationSeconds&&(a.lengthSeconds=ud(c.videoDurationSeconds));a.Z("web_player_include_innertube_commands")&&c.webPlayerActionsPorting&&zF(a,c.webPlayerActionsPorting);if(c.playlist&&c.playlist.playlistPanelRenderer){c=c.playlist.playlistPanelRenderer;d=[];e=Number(c.currentIndex);
if(c.contents)for(var f=0,h=c.contents.length;f<h;f++){var l=c.contents[f].playlistPanelVideoRenderer;if(l){var m=l.shortBylineText?g.gw(l.shortBylineText):"",n=l.title?g.gw(l.title):"";d.push({author:m,encrypted_id:l.videoId,title:n,channel_path:f===e?b.channel_path:"",profile_picture:f===e?b.profile_picture:"",is_private:f===e?a.isPrivate:!1,is_dni:f===e?a.C:!1,dni_color:f===e?a.xa:""})}}b={index:c.currentIndex,list:c.playlistId,playlist_length:c.totalVideos,video:d};c.titleText&&(b.title=g.gw(c.titleText));
c.shortBylineText&&(b.author=g.gw(c.shortBylineText));a.FG=b}}if(a.Z("embeds_enable_playability_on_web_preview")&&a.yg.previewPlayabilityStatus){a.Qn=a.yg.previewPlayabilityStatus;b=a.Qn;var p;if(!["OK"].includes(b.status)){c=b.errorScreen;if(d=null===c||void 0===c?void 0:c.playerErrorMessageRenderer){a.Vy=d;if(e=d.reason)a.errorReason=g.gw(e);if(d=d.subreason)a.Eh=g.gw(d)}else a.errorReason=b.reason||null;switch(b.status){case "LOGIN_REQUIRED":a.errorDetail="1";break;case "CONTENT_CHECK_REQUIRED":a.errorDetail=
"2";break;case "AGE_CHECK_REQUIRED":(null===(p=null===c||void 0===c?void 0:c.playerKavRenderer)||void 0===p?0:p.kavUrl)?a.errorDetail="4":a.errorDetail="3";break;default:a.errorDetail=b.isBlockedInRestrictedMode?"5":"0"}}}else a.yg.playabilityStatus&&(a.bj=a.yg.playabilityStatus,Zia(a)&&(a.errorDetail="0",a.bj&&(p=a.bj.embeddedPlayerErrorMessageRenderer)))&&(a.Vy=p.embeddedPlayerErrorMessageRenderer);(p=a.yg.attestation)&&xF(a,p)}};
Fia=function(a,b,c,d){d={autonav:1,playnext:d};a.list&&(d.autoplay="1");if(b){if(b=b.autoplay)if(b=b.autoplay)if(b=b.sets)if(b=b[0])if(b=b.autoplayVideo)if((c=b.clickTrackingParams)&&(d.itct=c),b=b.watchEndpoint)a.autonav_watch_endpoint=b}else c&&(b=c.nextButton)&&(b=b.buttonRenderer)&&(b=b.navigationEndpoint)&&b.clickTrackingParams&&(d.itct=b.clickTrackingParams);d.itct||(d.feature="related-auto");a.endscreen_autoplay_session_data=g.Md(d)};
Eia=function(a,b,c){var d=c.channelThumbnail;d&&(d=d.thumbnails)&&(d=d[0])&&(b.profile_picture=d.url);if(d=c.channelThumbnailEndpoint&&c.channelThumbnailEndpoint.channelThumbnailEndpoint)if(d=d.urlEndpoint&&d.urlEndpoint.urlEndpoint)b.channel_path=d.url;if(d=c.collapsedRenderer)if(d=d.embeddedPlayerOverlayVideoDetailsCollapsedRenderer){var e=d.title;e&&(b.title=g.gw(e));if(d=d.subtitle)b.subtitle=g.gw(d)}if(c=c.expandedRenderer)if(c=c.embeddedPlayerOverlayVideoDetailsExpandedRenderer){if(d=c.title)b.expanded_title=
g.gw(d);if(d=c.subtitle)b.expanded_subtitle=g.gw(d);if(c=c.subscribeButton)if(c=c.subscribeButtonRenderer)b.ucid=c.channelId,b.subscribed=c.subscribed,a.Ff=!!c.notificationPreferenceToggleButton,c.notificationPreferenceToggleButton&&c.notificationPreferenceToggleButton.toggleButtonRenderer&&(b=c.notificationPreferenceToggleButton.toggleButtonRenderer,b.isToggled?(a.ey=b.toggledServiceEndpoint||null,a.dy=b.defaultServiceEndpoint||null):(a.ey=b.defaultServiceEndpoint||null,a.dy=b.toggledServiceEndpoint||
null))}};
g.sG=function(a){return a.isLivePlayback&&!a.allowLiveDvr};
tG=function(a){return a.isLivePlayback&&a.allowLiveDvr};
g.uG=function(a){return!!a.i&&VB(a.i)};
g.vG=function(a){return!!a.i&&WB(a.i)};
Oia=function(a){return g.vG(a)||g.uG(a)||g.wG(a)||g.xG(a)};
g.xG=function(a){return!!a.i&&XB(a.i)};
g.wG=function(a){return!!a.i&&dha(a.i)};
$ia=function(a){a.u=a.u.l};
g.aja=function(a){if(a.Yx)return null;var b=a.MJ;b||(b=a.playerResponse&&a.playerResponse.endscreen&&a.playerResponse.endscreen.endscreenUrlRenderer&&a.playerResponse.endscreen.endscreenUrlRenderer.url);return b||null};
g.bja=function(a){return a.Yx?null:a.playerResponse&&a.playerResponse.endscreen&&a.playerResponse.endscreen.endscreenRenderer||null};
g.yG=function(a){return a.playerResponse&&a.playerResponse.cards&&a.playerResponse.cards.cardCollectionRenderer||null};
g.zG=function(a){if(!a.playerResponse||!a.playerResponse.annotations)return null;a=g.q(a.playerResponse.annotations);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.playerAnnotationsExpandedRenderer&&b.playerAnnotationsExpandedRenderer.featuredChannel)return b.playerAnnotationsExpandedRenderer;return null};
AG=function(a){return a.adFormat&&"1_5"!=a.adFormat?"adunit":a.B.ya};
BG=function(a){if(a.isAd()&&a.videoId!=a.B.Bb)return a.B.Bb};
CG=function(a){return a.Xj||"detailpage"==AG(a)||"shortspage"==AG(a)||a.mutedAutoplay};
DG=function(a){if(CG(a)){if("detailpage"==AG(a))return a.Kj||0<a.Ya;if(!("17_8"===a.adFormat&&!a.Kj||g.R(a.B.experiments,"embeds_enable_autoplayblocked_ping_fix")&&a.BE||"adunit"==AG(a)&&a.df))return!0}return!1};
cja=function(a){var b=1,c=g.S(a.B.experiments,"html5_default_ad_gain");c&&a.isAd()&&(b=c);c=a.gj;a.u&&a.u.i&&a.u.i[0]&&a.JB[a.u.i[0].id]&&(c=a.JB[a.u.i[0].id]);if(a.Z("html5_stateful_audio_normalization")&&null!=c){if(a.rE)return Math.min(1,Math.pow(10,-a.Ep/20))||b;var d=0;g.R(a.B.experiments,"html5_diff_bias_over_ad_content")&&(d=a.isAd()?0:3);c-=Math.min(0,d+Math.max(a.B.Df,g.S(a.B.experiments,"html5_stateful_audio_min_adjustment_value")));a.Ep=c}return Math.min(1,Math.pow(10,-c/20))||b};
cG=function(a){var b=["MUSIC_VIDEO_TYPE_ATV","MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"],c="TVHTML5_SIMPLY"===a.B.deviceParams.c&&"MUSIC"===a.B.deviceParams.ctheme;!a.zc&&(g.GD(a.B)||c)&&b.includes(a.musicVideoType)&&(a.zc=!0);if(b=g.zq())b=/Starboard\/([0-9]+)/.exec(g.Vc),b=10>(b?parseInt(b[1],10):NaN);c=a.B;c=("TVHTML5_CAST"===c.deviceParams.c||"TVHTML5"===c.deviceParams.c&&(c.deviceParams.cver.startsWith("6.20130725")||c.deviceParams.cver.startsWith("6.20130726")))&&"MUSIC"===a.B.deviceParams.ctheme;
!a.zc&&(c||ZD(a.B))&&!b&&(b="MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"===a.musicVideoType,c=(a.Z("cast_prefer_audio_only_for_atv_and_uploads")||a.Z("kabuki_pangea_prefer_audio_only_for_atv_and_uploads"))&&"MUSIC_VIDEO_TYPE_ATV"===a.musicVideoType,b||c)&&(a.zc=!0);return!a.B.deviceHasDisplay||a.zc&&a.B.u};
EG=function(a){return dja(a)&&!!a.adaptiveFormats};
dja=function(a){return!!(a.Z("woffle_orchestration")&&a.Ae&&a.B.u)};
Bia=function(a){if(a.Z("woffle_orchestration")){var b;if(b=!!a.cotn)b=a.videoId,b=!!b&&1===KE(b);a=b&&!a.Ae}else a=!1;return a};
FG=function(a){if(!a.i||!a.l||!a.J)return!1;var b=a.i.i;return!!b[a.l.id]&&By(b[a.l.id].l.i)&&!!b[a.J.id]&&By(b[a.J.id].l.i)};
Zia=function(a){return(a=a.bj)&&a.showError?a.showError:!1};
g.gG=function(a){return a.Z("disable_rqs")?!1:dG(a,"html5_high_res_logging")};
dG=function(a,b){return a.Z(b)?!0:(a.fflags||"").includes(b+"=true")};
eja=function(a){return(a=/html5_log_experiment_id_from_player_response_to_ctmp=([0-9]+)/.exec(a.fflags))?a[1]:null};
ZF=function(a,b){if(b=b.video_masthead_ad_quartile_urls)a.HC=b.quartile_0_url,a.aD=b.quartile_25_url,a.bD=b.quartile_50_url,a.cD=b.quartile_75_url,a.ZC=b.quartile_100_url,a.ao=b.quartile_0_urls,a.RC=b.quartile_25_urls,a.SC=b.quartile_50_urls,a.Vx=b.quartile_75_urls,a.QC=b.quartile_100_urls};
$F=function(a){return a?QC()?!0:GG&&5>HG?!1:!0:!1};
YF=function(a){var b={};a=g.q(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.split("=");2==d.length?b[d[0]]=d[1]:b[c]=!0}return b};
yF=function(a){if(a){if(Tv(a))return a;a=Uv(a);if(Tv(a,!0))return a}return""};
IG=function(a,b){this.i=a;this.Fa=b||{};this.L=String(Math.floor(1E9*Math.random()));this.J={};this.V=0};
fja=function(a){switch(a){case "fully_viewable_audible_half_duration_impression":return"adfullyviewableaudiblehalfdurationimpression";case "measurable_impression":return"adactiveviewmeasurable";case "overlay_unmeasurable_impression":return"adoverlaymeasurableimpression";case "overlay_unviewable_impression":return"adoverlayunviewableimpression";case "overlay_viewable_end_of_session_impression":return"adoverlayviewableendofsessionimpression";case "overlay_viewable_immediate_impression":return"adoverlayviewableimmediateimpression";
case "viewable_impression":return"adviewableimpression";default:return null}};
JG=function(){g.O.call(this);var a=this;this.i={};g.Hi(this,function(){return Object.keys(a.i).forEach(function(b){return delete a.i[b]})})};
LG=function(){if(null===KG){KG=new JG;jl.getInstance().i="b";var a=jl.getInstance(),b="h"==Qk(a)||"b"==Qk(a),c=!(th.getInstance(),!1);b&&c&&(a.C=!0,a.G=new Fca)}return KG};
gja=function(a,b,c){a.i[b]=c};
hja=function(a){this.u=a;this.l={};this.i=Uf()?500:g.PD(a.T())?1E3:2500};
jja=function(a,b){if(!b.length)return null;b=b.filter(function(c){if(!c.mimeType)return!1;c.mimeType in a.l||(a.l[c.mimeType]=a.u.canPlayType(c.mimeType));return a.l[c.mimeType]?!!c.mimeType&&"application/x-mpegurl"==c.mimeType.toLowerCase()||!!c.mimeType&&"application/dash+xml"==c.mimeType.toLowerCase()||"PROGRESSIVE"==c.delivery:!1});
return ija(a,b)};
ija=function(a,b){for(var c=null,d=g.q(b),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.minBitrate,h=e.maxBitrate;f>a.i||h<a.i||c&&!(f<c.minBitrate)||(c=e)}if(!c)for(c=null,d=g.q(b),e=d.next();!e.done;e=d.next())e=e.value,f=e.maxBitrate,h=e.minBitrate,f>a.i||(!c||f>c.maxBitrate?c=e:c&&f==c.maxBitrate&&h<c.minBitrate&&(c=e));if(!c)for(c=null,b=g.q(b),d=b.next();!d.done;d=b.next())d=d.value,e=d.minBitrate,f=d.maxBitrate,e<a.i||(!c||e<c.minBitrate?c=d:c&&e==c.minBitrate&&f>c.maxBitrate&&(c=d));return c};
MG=function(a,b,c){this.i=a;this.C=b;this.u=c;this.l=b.length;this.adBreakLengthSeconds=b.reduce(function(d,e){return d+e},0);
c=0;for(a+=1;a<b.length;a++)c+=b[a];this.adBreakRemainingLengthSeconds=c};
NG=function(a){return new Map([["impression",a.impressionPings||[]],["error",a.errorPings||[]],["mute",a.mutePings||[]],["unmute",a.unmutePings||[]],["pause",a.pausePings||[]],["rewind",a.rewindPings||[]],["resume",a.resumePings||[]],["skip",a.skipPings||[]],["close",a.closePings||[]],["progress",a.progressPings||[]],["clickthrough",a.clickthroughPings||[]],["fullscreen",a.fullscreenPings||[]],["active_view_viewable",a.activeViewViewablePings||[]],["active_view_measurable",a.activeViewMeasurablePings||
[]],["active_view_fully_viewable_audible_half_duration",a.activeViewFullyViewableAudibleHalfDurationPings||[]],["end_fullscreen",a.endFullscreenPings||[]],["channel_clickthrough",a.channelClickthroughPings||[]],["abandon",a.abandonPings||[]],["start",a.startPings||[]],["first_quartile",a.firstQuartilePings||[]],["midpoint",a.secondQuartilePings||[]],["third_quartile",a.thirdQuartilePings||[]],["complete",a.completePings||[]]])};
kja=function(a){return(a=a.pings)?Object.fromEntries(NG(a)):{}};
OG=function(a,b,c,d,e){IG.call(this,a,kja(a));(a=c&&c.kind)||(a="AD_PLACEMENT_KIND_UNKNOWN");this.La=c;this.isPostroll="AD_PLACEMENT_KIND_END"===a;this.u=new MG(0,[]);this.G=this.ya=null;this.Na=b;this.Da=[];this.C={};this.xa=null;this.l=0;this.X=this.ma=this.B=null;this.ra=e;this.Y=null;b=this.i.skipOffsetMilliseconds||0;0<b&&(this.xa=b);this.C=ap(this.i.playerVars||"");if(b=this.i.external)this.Da=b.mediaFiles||[],b=b.durationMilliseconds,"number"===typeof b&&(this.l=b/1E3,this.C.length_seconds=
this.l.toString()),(b=jja(this.Na,this.Da))?(this.ma=b.uri,b=b.mimeType,this.C.url_encoded_third_party_media="url="+encodeURIComponent(this.ma)+"&type="+encodeURIComponent(b)):this.X=Error("Nonplayable third party ad media file.");else if(this.B=this.i.externalVideoId||null,this.ya=this.C.ucid||null,this.l=oD(this.l,this.C.length_seconds),this.ra&&this.B&&(this.Y=this.ra(this.B)),this.C.cta_conversion_urls)try{this.C.cta_conversion_urls=JSON.parse(this.C.cta_conversion_urls)}catch(f){g.Vo(f)}this.G=
this.i.clickthroughEndpoint||null;this.u=new MG(0,[this.l])};
lja=function(a){var b=a.C||{};1<a.u.l&&(b.slot_pos=a.u.i);b.autoplay="1";return b};
PG=function(a){return 0<a.l&&7.05>=a.l};
QG=function(){this.i=[];this.l=0};
RG=function(a,b){b&&a.i.push(b)};
SG=function(a){if(!a)return[];var b=[];a=g.q(a);for(var c=a.next();!c.done;c=a.next())if(c=c.value,c.loggingUrls){c=g.q(c.loggingUrls);for(var d=c.next();!d.done;d=c.next())b.push({baseUrl:d.value.baseUrl})}return b};
TG=function(a){if(!a)return[];var b=[];a.forEach(function(c){c.command.loggingUrls.forEach(function(d){b.push({baseUrl:d.baseUrl,offsetMilliseconds:c.adVideoOffset.milliseconds})})});
return b};
UG=function(a){return a&&a.adVideoOffset&&a.adVideoOffset.percent||0};
VG=function(a){return"AD_VIDEO_PROGRESS_KIND_PERCENT"==a.adVideoOffset.kind};
mja=function(a){a=a.playbackCommands;if(!a)return{};var b={};b.impression=SG(a.impressionCommands)||[];b.error=SG(a.errorCommands)||[];b.mute=SG(a.muteCommands)||[];b.unmute=SG(a.unmuteCommands)||[];b.pause=SG(a.pauseCommands)||[];b.rewind=SG(a.rewindCommands)||[];b.resume=SG(a.resumeCommands)||[];b.skip=SG(a.skipCommands)||[];b.close=SG(a.closeCommands)||[];b.clickthrough=SG(a.clickthroughCommands)||[];b.fullscreen=SG(a.fullscreenCommands)||[];b.active_view_viewable=SG(a.activeViewViewableCommands)||
[];b.active_view_measurable=SG(a.activeViewMeasurableCommands)||[];b.active_view_fully_viewable_audible_half_duration=SG(a.activeViewFullyViewableAudibleHalfDurationCommands)||[];b.end_fullscreen=SG(a.endFullscreenCommands)||[];b.channel_clickthrough=SG(a.channelClickthroughCommands)||[];b.abandon=SG(a.abandonCommands)||[];b.progress=TG(a.progressCommands.filter(function(c){return"AD_VIDEO_PROGRESS_KIND_MILLISECONDS"==c.adVideoOffset.kind}));
b.start=TG(a.progressCommands.filter(function(c){return VG(c)&&ge(UG(c),0)}));
b.first_quartile=TG(a.progressCommands.filter(function(c){return VG(c)&&ge(UG(c),.25)}));
b.midpoint=TG(a.progressCommands.filter(function(c){return VG(c)&&ge(UG(c),.5)}));
b.third_quartile=TG(a.progressCommands.filter(function(c){return VG(c)&&ge(UG(c),.75)}));
b.complete=TG(a.progressCommands.filter(function(c){return VG(c)&&ge(UG(c),1)}));
return b};
WG=function(a){IG.call(this,a,mja(a));this.l=a.questions?a.questions.reduce(function(b,c){return(c=c.instreamSurveyAdSingleSelectQuestionRenderer||c.instreamSurveyAdMultiSelectQuestionRenderer)?b+(c.surveyAdQuestionCommon.durationMilliseconds||0)/1E3:b},0):0};
nja=function(a,b,c,d){this.id=b;this.Y=a.placementStartPings||[];this.X=a.placementEndPings||[];this.B=d.yd;b=a.config&&a.config.adPlacementConfig;if(!b)throw Error("Malformed AdPlacementRenderer: missing AdPlacementConfig");var e=a.renderer&&a.renderer.adBreakServiceRenderer&&a.renderer.adBreakServiceRenderer||{};this.u=(this.G=e.getAdBreakUrl||"")?0:2;d.i=parseInt(e.prefetchMilliseconds,10)||0;d.visible=!b.hideCueRangeMarker;var f=ew(b,d);if(null==f)d=new bw(b,new Nn(-1,-1),!1,"adcuerange:invalid",
2),d.deactivate(),d=[null,d];else{e=":"+(vo.getInstance().i++).toString(36);var h=d.daiEnabled||d.yd;f=new bw(b,f,d.visible&&!h,"adcuerange:"+e,2);h=null;if(d.yd||0<d.i)if(d=ew(b,d,!0))h=new bw(b,d,!1,"prefetch:"+e,3),f.u=h,h.u=f;d=[h,f]}this.ma=d[0];this.i=d[1];this.l=c;this.J=!1;this.C={};this.V={};this.L=void 0===a.driftRecoveryMs?null:parseInt(a.driftRecoveryMs,10)};
XG=function(a){return"AD_PLACEMENT_KIND_MILLISECONDS"==a.i.i||"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"==a.i.i};
ZG=function(a){var b={};oja(a,b);pja(b);b.LACT=YG(function(){return tq().toString()});
b.VIS=YG(function(){return a.getVisibilityState().toString()});
b.SDKV="h.3.0";b.VOL=YG(function(){return a.isMuted()?"0":Math.round(a.getVolume()).toString()});
b.VED="";return b};
qja=function(a){var b={};if(!a.kind)return g.Su(Error("AdPlacementConfig without kind")),b;if("AD_PLACEMENT_KIND_MILLISECONDS"===a.kind||"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"===a.kind){if(!a.adTimeOffset||!a.adTimeOffset.offsetStartMilliseconds)return g.Su(Error("malformed AdPlacementConfig")),b;b.MIDROLL_POS=YG(Xa(Math.round(ud(a.adTimeOffset.offsetStartMilliseconds)/1E3).toString()))}else b.MIDROLL_POS=YG(Xa("0"));return b};
YG=function(a){return{toString:function(){return a()}}};
rja=function(a,b,c){function d(l,m){(m=b[m])&&(f[l]=m)}
function e(l,m){(m=b[m])&&(f[l]=h(m))}
if(!b||g.Pb(b))return a;var f=Object.assign({},a),h=c?encodeURIComponent:function(l){return l};
e("DV_VIEWABILITY","doubleVerifyViewability");e("IAS_VIEWABILITY","integralAdsViewability");e("MOAT_INIT","moatInit");e("MOAT_VIEWABILITY","moatViewability");d("GOOGLE_VIEWABILITY","googleViewability");d("VIEWABILITY","viewability");return f};
oja=function(a,b){b.CPN=YG(function(){var c;(c=a.getVideoData(1))?c=c.clientPlaybackNonce:(g.Tu(Error("Video data is null.")),c=null);return c});
b.AD_MT=YG(function(){return sja(a,2)});
b.MT=YG(function(){return sja(a,1)});
b.P_H=YG(function(){return a.Wa().Xf().height.toString()});
b.P_W=YG(function(){return a.Wa().Xf().width.toString()});
b.PV_H=YG(function(){return a.Wa().getVideoContentRect().height.toString()});
b.PV_W=YG(function(){return a.Wa().getVideoContentRect().width.toString()})};
sja=function(a,b){a=1E3*a.getCurrentTime(b,!1);return Math.round(Math.max(0,a)).toString()};
pja=function(a){a.CONN=YG(Xa("0"));a.WT=YG(function(){return Date.now().toString()})};
tja=function(a){var b=Object.assign({},{});b.MIDROLL_POS=XG(a)?YG(Xa(Math.round(a.i.start/1E3).toString())):YG(Xa("0"));return b};
uja=function(a){var b={};b.SLOT_POS=YG(Xa(a.u.i.toString()));return b};
vja=function(a,b){var c=b&&-1!=b.indexOf("load_timeout")?"402":"400",d={};return d.YT_ERROR_CODE=a.toString(),d.ERRORCODE=c,d.ERROR_MSG=b,d};
$G=function(a){for(var b={},c=g.q(wja),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];e&&(b[d]=e.toString())}return b};
aH=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c={};Object.assign.apply(Object,[c].concat(g.ma(b)));return c};
bH=function(){};
cH=function(a){this.i=a};
dH=function(a){this.i=a;hp()};
xja=function(a){return eH(a)&&1==a.getPlayerState(2)};
eH=function(a){a=a.Kc();return void 0!==a&&2==a.getPlayerType()};
fH=function(a){a=a.T();return ND(a)&&!g.dE(a)&&"desktop-polymer"==a.playerStyle};
gH=function(a,b){var c=a.T();CD(c)||"3"!=c.controlsType||a.Wa().Lt(b)};
yja=function(a){switch(a){case "abandon":return"abandon";case "active_view_fully_viewable_audible_half_duration":return"fully_viewable_audible_half_duration_impression";case "active_view_measurable":return"measurable_impression";case "active_view_viewable":return"viewable_impression";case "complete":return"complete";case "end_fullscreen":return"exitfullscreen";case "first_quartile":return"firstquartile";case "fullscreen":return"fullscreen";case "impression":return"impression";case "midpoint":return"midpoint";
case "mute":return"mute";case "pause":return"pause";case "progress":return"progress";case "resume":return"resume";case "skip":return"skip";case "start":return"start";case "third_quartile":return"thirdquartile";case "unmute":return"unmute"}return null};
zja=function(a){this.i=a;var b=jl.getInstance(),c=a.Ed();b.B!==c&&((b.B=c)||nda(b));g.R(a.T().experiments,"active_view_stop_starting_measurement_on_loaded")&&Tg(th.getInstance().featureSet,"ssmol",1)};
Aja=function(a,b,c,d,e,f){e=void 0===e?new dH(new cH(d.getVideoData(1))):e;f=void 0===f?!1:f;g.F.call(this);this.l=a;this.J=b;this.u=c;this.i=d;this.V=e;this.G=Array.from(this.l.Fa.progress||[]);this.G.sort(function(h,l){return h.offsetMilliseconds-l.offsetMilliseconds});
this.B={YC:.25,SECOND:.5,pE:.75};this.C=null;this.L=f};
Dja=function(a,b,c){!hH(a)&&0<c&&(iH(a,b),jH(a)?Bja(a,b,c):Cja(a,b,c))};
lH=function(a,b){hH(a)||(jH(a)?(iH(a,0,!0),Bja(a,b,b)):(iH(a,0,!0),Cja(a,0,0,!0)),kH(a,"complete"))};
iH=function(a,b,c){for(c=void 0===c?!1:c;a.l.V<a.G.length;){var d=mH(a,"progress"),e=a.G[a.l.V];if(e.offsetMilliseconds<=1E3*b||c){var f=e.baseUrl;f&&nH(a,f,d,e.headers||[]);a.l.V++}else break}};
Cja=function(a,b,c,d){d=void 0===d?!1:d;(b>=c*a.B.YC||d)&&kH(a,"first_quartile");(b>=c*a.B.SECOND||d)&&kH(a,"midpoint");(b>=c*a.B.pE||d)&&kH(a,"third_quartile")};
oH=function(a,b,c,d){if(null==a.C){if(c<d||1<c-d)return}else if(a.C>d||d>c)return;kH(a,b)};
Bja=function(a,b,c){if(0<c&&0<b){var d=a.i.rb(a.i.getPresentingPlayerType());g.U(d,16)||g.U(d,32)||(oH(a,"first_quartile",b,c*a.B.YC),oH(a,"midpoint",b,c*a.B.SECOND),oH(a,"third_quartile",b,c*a.B.pE))}a.C=b};
pH=function(a,b){for(var c=mH(a,b),d=g.q(a.l.Fa[b]||[]),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.baseUrl;f&&nH(a,f,c,e.headers||[])}a.l.J[b]=!0};
kH=function(a,b){a.l.J.hasOwnProperty(b)||pH(a,b)};
qH=function(a,b){return a.l.J.hasOwnProperty(b)};
nH=function(a,b,c,d){for(var e=a.V,f=e.send,h={},l=ZG(a.i),m=g.q(Object.keys(l)),n=m.next();!n.done;n=m.next())n=n.value,h[n]=l[n].toString();a=Object.assign(h,a.u);f.call(e,b,a,c,d)};
mH=function(a,b){var c=a.J;a=a.l;if(a.Ps())if(b=yja(b),null==b)c={};else{var d;(d=a.Ea()())||(d=(d=c.i)&&d.Kc?(d=d.Kc())&&2==d.getPlayerType()?rH(d):null:null);d?(c={opt_adElement:d,opt_fullscreen:c.i.isFullscreen()},c=ol(b,a.L,c)):c={}}else c={};return c?Object.assign({},c):{}};
jH=function(a){return!g.R(a.i.T().experiments,"html5_bulleit_dai_logging_policy_upg_livestream_killswitch")&&a.L};
hH=function(a){return jH(a)&&!qH(a,"impression")};
Eja=function(a){return jH(a)&&qH(a,"seek")};
tH=function(a,b,c,d,e,f){c=void 0===c?{}:c;this.componentType=a;this.renderer=void 0===b?null:b;this.macros=c;this.layoutId=d;this.i=e;this.l=f;this.id=sH(a)};
sH=function(a){return a+(":"+(vo.getInstance().i++).toString(36))};
uH=function(a){this.i=a};
Fja=function(a,b){var c;if(!(c=0===b)){if(b=1===b)b=g.R(a.i.experiments,"check_ad_ui_status_for_mweb_safari")&&a.i.i&&g.Is?!1:a.i.i||g.dE(a.i)||g.PD(a.i)||QD(a.i)||!g.Is;c=b}if(c)return!0;a=g.te("video-ads");return null!=a&&"none"!==qg(a,"display")};
g.vH=function(a,b){this.state=a;this.Cm=b};
wH=function(a,b){return g.U(a.state,b)&&!g.U(a.Cm,b)?1:!g.U(a.state,b)&&g.U(a.Cm,b)?-1:0};
g.xH=function(a,b){return 0<wH(a,b)};
yH=function(a,b,c,d,e,f){f=void 0===f?0:f;g.O.call(this);this.I=a;this.l=d;this.u=e;this.u.i[b.L]=this;this.u.subscribe("adactiveviewmeasurable",this.sI,this);this.u.subscribe("adfullyviewableaudiblehalfdurationimpression",this.tI,this);this.u.subscribe("adoverlaymeasurableimpression",this.uI,this);this.u.subscribe("adoverlayunviewableimpression",this.vI,this);this.u.subscribe("adoverlayviewableendofsessionimpression",this.wI,this);this.u.subscribe("adoverlayviewableimmediateimpression",this.xI,this);
this.u.subscribe("adviewableimpression",this.yI,this);this.ad=b;this.ma=[];this.macros=c;this.G=!1;this.xa=!Fja(new uH(this.I.T()),f)};
zH=function(a,b){pb(a.ma,b);Gja(a,b,1)};
Hja=function(a){a=a.l;a.u=aH(a.u,vja(0,"No playable media files can be selected"));kH(a,"error")};
Gja=function(a,b,c){0!=b.length&&(b=g.Pc(b,function(d){return new fw(d,c,d.id)}),a.W("onAdUxUpdate",b))};
AH=function(a){var b={};b.abandon=a.abandonCommands&&SG(a.abandonCommands.commands)||[];IG.call(this,a,b)};
BH=function(a,b,c,d,e,f){e=void 0===e?!1:e;f=void 0===f?!1:f;tH.call(this,"ad-action-interstitial",a,b,c,d);this.i=d;this.Pg=e;this.tx=f};
CH=function(a,b,c,d,e,f){yH.call(this,a,b,c,d,e,1);this.B=b;this.i=b.i.durationMilliseconds||0;this.yb=null;this.C=f};
DH=function(a){IG.call(this,a);this.l=ap(this.i.playerVars||"")};
EH=function(){IG.apply(this,arguments)};
FH=function(){IG.apply(this,arguments)};
GH=function(){IG.apply(this,arguments)};
Ija=function(a,b,c,d,e,f,h){this.J=a;this.B=b;this.i=c;this.G=d;this.C=e;this.u=f;this.l=h};
HH=function(a,b,c,d,e){yH.call(this,a,b,c,d,e);var f=this;this.C=b;this.i=new g.J(function(){f.Ef("load_timeout")},1E4);
g.G(this,this.i);this.B=new ku(this);g.G(this,this.B)};
Jja=function(a){tH.call(this,"ad-message",a)};
IH=function(a,b,c,d,e,f,h){yH.call(this,a,b,c,d,e);var l=this;this.J=b;this.L=b.i.durationMs||0;this.C=h;this.V=!1;this.B=this.i=0;this.X=function(){var m=l.I.getProgressState().current;m<l.i?l.kf():m>l.B&&l.zf()}};
Lja=function(a){if(a.C&&a.V){a.V=!1;a=g.q(a.C.listeners);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.i){var c=b.i;b.i=void 0;b.l=void 0;Kja(b.u(),c)}else P("Received AdNotify terminated event when no slot is active")}};
Mja=function(){tH.call(this,"ad-attribution-bar");this.adPodPositionInfoString=null;this.adPodPosition=0;this.adPodLength=1;this.adBreakLengthSeconds=0;this.adBadgeText=null;this.adBreakRemainingLengthSeconds=0;this.adBreakEndSeconds=null;this.adVideoId=""};
g.JH=function(a,b){for(var c={},d=g.q(Object.keys(b)),e=d.next();!e.done;c={Tx:c.Tx},e=d.next())e=e.value,c.Tx=b[e],a=a.replace(new RegExp("\\$"+e,"gi"),function(f){return function(){return f.Tx}}(c));
return a};
KH=function(a){return a?g.gw(a):null};
Nja=function(a){if(!a)return[];var b=a.loggingUrls;if(!b)return[];a=[];b=g.q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,c.baseUrl&&a.push(c.baseUrl);return 0===a.length?[]:a};
Oja=function(a){return a.cancelRenderer&&a.cancelRenderer.buttonRenderer?(a=a.cancelRenderer.buttonRenderer.serviceEndpoint)&&a.muteAdEndpoint?a:null:null};
Pja=function(a){var b={};b.baseUrl=a;return{loggingUrls:[b],pingingEndpoint:{hack:!0}}};
Sja=function(a,b,c,d){if(b.button&&b.button.buttonRenderer&&(!b.button.buttonRenderer.command||!b.button.buttonRenderer.command.adInfoDialogChoiceEndpoint)&&b.button.buttonRenderer.serviceEndpoint&&b.button.buttonRenderer.serviceEndpoint.adInfoDialogEndpoint){var e=b.button.buttonRenderer.serviceEndpoint.adInfoDialogEndpoint.dialog;e&&e.adInfoDialogRenderer&&(Qja(a,e.adInfoDialogRenderer,c),a.whyThisAdInfo.menuTitle=KH(b.hoverText)||"",e.adInfoDialogRenderer.muteAdRenderer&&(b=e.adInfoDialogRenderer.muteAdRenderer.buttonRenderer)&&
Rja(a,b,c,d))}};
Qja=function(a,b,c){var d=KH(b.confirmLabel)||"",e=KH(b.title)||"",f=[];if(b.adReasons)for(var h=g.q(b.adReasons),l=h.next();!l.done;l=h.next())f.push(KH(l.value)||"");h=b.headerTitle?g.gw(b.headerTitle):"";d={closeButton:d,menuTitle:h,targetingReasonHeader:e,targetingReasons:f,dialogMessage:KH(b.dialogMessage)||"",adSettingsLink:null,cancelButton:null,continueButton:null,controlText:null};a.whyThisAdInfo=d;a.whyThisAdClicked=function(){if(b.impressionEndpoints)for(var m=g.q(b.impressionEndpoints),
n=m.next();!n.done;n=m.next())c(n.value)};
a.whyThisAdClosed=function(){b.confirmServiceEndpoint&&c(b.confirmServiceEndpoint)}};
Rja=function(a,b,c,d){if(b.navigationEndpoint&&b.navigationEndpoint.adFeedbackEndpoint&&b.navigationEndpoint.adFeedbackEndpoint.content){var e=b.navigationEndpoint.adFeedbackEndpoint.content.adFeedbackRenderer;if(e){var f={goneText:"",questionText:"",undoText:"",hoverText:KH(b.text)||"",surveyOptions:[],confirmMuteWithoutFeedbackLabel:""};a.muteAdInfo=f;b=Nja(b.navigationEndpoint);var h=Pja(b[1]),l=[Pja(b[0])];(b=Oja(e))&&l.push(b);var m=!1;a.muteAdClicked=function(){m=!0;c(h)};
a.muteAd=function(){m||c(h);m=!1;for(var n=g.q(l),p=n.next();!p.done;p=n.next())c(p.value)};
Tja(a,e,d)}}};
Tja=function(a,b,c){a.muteAdInfo.goneText=KH(b.title)||"";a.muteAdInfo.questionText=KH(b.reasonsTitle)||"";b.undoRenderer&&(a.muteAdInfo.undoText=KH(b.undoRenderer.buttonRenderer.text)||"");a.sendAdsPing=function(f){c(f)};
a=a.muteAdInfo.surveyOptions;b=g.q(b.reasons||[]);for(var d=b.next();!d.done;d=b.next()){var e=d.value;d=KH(e.reason)||"";e=Nja(e.endpoint)[0];a.push({label:d,url:e})}};
Uja=function(a,b){var c=new Mja;c.adBadgeText="Ad";1<a.l&&(c.adPodPositionInfoString=g.JH("$AD_INDEX of $ADS_COUNT",{AD_INDEX:String(a.i+1),ADS_COUNT:String(a.l)}));c.adBreakLengthSeconds=a.adBreakLengthSeconds;c.adBreakRemainingLengthSeconds=a.adBreakRemainingLengthSeconds;c.adPodPosition=a.i+1;c.adPodLength=a.l;null!=a.u&&(c.adBreakEndSeconds=a.u/1E3);b&&(c.adVideoId=b);return c};
LH=function(a,b,c,d,e,f){this.l=a;this.u=b;this.i=ZG(d);if(f)for(a=g.q(Object.keys(f)),b=a.next();!b.done;b=a.next())b=b.value,this.i[b]=f[b];this.B=c;this.G=d;this.C=e};
Vja=function(a,b,c){b.isSkippable=!0;b.skipTime=c.skipOffsetMilliseconds?Math.floor(c.skipOffsetMilliseconds/1E3):0;if(c.skippableRenderer)switch(Object.keys(c.skippableRenderer)[0]){case "skipButtonRenderer":var d=c.skippableRenderer.skipButtonRenderer;b.skip=function(){var e=d.adRendererCommands&&d.adRendererCommands.clickCommand;e?a.dd(e):a.B.jm()};
b.skipShown=function(){a.dd(d.adRendererCommands&&d.adRendererCommands.impressionCommand)}}};
Wja=function(a,b,c){Sja(b,c,function(d){a.dd(d)},function(d){a.sendAdsPing(d)})};
Xja=function(a){if(g.R(a.G.T().experiments,"dynamic_command_macro_resolution_on_tvhtml5_killswitch"))return a.u;for(var b={},c=g.q(Object.keys(a.i)),d=c.next();!d.done;d=c.next())d=d.value,b[d]=a.i[d].toString();return Object.assign(b,a.u)};
Yja=function(){return{adNextParams:"",adSystem:0,attributionInfo:null,clickThroughUrl:"",executeCommand:function(){},
instreamAdPlayerOverlayRenderer:null,instreamSurveyAdRenderer:null,slidingTextPlayerOverlayRenderer:null,isBumper:!1,isPostroll:!1,isSkippable:!1,muteAdInfo:null,skipTime:0,videoId:"",videoUrl:"",whyThisAdInfo:null,muteAd:function(){},
muteAdClicked:function(){},
sendAdsPing:function(){},
skip:function(){},
endSurveyOnSubmitted:function(){},
skipShown:function(){},
whyThisAdClicked:function(){},
whyThisAdClosed:function(){},
daiEnabled:!1,remoteSlotsData:null,adBreakRemainingLengthSeconds:null,adBreakEndSeconds:null}};
Zja=function(a,b,c,d,e,f,h){this.i=c;this.l=new LH(a,b,d,e,f,void 0);this.u=h};
$ja=function(a,b,c){var d=Yja();d.instreamAdPlayerOverlayRenderer=b;c&&(d.adNextParams=c);d.executeCommand=function(e){a.l.dd(e)};
if(b.skipOrPreviewRenderer)switch(Object.keys(b.skipOrPreviewRenderer)[0]){case "skipAdRenderer":Vja(a.l,d,b.skipOrPreviewRenderer.skipAdRenderer)}if(b.adInfoRenderer)switch(Object.keys(b.adInfoRenderer)[0]){case "adHoverTextButtonRenderer":Wja(a.l,d,b.adInfoRenderer.adHoverTextButtonRenderer)}d.isBumper=PG(a.i)&&!d.isSkippable;d.isPostroll=a.i.isPostroll;a.i.isSkippable();b=a.i.B;c=a.i.getVideoUrl();b?d.videoId=b:c&&(d.videoUrl=c);if(b=(b=a.i.G)&&b.urlEndpoint)d.clickThroughUrl=b.url||"";d.sendAdsPing=
function(e){a.l.sendAdsPing(e)};
d.daiEnabled=a.u;d.remoteSlotsData=a.i.Y;return d};
MH=function(a){this.value=a};
NH=function(a){this.value=a};
OH=function(a){this.value=a};
PH=function(a){this.value=a};
QH=function(){MH.apply(this,arguments)};
RH=function(a){this.value=a};
SH=function(a){this.value=a};
TH=function(a){this.value=a};
UH=function(a){this.value=a};
VH=function(a){this.value=a};
WH=function(a){this.value=a};
XH=function(){MH.apply(this,arguments)};
YH=function(){MH.apply(this,arguments)};
ZH=function(a){this.value=a};
$H=function(a){this.value=a};
aI=function(a){this.value=a};
bI=function(a){this.value=a};
cI=function(a){this.value=a};
dI=function(a){this.value=a};
eI=function(a){this.value=a};
fI=function(a){this.value=a};
gI=function(a){this.value=a};
hI=function(a){this.value=a};
iI=function(a){this.value=a};
jI=function(a){this.value=a};
kI=function(a){this.value=a};
lI=function(a){this.value=a};
mI=function(a){this.value=a};
nI=function(a){this.value=a};
oI=function(a){this.value=a};
pI=function(a){this.value=a};
qI=function(a){this.value=a};
rI=function(a){this.value=a};
sI=function(a){this.value=a};
tI=function(a){this.value=a};
uI=function(a){this.value=a};
vI=function(a){this.value=a};
wI=function(a){this.value=a};
xI=function(a){this.value=a};
yI=function(a){this.value=a};
zI=function(a){this.value=a};
AI=function(a){this.value=a};
BI=function(a){this.value=a};
CI=function(a){this.value=a};
DI=function(){MH.apply(this,arguments)};
EI=function(){MH.apply(this,arguments)};
FI=function(a){var b,c;if(!a.questions||1!==a.questions.length||!a.playbackCommands)return!1;a=(null===(b=a.questions[0].instreamSurveyAdMultiSelectQuestionRenderer)||void 0===b?void 0:b.surveyAdQuestionCommon)||(null===(c=a.questions[0].instreamSurveyAdSingleSelectQuestionRenderer)||void 0===c?void 0:c.surveyAdQuestionCommon);return aka(a)?!0:!1};
bka=function(a){a=((null===a||void 0===a?void 0:a.playerOverlay)||{}).instreamSurveyAdRenderer;var b;a?a.playbackCommands&&a.questions&&1===a.questions.length?(a=null===(b=a.questions[0].instreamSurveyAdMultiSelectQuestionRenderer)||void 0===b?void 0:b.surveyAdQuestionCommon,b=aka(a)):b=!1:b=!1;return b};
aka=function(a){if(!a)return!1;a=(a.instreamAdPlayerOverlay||{}).instreamSurveyAdPlayerOverlayRenderer;var b=((null===a||void 0===a?void 0:a.adInfoRenderer)||{}).adHoverTextButtonRenderer;return((null===a||void 0===a?void 0:a.skipOrPreviewRenderer)||{}).skipAdRenderer&&b?!0:!1};
dka=function(a,b,c,d,e,f){this.i=new LH(a,b,c,d,e,cka(f))};
eka=function(a,b){var c=Yja();c.instreamSurveyAdRenderer=b;c.executeCommand=function(d){a.i.dd(d)};
b=("instreamSurveyAdSingleSelectQuestionRenderer"in b.questions[0]?b.questions[0].instreamSurveyAdSingleSelectQuestionRenderer:b.questions[0].instreamSurveyAdMultiSelectQuestionRenderer).surveyAdQuestionCommon.instreamAdPlayerOverlay.instreamSurveyAdPlayerOverlayRenderer;if(b.skipOrPreviewRenderer)switch(Object.keys(b.skipOrPreviewRenderer)[0]){case "skipAdRenderer":Vja(a.i,c,b.skipOrPreviewRenderer.skipAdRenderer)}if(b.adInfoRenderer)switch(Object.keys(b.adInfoRenderer)[0]){case "adHoverTextButtonRenderer":Wja(a.i,
c,b.adInfoRenderer.adHoverTextButtonRenderer)}c.sendAdsPing=function(d){a.i.sendAdsPing(d)};
return c};
cka=function(a){var b={};b.SURVEY_LOCAL_TIME_EPOCH_S=YG(function(){var c=new Date;return""+(Math.round(c.valueOf()/1E3)+-60*c.getTimezoneOffset())});
b.SURVEY_ELAPSED_MS=YG(a);return b};
GI=function(a,b,c){g.O.call(this,!0);var d=this;this.G=b;this.C=c;this.l=a;this.yb=new g.Km(200);this.yb.Oa("tick",function(){var e=Date.now(),f=e-d.B;d.B=e;d.i+=f;d.i>=d.l&&(d.i=d.l,d.yb.stop());e=d.i/1E3;d.C&&d.C.Tb(e);fka(d,{current:e,duration:d.l/1E3})});
g.G(this,this.yb);this.i=0;this.u=null;g.Hi(this,function(){d.u=null});
this.B=0};
fka=function(a,b){a.G.Ma("onAdPlaybackProgress",b);a.u=b};
HI=function(a,b,c,d){d=void 0===d?!1:d;tH.call(this,"survey",a,{},b,c);this.Pg=d};
II=function(a,b,c,d,e,f,h){yH.call(this,a,b,c,d,e,1);var l=this;this.C=b;this.B=new ku;g.G(this,this.B);this.B.N(this.I,"resize",function(){450>l.I.Wa().Xf().width&&(g.mu(l.B),l.kf())});
this.L=0;this.J=h(this,function(){return""+(Date.now()-l.L)});
if(this.i=g.PD(a.T())?new GI(1E3*b.l,a,f):null)g.G(this,this.i),this.B.N(a,"onAdPlaybackProgress",function(m){m.current===m.duration&&(m=l.C.i,(m=m.questions&&m.questions[0])?(m=(m=m.instreamSurveyAdMultiSelectQuestionRenderer||m.instreamSurveyAdSingleSelectQuestionRenderer)&&m.surveyAdQuestionCommon,l.J.dd(m&&m.timeoutCommands)):g.Su(Error("Expected a survey question in InstreamSurveyAdRenderer.")))})};
JI=function(a,b,c,d,e,f){e=void 0===e?!1:e;f=void 0===f?!1:f;tH.call(this,"survey-interstitial",a,b,c,d);this.Pg=e;this.eC=f};
KI=function(a,b,c,d,e){yH.call(this,a,b,c,d,e,1);this.i=b};
gka=function(a){tH.call(this,"ad-text-interstitial",a)};
LI=function(a,b,c,d,e,f){yH.call(this,a,b,c,d,e);this.B=b;this.i=b.i.durationMilliseconds||0;this.yb=null;this.C=f};
hka=function(){if(wl())return!0;var a=g.M("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=g.Go("CONSENT"))?a.startsWith("YES+"):!0};
jka=function(a,b){var c=void 0===c?!0:c;var d=g.M("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Bd(window.location.href);e&&d.push(e);e=g.Bd(a);if(g.fb(d,e)||!e&&nc(a,"/"))if(g.Qo("autoescape_tempdata_url")&&(d=document.createElement("a"),g.hd(d,a),a=d.href),a&&(a=Dd(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d)))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.Hu()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ika(a,b,f)}else ika(a,b)};
ika=function(a,b,c){a="ST-"+td(a).toString(36);b=b?g.Md(b):"";c=c||5;g.Qo("drop_st_cookie_before_cb")&&!hka()||g.Fo(a,b,c)};
g.kka=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.Od(a,b)+c;a=a instanceof g.Cc?a:g.Jc(a);d.href=g.Ec(a)};
g.MI=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.M("EVENT_ID");d&&(b.ei||(b.ei=d));b&&jka(a,b);c||((window.ytspf||{}).enabled?spf.navigate(a):g.kka(a))};
g.NI=function(a,b,c,d){c&&jka(a,c);c=g.Ic(a);c=g.Ec(c);a!=c&&Xo(Error("Unsafe window.open URL: "+a));a=c;b=b||td(a).toString(36);var e,f;if(d&&"function"===typeof(null==(e=document.featurePolicy)?void 0:e.features)&&(null==(f=document.featurePolicy)?0:f.features().includes("conversion-measurement")))try{window.open(a,b,void 0,d);return}catch(h){}window.open(a,b)};
lka=function(a){a=void 0===a?null:a;tH.call(this,"ad-channel-thumbnail");this.channelIconThumbnailUrl=a};
mka=function(a){a=void 0===a?null:a;tH.call(this,"ad-title");this.videoTitle=a};
nka=function(a){a=void 0===a?null:a;tH.call(this,"advertiser-name");this.channelName=a};
OI=function(a,b,c,d,e){e=void 0===e?!1:e;tH.call(this,"player-overlay",a,{},b,d);this.videoAdDurationSeconds=c;this.i=d;this.tx=e};
oka=function(a){tH.call(this,"skip-button",a)};
pka=function(a){tH.call(this,"visit-advertiser",a);var b={};var c=a.text;a=a.navigationEndpoint;null!=c&&null!=c.runs&&null!=a?(b.runs=[g.Tb(c.runs[0])],b.runs[0].navigationEndpoint=a):(b={text:"Visit advertiser's site"},a&&(b.navigationEndpoint=a),b={runs:[b]});this.visitAdvertiserLabel=b};
PI=function(a,b,c,d,e,f,h,l,m,n,p){yH.call(this,a,b,c,d,e,1);var r=this;this.Os=!0;this.Y=m;this.i=b;this.B=f;this.ra=new ku(this);g.G(this,this.ra);this.C=new g.J(function(){r.Ef("load_timeout")},1E4);
g.G(this,this.C);this.X=!1;this.ya=l(this);this.J=h;this.L=n;this.V=p};
qka=function(a){if(a.J&&g.R(a.I.T().experiments,"enable_topsoil_wta_for_halftime")){var b=a.i.u,c=b.B,d=b.u,e=b.i;b=b.C;if(void 0===c)g.Su(Error("Expected ad break start time when a DAI ad starts"));else if(void 0===d)g.Su(Error("Expected ad break end time when a DAI ad starts"));else return e=b.slice(0,e).reduce(function(f,h){return f+h},0),Math.min(Math.max((d-c)/1E3-e,0),a.i.l)}};
SI=function(a,b){if(null!==a.Y){var c=rka(a);a=g.q(a.Y.listeners);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=c;var f=b,h=!1;d.i||"aderror"!==f||(ska(d,e,[],!1),tka(d.u(),d.l),uka(d.u(),d.l),h=!0);if(d.i&&d.i.layoutId===e){switch(f){case "adabandoned":e="abandoned";break;case "aderror":e="error";break;default:e="normal"}QI(d.u(),d.l,d.i,e);if(h){e=d.u();h=d.l;RI(e.Xb,"ADS_CLIENT_EVENT_TYPE_SLOT_UNSCHEDULED",h);e=g.q(e.Ad);for(f=e.next();!f.done;f=e.next())f.value.Oi(h);Kja(d.u(),d.l)}d.l=
null;d.i=null}}}};
TI=function(a){return(a=a.I.getVideoData(2))?a.clientPlaybackNonce:""};
rka=function(a){if(a=a.i.i.elementId)return a;g.Su(Error("No elementId on VideoAd InstreamVideoAdRenderer"));return""};
UI=function(a){var b=a.i.i,c=b.playerOverlay&&b.playerOverlay.instreamAdPlayerOverlayRenderer;c||(c={});var d=a.I.T();if(g.dE(d)&&!c.skipOrPreviewRenderer){var e=a.I.getDuration(2);isFinite(e)&&33<e&&!a.i.isSkippable()&&!g.dE(d)&&g.Su(new g.Cs("Instream ad is skippable by length, but was was marked nonskippable.",{adLengthSecs:e,IVAR:b}));d={};a.i.isSkippable()&&!PG(a.i)?d.skipAdRenderer=vka(a):d.adPreviewRenderer=wka(a,!1,PG(a.i));c.skipOrPreviewRenderer=d}c.skipOrPreviewRenderer&&g.Pb(c.skipOrPreviewRenderer)&&
g.Su(new g.Cs("IAPOR.skipOrPreview was filled, but empty.",b));return c};
vka=function(a){var b={preskipRenderer:{}};b.preskipRenderer.adPreviewRenderer=wka(a,!0,!1);b.skippableRenderer={};a=b.skippableRenderer;var c={message:{}};c.message.text="Skip Ad";a.skipButtonRenderer=c;return b};
wka=function(a,b,c){var d=a.I.getVideoData(1),e={};if(b||c){var f={},h={};c=c?g.JH("Your video will begin in $TIME_REMAINING",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"}):g.JH("You can skip to video in $TIME_REMAINING",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"});h.text=c;h.isTemplated=!0;f.templatedAdText=h;e.templatedCountdown=f}else f={},h=g.JH("Video will play after ad",{NEW_LINE:"\n"}),f.text=h,f.isTemplated=!1,e.staticPreview=f;b&&(e.durationMilliseconds=5E3);e.thumbnail={};b=e.thumbnail;
f={};f.url=XD(a.I.T(),d.videoId,"mqdefault.jpg");f.width=320;f.height=180;b.thumbnail={thumbnails:[f]};return e};
xka=function(a){function b(m,n){m=a.XR;var p=Object.assign({},{});p.FINAL=YG(Xa("1"));p.SLOT_POS=YG(Xa("0"));return aH(m,$G(p),n)}
function c(m){return null==m?{create:function(){return null}}:{create:function(n,p,r){var t=b(n,p);
p=a.Cx(n,t);n=m(n,t,p,r);g.G(n,p);return n}}}
var d=c(function(m,n,p){return new CH(a.I,m,n,p,a.Rl,a.Ra)}),e=c(function(m,n,p){return new LI(a.I,m,n,p,a.Rl,a.Ra)}),f=c(function(m,n,p){return new KI(a.I,m,n,p,a.Rl)}),h=c(function(m,n,p){return new IH(a.I,m,n,p,a.Rl,a.Ra,a.Vk)}),l=c(function(m,n,p){return new HH(a.I,m,n,p,a.Rl,a.Ra)});
this.xM=new Ija({create:function(m,n){var p=aH(b(m,n),$G(uja(m)));n=a.Cx(m,p);var r=new PI(a.I,m,p,n,a.Rl,a.Ra,a.daiEnabled,function(t){return new Zja(a.Ra,p,m,t,a.I,a.Pi,a.daiEnabled)},a.Wk,a.Xg,a.ud);
g.G(r,n);return r}},{create:function(m,n){var p=a.Cx(m,n);
m=new II(a.I,m,n,p,a.Rl,a.Ra,function(r,t){return new dka(a.Ra,n,r,a.I,a.Pi,t)});
g.G(m,p);return m}},d,e,f,h,l)};
VI=function(a,b){this.l=a;this.i={};this.u=void 0===b?!1:b};
yka=function(a,b){var c=a.startSecs+a.durationSecs;c=0>=c?null:c;if(null===c)return null;switch(a.event){case "start":case "continue":case "stop":break;case "predictStart":if(b)break;return null;default:return null}b=Math.max(a.startSecs,0);return{SM:new Nn(b,c),cO:new Jv(b,c-b,a.context,a.identifier,a.event,a.i)}};
WI=function(){this.i=[]};
zka=function(a,b,c){var d=g.ub(a.i,b);if(0<=d)return b;b=-d-1;return b>=a.i.length||a.i[b]>c?null:a.i[b]};
Aka=function(){this.i=new WI};
XI=function(a){this.i=a};
Bka=function(a){a=[a,a.u].filter(function(d){return!!d});
for(var b=g.q(a),c=b.next();!c.done;c=b.next())c.value.deactivate();return a};
Cka=function(a,b,c){this.u=a;this.i=b;this.l=c;this.B=a.getCurrentTime()};
Eka=function(a,b){var c=void 0===c?Date.now():c;b=g.q(b);for(var d=b.next();!d.done;d=b.next()){d=d.value;var e=c,f=a.i;YI({cuepointTrigger:{type:"CUEPOINT_TYPE_AD",event:Dka(d.event),cuepointId:d.identifier,totalCueDurationMs:1E3*d.durationSecs,playheadTimeMs:d.i,cueStartTimeMs:1E3*d.startSecs,cuepointReceivedTimeMs:e,contentCpn:f}});a.l&&("unknown"===d.event&&ZI("DAI_ERROR_TYPE_CUEPOINT_WITH_INVALID_EVENT",a.i),d=d.startSecs+d.i/1E3,d>a.B&&a.u.getCurrentTime()>d&&ZI("DAI_ERROR_TYPE_LATE_CUEPOINT",
a.i))}};
Fka=function(a,b,c){a.l&&YI({daiStateTrigger:{totalCueDurationMs:b,filledAdsDurationMs:c,contentCpn:a.i}})};
Gka=function(a,b){a.l&&YI({adTrimmingInfo:{contentCpn:a.i,cueIdentifier:b.cueIdentifier||void 0,adMediaInfo:b.DM}})};
ZI=function(a,b){YI({daiStateTrigger:{errorType:a,contentCpn:b}})};
YI=function(a){g.us("adsClientStateChange",a)};
Dka=function(a){switch(a){case "unknown":return"CUEPOINT_EVENT_UNKNOWN";case "start":return"CUEPOINT_EVENT_START";case "continue":return"CUEPOINT_EVENT_CONTINUE";case "stop":return"CUEPOINT_EVENT_STOP";case "predictStart":return"CUEPOINT_EVENT_PREDICT_START"}};
$I=function(a){this.I=a;this.adVideoId=this.videoId=this.adCpn=this.contentCpn=null;this.u=!0;this.B=this.i=this.Yf=!1;this.adFormat=null;this.l="AD_PLACEMENT_KIND_UNKNOWN";this.actionType="unknown_type";this.videoStreamType="VIDEO_STREAM_TYPE_VOD"};
Hka=function(a){a.contentCpn=null;a.adCpn=null;a.videoId=null;a.adVideoId=null;a.adFormat=null;a.l="AD_PLACEMENT_KIND_UNKNOWN";a.actionType="unknown_type";a.Yf=!1;a.i=!1};
Ika=function(a){a.i=!1;Vw("video_to_ad",["apbs"],void 0,void 0)};
Kka=function(a){a.B?Jka(a):(a.i=!1,Vw("ad_to_ad",["apbs"],void 0,void 0))};
Jka=function(a){a.i=!1;Vw("ad_to_video",["pbresume"],void 0,void 0)};
Lka=function(a){a.Yf&&!a.i&&(a.u=!1,a.i=!0,"ad_to_video"!==a.actionType&&(Xw("apbs",void 0,a.actionType),g.Qo("finalize_all_timelines")&&(a=a.actionType,Sw("c",a),Dw(a),Rw(a))))};
Mka=function(a){switch(a){case "AD_PLACEMENT_KIND_START":return"LATENCY_AD_BREAK_TYPE_PREROLL";case "AD_PLACEMENT_KIND_MILLISECONDS":case "AD_PLACEMENT_KIND_COMMAND_TRIGGERED":case "AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED":return"LATENCY_AD_BREAK_TYPE_MIDROLL";case "AD_PLACEMENT_KIND_END":return"LATENCY_AD_BREAK_TYPE_POSTROLL";default:return"LATENCY_AD_BREAK_TYPE_UNKNOWN"}};
g.Oka=function(a){return(a=Nka[a.toString()])?a:"LICENSE"};
aJ=function(){g.F.call(this);this.l=null;this.G=this.C=!1;this.u=new g.am;g.G(this,this.u)};
bJ=function(a){a=a.Es();return 1>a.length?NaN:a.end(a.length-1)};
Pka=function(a,b,c){a.zl()||a.getCurrentTime()>b||10<c||(a.play(),g.pp(function(){Pka(a,a.getCurrentTime(),c+1)},500))};
Qka=function(a,b){a.l&&null!==b&&b.i===a.l.i||(a.l&&a.l.dispose(),a.l=b)};
cJ=function(a){return zB(a.Vf(),a.getCurrentTime())};
Rka=function(a,b){if(0===a.Rg()||0<a.di())return!1;var c=0<a.getCurrentTime();return 0<=b&&(a=a.Es(),a.length||!c)?wB(a,b):c};
Ska=function(a){var b=a.Vf();return 0<yB(b)&&a.getDuration()?b.end(b.length-1):0};
dJ=function(a){var b=a.getDuration();return Infinity===b?1:b?a.fq()/b:0};
eJ=function(a){switch(a.di()){case 2:return"progressive.net.retryexhausted";case 3:return"fmt.decode";case 4:return"fmt.unplayable";case 5:return"drm.unavailable";case 1E3:return"capability.changed";default:return null}};
g.fJ=function(a,b){this.stateData=void 0===b?null:b;this.state=a||64};
gJ=function(a,b,c){return b===a.state&&c===a.stateData||void 0!==b&&(b&128&&!c||b&2&&b&16)?a:new g.fJ(b,c)};
hJ=function(a,b){return gJ(a,a.state|b)};
iJ=function(a,b){return gJ(a,a.state&~b)};
jJ=function(a,b,c){return gJ(a,(a.state|b)&~c)};
g.U=function(a,b){return!!(a.state&b)};
g.kJ=function(a,b){return b.state===a.state&&b.stateData===a.stateData};
g.lJ=function(a){return g.U(a,8)&&!g.U(a,2)&&!g.U(a,1024)};
mJ=function(a){return a.qc()&&!g.U(a,16)&&!g.U(a,32)};
Tka=function(a){return g.U(a,8)&&g.U(a,16)};
g.nJ=function(a){return g.U(a,1)&&!g.U(a,2)};
oJ=function(a){return g.U(a,128)?-1:g.U(a,2)?0:g.U(a,64)?-1:g.U(a,1)&&!g.U(a,32)?3:g.U(a,8)?1:g.U(a,4)?2:-1};
pJ=function(a,b,c,d,e,f,h,l){g.O.call(this);this.Bf=a;this.I=b;this.i=d;this.J=this.i.l instanceof IG?this.i.l:null;this.l=null;this.X=!1;this.C=c;this.V=(a=b.getVideoData(1))&&a.isLivePlayback||!1;this.ma=0;this.ra=!1;this.Fk=e;this.Tp=f;this.zn=h;this.Y=!1;this.daiEnabled=l};
Uka=function(a){if(eH(a.I)){var b=a.I.getVideoData(2);b=a.i.V[b.Vc]||null;if(!b)return a.Cj(),!0;(!a.l||a.l&&a.l.ad!==b)&&a.rr(b)}else if(1===a.I.getPresentingPlayerType()&&a.l)return a.Cj(),!0;return!1};
Vka=function(a){(a=a.baseUrl)&&g.Nq(a,void 0,dn(a))};
Wka=function(a,b){a.C.Mr(a.i.i.i,b,a.IF(),a.KF(),a.isLiveStream())};
qJ=function(a){Xka(a.Bf,a.i.i,a);a.daiEnabled&&!a.i.J&&(Yka(a,a.LF()),a.i.J=!0)};
Yka=function(a,b){for(var c=rJ(a),d=a.i.i.start,e=[],f=g.q(b),h=f.next();!h.done;h=f.next()){h=h.value;if(c<=d)break;var l=Zka(h);e.push({externalVideoId:h.B,originalMediaDurationMs:(1E3*h.l).toString(),trimmedMediaDurationMs:(parseInt(h.i.trimmedMaxNonSkippableAdDurationMs,10)||0).toString()});l=d+l;var m=Math.min(l,c);h.u.B=a.i.i.start;h.u.u=c;if(!$ka(a,h,d,m)||l!==m)break;d=l}b=b.reduce(function(n,p){return n+Zka(p)},0);
Fka(a.Fk,a.i.i.ws(),b);Gka(a.Fk,{cueIdentifier:a.i.B&&a.i.B.identifier,DM:e})};
Zka=function(a){var b=1E3*a.l;return 0<parseInt(a.i.trimmedMaxNonSkippableAdDurationMs,10)&&parseInt(a.i.trimmedMaxNonSkippableAdDurationMs,10)<b?parseInt(a.i.trimmedMaxNonSkippableAdDurationMs,10):b};
rJ=function(a){var b=a.i.i.end;a=zka(a.Tp,a.i.i.start,b);return Math.min(b,null===a?Infinity:a)};
$ka=function(a,b,c,d){var e=a.zn.create(b,$G(tja(a.i)),a.i.i.i);c=e.xF(c,d);g.Fi(e);if(!c)return!1;a.i.V[c]=b;return!0};
tJ=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;a.X=!0;g.Fi(a.l);Kka(a.C);b?b=!1:a.daiEnabled?(b=a.I.getCurrentTime(2,!0),b=1>=Math.abs(b-a.i.i.end/1E3)):b=!0;if(b&&!a.i.C.hasOwnProperty("ad_placement_end")){b=g.q(a.i.X);for(var d=b.next();!d.done;d=b.next())Vka(d.value);a.i.C.ad_placement_end=!0}b=a.i.L;if(null!==b){d=a.Fk;var e=a.i.B&&a.i.B.identifier,f=a.i.i.start,h=rJ(a);d.l&&YI({driftRecoveryInfo:{contentCpn:d.i,cueIdentifier:e||void 0,driftRecoveryMs:b.toString(),breakDurationMs:Math.round(h-
f).toString(),driftFromHeadMs:Math.round(1E3*d.u.Xl()).toString()}});a.i.L=null}c||a.daiEnabled?sJ(a.Bf,!0):a.V&&a.VD()&&a.Ss()?sJ(a.Bf,!1,ala(a)):sJ(a.Bf,!1);Wka(a,!0)};
ala=function(a){if(a.ra)return function(c){c.seekTo(Infinity,!0,void 0,1)};
var b=Math.floor(g.Ra()/1E3)-a.ma;return function(c){c.seekTo(c.getCurrentTime()+b,!0,void 0,1)}};
bla=function(a,b,c){this.i=a;this.l=b;this.u=c};
uJ=function(){this.B=[];this.C=[];this.i=[];this.l=new Set;this.G=new Map};
vJ=function(){uJ.i||(uJ.i=new uJ);return uJ.i};
dla=function(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.l.has(c)&&a.u&&a.u();var h=g.Hu(c),l=g.Fu(c);h&&l&&(d.csn=h,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&g.$u(a.client,h,l,[g.Bu(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&g.$u(a.client,h,l,[g.Bu(d.playerResponse.trackingParams)]))})};
ela=function(a,b){wJ(a,g.Bu(b),void 0,void 0)};
wJ=function(a,b,c,d){d=void 0===d?0:d;if(a.l.has(d))a.B.push([b,c]);else{var e=g.Hu(d);c=c||g.Fu(d);e&&c&&g.$u(a.client,e,c,[b])}};
gla=function(a,b,c){c=void 0===c?{}:c;a.l.add(c.layer||0);a.u=function(){fla(a,b,c);var f=g.Fu(c.layer);if(f){for(var h=g.q(a.B),l=h.next();!l.done;l=h.next())l=l.value,wJ(a,l[0],l[1]||f,c.layer);f=g.q(a.C);for(h=f.next();!h.done;h=f.next()){var m=h.value;h=void 0;h=void 0===h?0:h;l=g.Hu(h);var n=m[0]||g.Fu(h);l&&n&&(h=a.client,m=m[1],m={csn:l,ve:n.getAsJson(),clientData:m},n={Be:Iu(l),fl:l},"UNDEFINED_CSN"==l?Zu("visualElementStateChanged",m,n):h?qr("visualElementStateChanged",m,h,n):g.us("visualElementStateChanged",
m,n))}}};
g.Hu(c.layer)||a.u();if(c.tF)for(var d=g.q(c.tF),e=d.next();!e.done;e=d.next())dla(a,e.value,c.layer);else g.Su(Error("Delayed screen needs a data promise."))};
fla=function(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.UR?c.UR:c.layer;var e=g.Hu(d);d=g.Fu(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var h,l=g.M("EVENT_ID");g.Qo("screen_manager_log_servlet_ei")&&"UNDEFINED_CSN"===e&&l&&(h={servletData:{serializedServletEventId:l}});try{var m=a.client;l=f;var n=c.qF,p=c.Be,r=hla(),t={csn:r,pageVe:(new Au({veType:b,youtubeData:h})).getAsJson()};
l&&l.visualElement?t.implicitGesture={parentCsn:l.clientScreenNonce,gesturedVe:l.visualElement.getAsJson()}:l&&g.Tu(new g.Cs("newScreen() parent element does not have a VE - rootVe",b));n&&(t.cloneCsn=n);n={Be:p,fl:r};m?qr("screenCreated",t,m,n):g.us("screenCreated",t,n);es(fv,new Yu(r));var u=r}catch(x){Qfa(x,{Kt:b,rootVe:d,parentVisualElement:void 0,z5:e,P5:f,qF:c.qF});g.Su(x);return}Ku(u,b,c.layer,c.Be);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=g.Qo("screen_manager_skip_hide_killswitch"))){a:{b=g.q(Object.values(ila));
for(f=b.next();!f.done;f=b.next())if(g.Hu(f.value)==e){b=!0;break a}b=!1}b=!b}b&&bv(a.client,e,d,!0);a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=u||"");g.Ww("csn",u);kv.getInstance().clear();d=g.Fu(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(g.Qo("web_mark_root_visible")||g.Qo("music_web_mark_root_visible"))&&g.av(u,d,void 0);a.l.delete(c.layer||0);a.u=void 0;e=g.q(a.G);for(u=e.next();!u.done;u=e.next())u=g.q(u.value),b=u.next().value,u.next().value.has(c.layer)&&d&&wJ(a,b,d,c.layer)};
xJ=function(){this.i={};if(this.l=tea()){var a=g.Go("CONSISTENCY");a&&jla(this,{encryptedTokenJarContents:a})}};
jla=function(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.l&&g.Fo("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}};
yJ=function(){var a=g.M("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===g.M("INNERTUBE_CLIENT_NAME")&&(this.localStorage=kla(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)};
lla=function(){yJ.i||(yJ.i=new yJ);return yJ.i};
kla=function(a){return void 0===a.localStorage?new as("yt-client-location"):a.localStorage};
zJ=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;var d=g.M("INNERTUBE_CONTEXT");if(!d)return g.Su(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=g.Ub(d);g.Qo("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;"MWEB"===e.clientName&&(e.clientFormFactor=g.M("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=Math.round(window.devicePixelRatio||
1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=void 0===f?!1:f;g.ur.getInstance();var h="USER_INTERFACE_THEME_LIGHT";g.wr(0,165)?h="USER_INTERFACE_THEME_DARK":g.wr(0,174)?h="USER_INTERFACE_THEME_LIGHT":!g.Qo("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(h="USER_INTERFACE_THEME_DARK");f=f?h:Bfa()||h;e.userInterfaceTheme=
f;if(g.Qo("web_log_connection")&&!b){if(f=Br())e.connectionType=f;g.Qo("web_log_effective_connection_type")&&(f=Dr())&&(d.client.effectiveConnectionType=f)}if("MWEB"===e.clientName||"WEB"===e.clientName)e.mainAppWebInfo={graftUrl:g.A.location.href},g.Qo("kevlar_woffle")&&rr.i&&(e.mainAppWebInfo.pwaInstallabilityStatus=rr.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),g.Qo("web_include_display_mode_killswitch")||(e.mainAppWebInfo.webDisplayMode=sr()),g.Qo("kevlar_share_panel_more_button")&&
(e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share);if(!g.Qo("web_populate_time_zone_itc_killswitch")){a:{if("undefined"!==typeof Intl)try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(E){}l=void 0}l&&(e.timeZone=l)}g.Qo("web_it_use_exp_token_from_config_ks")?(l="MWEB"===e.clientName?g.Go("EXPERIMENTS_DEBUG"):Eo.get("EXPERIMENTS_DEBUG"))?e.experimentsToken="ZERO"===l?"GgIQAQ%3D%3D":l:delete e.experimentsToken:(l=g.M("EXPERIMENTS_TOKEN",""))?
e.experimentsToken=l:delete e.experimentsToken;e=To();xJ.i||(xJ.i=new xJ);l=g.Ib(xJ.i.i);d.request=Object.assign(Object.assign({},d.request),{internalExperimentFlags:e,consistencyTokenJars:l});l=g.ur.getInstance();e=g.wr(0,58);l=l.get("gsml","");d.user=Object.assign({},d.user);e&&(d.user.enableSafetyMode=e);l&&(d.user.lockedSafetyMode=!0);(e=g.M("DELEGATED_SESSION_ID"))&&!g.Qo("pageid_as_header_web")&&(d.user.onBehalfOfUser=e);g.Qo("warm_op_csn_cleanup")?c&&(b=g.Hu())&&(d.clientScreenNonce=b):!b&&
(b=g.Hu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});g.Qo("web_enable_client_location_service")&&(a=lla(),d.client||(d.client={}),a.i?(d.client.locationInfo||(d.client.locationInfo={}),d.client.locationInfo.latitudeE7=1E7*a.i.coords.latitude,d.client.locationInfo.longitudeE7=1E7*a.i.coords.longitude,d.client.locationInfo.horizontalAccuracyMeters=a.i.coords.accuracy,d.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):a.locationPlayabilityToken&&(d.client.locationPlayabilityToken=
a.locationPlayabilityToken));var m,n;try{var p=null===(m=d.adSignalsInfo)||void 0===m?void 0:m.consentBumpParams,r=lp(void 0),t=r.bid;delete r.bid;d.adSignalsInfo={params:[],bid:t};for(var u=g.q(Object.entries(r)),x=u.next();!x.done;x=u.next()){var y=g.q(x.value),B=y.next().value,H=y.next().value;null===(n=d.adSignalsInfo.params)||void 0===n?void 0:n.push({key:B,value:""+H})}!Io()&&p&&(d.adSignalsInfo.consentBumpParams=p)}catch(E){g.Su(E)}return d};
AJ=function(){ks.apply(this,arguments);this.i={}};
mla=function(){BJ||(BJ=new AJ);return BJ};
nla=function(a,b){b?a.i.Authorization="Bearer "+b:delete a.i.Authorization};
ola=function(a){return a.isTimeout?"NO_BID":"ERR_BID"};
pla=function(){var a=null;Mp().then(function(b){return a=b},function(b){return a=ola(b)});
return a};
qla=function(){var a=Mm(1E3,"NO_BID");return Am(g.Cm(Mda([Mp(),a]),ola),function(){return a.cancel()})};
rla=function(a){return a.ub?g.wr(g.ur.getInstance(),140)?"STATE_OFF":"STATE_ON":"STATE_NONE"};
CJ=function(a){this.player=a;this.l=this.i=1};
EJ=function(a,b,c,d){c=void 0===c?{}:c;var e=c.Tr,f=c.Ld;d=void 0===d?"":d;c=a.player.getVideoData(1);var h=a.player.T().hj,l={AD_BLOCK:a.i++,AD_BREAK_LENGTH:e?e.durationSecs:0,AUTONAV_STATE:rla(a.player.T()),CA_TYPE:"image",CPN:c.clientPlaybackNonce,DRIFT_FROM_HEAD_MS:1E3*a.player.Xl(),LACT:tq(),LIVE_INDEX:e?a.l++:1,LIVE_TARGETING_CONTEXT:e&&e.context?e.context:"",MIDROLL_POS:f?Math.round(f.start/1E3):0,MIDROLL_POS_MS:f?Math.round(f.start):0,VIS:a.player.getVisibilityState(),P_H:a.player.Wa().Xf().height,
P_W:a.player.Wa().Xf().width,YT_REMOTE:h?h.join(","):""},m=kp(jp);Object.keys(m).forEach(function(p){null!=m[p]&&(l[p.toUpperCase()]=m[p].toString())});
""!==d&&(l.BISCOTTI_ID=d);d={};ip(b)&&(d.sts="18753",(e=a.player.T().Na)&&(d.forced_experiments=e));b=fp(g.en(b,l),d);a.player.getVideoData();if(2!==b.split("?").length)return wm(Error("Invalid AdBreakInfo URL"));if((d=null===c||void 0===c?void 0:c.oauthToken)&&hp()){var n=mla();nla(n,d)}n=a.player.Mk(n);a=sla(a,b,l,c.isMdxPlayback);return g.DJ(n,a,"/youtubei/v1/player/ad_break")};
vla=function(a,b,c,d){a.client||(a.client={});a.client.originalUrl=b;var e=gp(b),f=tla(b,"X-YouTube-Time-Zone");(e||f)&&"undefined"!==typeof Intl&&(a.client.timeZone=(new Intl.DateTimeFormat).resolvedOptions().timeZone);f=tla(b,"X-YouTube-Ad-Signals");if(e||f||""!==c){var h={};b=$o(lp(c)).split("&");var l=new Map;b.forEach(function(m){m=m.split("=");1<m.length&&l.set(m[0].toString(),decodeURIComponent(m[1].toString()))});
l.has("bid")&&(h.bid=l.get("bid"));h.params=[];ula.forEach(function(m){l.has(m)&&(m={key:m,value:l.get(m)},h.params.push(m))});
a.adSignalsInfo=h}a.client.unpluggedAppInfo||(a.client.unpluggedAppInfo={});a.client.unpluggedAppInfo.enableFilterMode=!1;b=d.deviceParams.cosver;null!=b&&"cosver"!==b&&(a.client.osVersion=b);b=d.deviceParams.cplatform;null!=b&&"cplatform"!==b&&""!==b&&(a.client.platform=b);b=d.deviceParams.cmodel;null!=b&&"cmodel"!==b&&(a.client.deviceModel=b);b=d.deviceParams.cplayer;null!=b&&"cplayer"!==b&&(a.client.playerType=b);d=d.deviceParams.cbrand;null!=d&&"cbrand"!==d&&(a.client.deviceMake=d);a.user||(a.user=
{});a.user.lockedSafetyMode=!1};
yla=function(a,b){var c=!1;if(""===b)return c;b.split(",").forEach(function(d){var e={},f={clientName:"UNKNOWN_INTERFACE",platform:"UNKNOWN_PLATFORM",clientVersion:""},h="ACTIVE";"!"===d[0]&&(d=d.substring(1),h="INACTIVE");d=d.split("-");3>d.length||(d[0]in wla&&(f.clientName=wla[d[0]]),d[1]in xla&&(f.platform=xla[d[1]]),f.applicationState=h,f.clientVersion=2<d.length?d[2]:"",e.remoteClient=f,a.remoteContexts?a.remoteContexts.push(e):a.remoteContexts=[e],c=!0)});
return c};
sla=function(a,b,c,d){var e=c.DRIFT_FROM_HEAD_MS&&!Number.isNaN(c.DRIFT_FROM_HEAD_MS)?Math.trunc(c.DRIFT_FROM_HEAD_MS):0,f=zla.exec(b);f=null!=f&&2<=f.length?f[1]:"";var h=Ala.test(b),l=Bla.exec(b);l=null!=l&&2<=l.length?l[1]:"";var m=Cla.exec(b);m=null!=m&&2<=m.length&&!Number.isNaN(Number(m[1]))?Number(m[1]):1;var n=Dla.exec(b);n=null!=n&&2<=n.length?n[1]:"0";var p=g.VD(a.player.T()),r=zJ(a.player.getVideoData(1).ya,!0),t="BISCOTTI_ID"in c?c.BISCOTTI_ID:"";vla(r,b,t.toString(),a.player.T());a={splay:!1,
lactMilliseconds:c.LACT.toString(),playerHeightPixels:c.P_H,playerWidthPixels:c.P_W,vis:c.VIS,signatureTimestamp:18753,autonavState:rla(a.player.T())};d&&(d={},yla(d,c.YT_REMOTE)&&(a.mdxContext=d));if(d=Ela.includes(p)?void 0:g.Go("PREF")){for(var u=d.split(/[:&]/),x=0,y=u.length;x<y;x++){var B=u[x].split("=");if(("SML"===B[0].toUpperCase()||"GSML"===B[0].toUpperCase())&&1<B.length&&"TRUE"===B[1].toUpperCase()){r.user.lockedSafetyMode=!0;break}}a:{if("FLAG_AUTO_CAPTIONS_DEFAULT_ON"in Fla)for(d=d.split(/[:&]/),
x=Fla.FLAG_AUTO_CAPTIONS_DEFAULT_ON,u="f"+(1+Math.floor(x/31)).toString(),x=1<<Math.floor(x%31),y=0,B=d.length;y<B;y++){var H=d[y].split("=");if(H[0]===u&&parseInt("0x"+H[1],16)&x){d=!0;break a}}d=!1}a.autoCaptionsDefaultOn=d}b=Gla.exec(b);(b=null!=b&&2<=b.length?b[1]:"")&&l&&(r.user.credentialTransferTokens=[{token:b,scope:"VIDEO"}]);b={contentPlaybackContext:a};f={adBlock:Math.trunc(c.AD_BLOCK),params:f,breakIndex:m,breakPositionMs:n,clientPlaybackNonce:c.CPN,topLevelDomain:p,isProxyAdTagRequest:h,
context:r,adSignalsInfoString:$o(lp(t.toString())),overridePlaybackContext:b};l&&(f.videoId=l);c.LIVE_TARGETING_CONTEXT&&(f.liveTargetingParams=c.LIVE_TARGETING_CONTEXT);c.AD_BREAK_LENGTH&&(f.breakLengthMs=Math.trunc(1E3*c.AD_BREAK_LENGTH).toString());e&&(f.driftFromHeadMs=e.toString());return f};
FJ=function(a,b,c,d,e,f){g.O.call(this);this.G=a;this.l=b;this.B=c;this.C=d;this.i=e;this.u=f;Hla(this)};
Ila=function(a,b){var c={isEmpty:!0,BG:!1,Ak:[]};if(!b)return c;b&&b.trackingParams&&ela(vJ(),b.trackingParams);if(b&&b.adThrottled)return c.BG=!0,c;b=b.playerAds;if(!b||!b.length)return c;b=b.map(function(e){return e.adPlacementRenderer}).filter(function(e){return e&&null!=e.renderer});
if(g.gb(b))return c;if(0<a.i.i.end){var d=a.i.i.end.toString();b.forEach(function(e){(e=e.config&&e.config.adPlacementConfig)&&"AD_PLACEMENT_KIND_MILLISECONDS"==e.kind&&"-1"==e.adTimeOffset.offsetEndMilliseconds&&e.adTimeOffset.offsetEndMilliseconds!=d&&(e.adTimeOffset.offsetEndMilliseconds=d)})}c.Ak=b;
c.isEmpty=!1;return c};
Hla=function(a){[a.i.ma,a.i.i].filter(function(b){return null!=b}).forEach(function(b){Xka(a.l,b,a)})};
GJ=function(a,b,c,d,e,f,h,l){pJ.call(this,a,b,c,d,e,f,h,l);this.u=d.l;this.B=-1;this.G=null;this.L=Jla(this.Gv())};
Kla=function(a){a.B++;var b=a.Gv();b?a.rr(b):tJ(a)};
Jla=function(a){return a?Lla.some(function(b){return a instanceof b}):!1};
Mla=function(a){this.i=new bla(function(b){b=new pJ(a.Bf,a.I,a.pF(),b,a.Fk,a.Tp,a.zn,a.daiEnabled);qJ(b);return b},function(b){return new FJ(a.bz,a.Bf,a.I,a.Cl,b,a.Fk)},function(b){b=new GJ(a.Bf,a.I,a.pF(),b,a.Fk,a.Tp,a.zn,a.daiEnabled);
qJ(b);return b})};
Nla=function(a,b){QG.call(this);a.adStart&&a.adStart.adMessageRenderer&&(g.us("adNotifyFilled",{notifyCompositeType:"COMPOSITE_AD_TYPE_LINEAR_AD_SEQUENCE"}),RG(this,new EH(a.adStart.adMessageRenderer)));if(a.linearAds){var c=[];a=g.q(a.linearAds);for(var d=a.next();!d.done;d=a.next()){d=d.value;if(d.instreamVideoAdRenderer){var e=b(d.instreamVideoAdRenderer);RG(this,e);c.push(e.l);d.instreamVideoAdRenderer.isCritical&&(this.l=1)}else d.adActionInterstitialRenderer?(d=new AH(d.adActionInterstitialRenderer),
RG(this,d)):d.adIntroRenderer&&(d=new DH(d.adIntroRenderer),RG(this,d),this.l=1);this.i.filter(function(f){return f instanceof OG}).forEach(function(f,h){f instanceof OG&&(h=new MG(h,c),f.u=h)})}}};
Pla=function(a,b){QG.call(this);RG(this,Ola(this,a.adVideoStart));a:{var c=a.linearAd;if(c){if(c.instreamVideoAdRenderer){b=b(c.instreamVideoAdRenderer);break a}if(c.instreamSurveyAdRenderer){b=new WG(c.instreamSurveyAdRenderer);break a}}b=null}RG(this,b);(a=a.adVideoEnd)?a.adActionInterstitialRenderer?(this.l=1,a=new AH(a.adActionInterstitialRenderer)):a=null:a=null;RG(this,a)};
Ola=function(a,b){return null==b?null:b.adActionInterstitialRenderer?(a.l=1,new AH(b.adActionInterstitialRenderer)):b.adTextInterstitialRenderer?new GH(b.adTextInterstitialRenderer):b.adMessageRenderer?(g.us("adNotifyFilled",{notifyCompositeType:"COMPOSITE_AD_TYPE_SANDWICHED_LINEAR_AD"}),new EH(b.adMessageRenderer)):b.surveyTextInterstitialRenderer?new FH(b.surveyTextInterstitialRenderer):null};
Qla=function(a,b,c){this.u=a;this.i=b;this.l=c};
Rla=function(a){var b=new cH(a.jF),c=new dH(b);return{pN:function(){return b},
mA:function(){return c}}};
Sla=function(a){this.i=a};
Tla=function(a,b,c,d){try{var e=b.renderer,f=b.config&&b.config.adPlacementConfig,h=e?a.i.create(e,f):null;return new nja(b,c,h,d)}catch(l){g.Vo(l)}};
Ula=function(a){var b=new Sla(a.yM);return{HF:function(){return b}}};
