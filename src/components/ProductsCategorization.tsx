import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box
} from "@chakra-ui/react";

export const ProductsCategorization = () => {
  return (
    <Accordion marginTop={6} fontSize="13px" dir="rtl" allowMultiple>
      <AccordionItem padding={2}>
        <h2>
          <AccordionButton>
            <Box fontSize="15px" as="span" flex="1" textAlign="right">
              چگونه میتوانم یک پروفایل ایجاد کنم ؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          در وب سایت روی گزینه "ثبت نام" کلیک کنید. میتوانید با استفاده از شماره
          موبایل ثبت نام خود را انجام دهید. (کد فعال سازی برایتان پیامک میشود .)
          بعد از وارد نمودن کد فعالسازی ، ثبت نام انجام می شود. سپس روی گزینه
          تکمیل اطلاعات کلیک و اطلاعات خود را تکمیل نمایید.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem padding={2}>
        <h2>
          <AccordionButton>
            <Box fontSize="15px" as="span" flex="1" textAlign="right">
              چطور در دیجی کالا سفارش خود را ثبت کنم ؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه کنید ،
          پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب کنید.بعد از اتمام
          ثبت سفارش ، سیستم کد سفارش شما را نمایش خواهد داد.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem padding={2}>
        <h2>
          <AccordionButton>
            <Box fontSize="15px" as="span" flex="1" textAlign="right">
              کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با تعداد
              بیش از یک عدد خریداری کرد؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است، دیجی‌کالا
          تعهدی در قبال سفارش‏‌های تعدادی ندارد و در صورتی که امکان فروش بیشتر
          از یک عدد وجود داشته باشد، هماهنگی‏‌های لازم با مشتری انجام خواهد شد.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
