import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./feature/home/presenstitions/pages/home_page";
import PaymentOperationPage from "./feature/payment/presentistion/pages/payment_operation";

const AppRoutes = () => (
        <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/buys" element={<PaymentOperationPage />} />

        </Routes>
);

export default AppRoutes;
