import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { doctorsData } from "../assets/assets";
import {
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  User,
} from "lucide-react";
const DoctorDetails = () => {
  const { id } = useParams();
  const { navigate } = useContext(AppContext);

  const doctor = doctorsData.find((doctor) => doctor._id === parseInt(id));

  // Booking form state
  const [bookingData, setBookingData] = useState({
    patientName: "",
    phone: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
    paymentMethod: "cash",
  });
  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };
  const handleBookingSubmit = () => {
    if (
      !bookingData.patientName ||
      !bookingData.phone ||
      !bookingData.email ||
      !bookingData.appointmentDate ||
      !bookingData.appointmentTime
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    console.log("Booking submitted:", {
      doctor: doctor.name,
      ...bookingData,
    });

    toast.success(`Appointment booked successfully with ${doctor.name}!`);

    // Reset form
    setBookingData({
      patientName: "",
      phone: "",
      email: "",
      appointmentDate: "",
      appointmentTime: "",
      symptoms: "",
    });
    navigate("/my-appointments");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white p-4">
        <div className="flex items-center gap-4 max-w-4xl mx-auto">
          <button
            onClick={handleGoBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {" "}
            <ArrowLeft className="w-6 h-6" />{" "}
          </button>
          <h1 className="text-xl font-semibold">Doctor Details</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Doctor Details Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Doctor Profile Section */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                {/* Basic Info */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {doctor.name}
                  </h2>
                  <p className="text-lg text-primary font-semibold mb-3">
                    {doctor.specialty}
                  </p>

                  {/* Rating */}

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {renderStars(doctor.rating)}
                    </div>
                    <span>{doctor.rating}.0 rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}

            <div className="border-t border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Education */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Education
                      </h3>
                      <p className="text-gray-600">{doctor.education}</p>
                    </div>
                  </div>
                  {/* Experience */}

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Experience
                        </h3>
                        <p className="text-gray-600">{doctor.experience}</p>
                      </div>
                    </div>
                  </div>
                  {/* Fees */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Consultation Fee
                      </h3>
                      <p className="text-gray-600">$ {doctor.fees}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600">{doctor.location}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Phone
                      </h3>
                      <a
                        href={`tel:${doctor.phone}`}
                        className="text-primary hover:underline"
                      >
                        {doctor.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${doctor.email}`}
                        className="text-primary hover:underline break-all"
                      >
                        {doctor.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Book Appointment
              </h2>
              <p className="text-gray-600">
                Schedule your consultation with {doctor.name}
              </p>
            </div>

            <div className="space-y-6">
              {/* Patient Name */}
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Patient Name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="patientName"
                    value={bookingData.patientName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    placeholder="Enter patient's full name"
                  />
                </div>
              </div>

              {/* Phone and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="+92-300-1234567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="patient@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="appointmentDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Appointment Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={bookingData.appointmentDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appointmentTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <select
                      id="appointmentTime"
                      name="appointmentTime"
                      value={bookingData.appointmentTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Symptoms/Reason */}
              <div>
                <label
                  htmlFor="symptoms"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Symptoms / Reason for Visit
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  value={bookingData.symptoms}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-vertical"
                  placeholder="Please describe your symptoms or reason for consultation..."
                ></textarea>
              </div>

              {/* Consultation Fee Display */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">
                    Consultation Fee:
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    $ {doctor.fees}
                  </span>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label
                  htmlFor="paymentMethod"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Payment Method
                </label>
                <div className="relative">
                  <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={bookingData.paymentMethod}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  >
                    <option value="cash">Pay at Clinic</option>
                    <option value="online">Online</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleBookingSubmit}
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-md cursor-pointer"
              >
                {bookingData.paymentMethod === "cash"
                  ? "Pay at Clinic"
                  : "Pay Now"}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * You will receive a confirmation call within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorDetails;
