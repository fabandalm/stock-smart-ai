package com.meshtier.repositories;

import com.meshtier.models.OutboundStock;
import com.meshtier.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OutboundStockRepository extends JpaRepository<OutboundStock, Long> {
    List<OutboundStock> findByProduct(Product product);

    @Query(value = """
            WITH LastFiveMonths AS (
                SELECT
                    DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 month' * generate_series(0, 4) AS month_start
            )
            SELECT
                to_char(month_start, 'YYYY-MM') AS month,
                COALESCE(SUM(e.quantite), 0) AS totalQuantity
            FROM
                LastFiveMonths m
            LEFT JOIN
                oubound_stock e ON DATE_TRUNC('month', e.date) = m.month_start
            GROUP BY
                month_start
            ORDER BY
                month_start;
            """, nativeQuery = true)
    List<Object[]> getOutboundStockProgress();
}
