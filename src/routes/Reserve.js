import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const MainLayout = loadable(() => import("../layouts/MainLayout"));
/* 에약 페이지 S */
const ReservePage = loadable(() => import("../reserve/pages/Reserve"));
/* 예약 페이지 E */

const Reserve = () => {
  return (
    <Routes>
      <Route path="/reserve" element={<MainLayout />}>
        <Route index element={<ReservePage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Reserve);
