const {
  emptyInput,
  emailVerification,
  phoneVerification,
} = require("../util/validation.js");

describe("validation", () => {
  describe("emtyInput", () => {
    it("should return true if the input is not blank", () => {
      const isTrue = emptyInput("Mazahim");

      expect(isTrue).toEqual(true);
    });

    it("should return false if the input is  blank", () => {
      const isTrue = emptyInput("");

      expect(isTrue).toEqual(false);
    });
  });

  describe("emailVerification", () => {
    it("should return true if the input is in email format", () => {
      const isTrue = emailVerification("mazamim91@gmail.com");
      expect(isTrue).toEqual(true);
    });

    it("should return false if the input is in email not in format", () => {
      const isTrue = emailVerification("mazamim91");
      expect(isTrue).toEqual(false);
    });

    it("should return false even it is blank", () => {
      const isTrue = emailVerification("");
      expect(isTrue).toEqual(false);
    });
  });


  describe("phoneVerification", () => {
    it("should return true if the input is in format", () => {
      const isTrue = phoneVerification("0458665900");
      expect(isTrue).toEqual(true);
    });

    it("should return false if the input is not in format", () => {
      const isTrue = phoneVerification("0458");
      expect(isTrue).toEqual(false);
    });

    it("should return false even it is blank", () => {
      const isTrue = phoneVerification("");
      expect(isTrue).toEqual(false);
    });
  });


});
