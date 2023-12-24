package com.hospital.system.dto.requestdto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class RequestMedicalInventoryDto {
    private String name;
    private String qty;
    private String unitPrice;
    private String manufacturedDate;
    private String expiredDate;
}
